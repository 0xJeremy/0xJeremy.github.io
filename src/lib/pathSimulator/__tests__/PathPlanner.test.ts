import { describe, it, expect } from "vitest";
import { Direction } from "../core/types";
import { DEFAULT_CONFIG } from "../core/constants";
import {
  createShape,
  pickNextDirection,
  planSplit,
  planNextSegment,
  validateSplitPlan,
  getNextShapePosition,
} from "../simulation/PathPlanner";
import * as Grid from "../core/GridCoord";
import * as Dir from "../core/Direction";

describe("PathPlanner", () => {
  describe("createShape", () => {
    it("creates a shape at the given position", () => {
      const pos = { row: 5, col: 10 };
      const shape = createShape(pos);

      expect(shape.position).toEqual(pos);
      expect(shape.id).toMatch(/^shape_\d+$/);
      expect(["square", "diamond", "triangle"]).toContain(shape.type);
      expect(shape.activated).toBe(false);
      expect(shape.activationEffects.length).toBeGreaterThanOrEqual(2);
      expect(shape.activationEffects.length).toBeLessThanOrEqual(4);
    });

    it("accepts a specific shape type", () => {
      const shape = createShape({ row: 0, col: 0 }, "diamond");
      expect(shape.type).toBe("diamond");
    });
  });

  describe("pickNextDirection", () => {
    it("never returns the opposite direction", () => {
      for (let i = 0; i < 50; i++) {
        const current = Dir.randomDirection();
        const next = pickNextDirection(current, { row: 0, col: 0 });
        expect(next).not.toBe(Dir.getOpposite(current));
      }
    });

    it("can return the same direction (continue straight)", () => {
      // Run many times, should eventually get same direction
      let gotSame = false;
      for (let i = 0; i < 100; i++) {
        const current = Direction.RIGHT;
        const next = pickNextDirection(current, { row: 0, col: 0 });
        if (next === current) {
          gotSame = true;
          break;
        }
      }
      expect(gotSame).toBe(true);
    });
  });

  describe("planSplit", () => {
    it("creates a valid split plan", () => {
      const splitPoint = { row: 10, col: 10 };
      const plan = planSplit(splitPoint, Direction.RIGHT, DEFAULT_CONFIG);

      expect(validateSplitPlan(plan)).toBe(true);
    });

    it("paths end at the same rejoin point", () => {
      const plan = planSplit(
        { row: 5, col: 5 },
        Direction.DOWN,
        DEFAULT_CONFIG,
      );

      const endA = plan.pathA[plan.pathA.length - 1];
      const endB = plan.pathB[plan.pathB.length - 1];

      expect(Grid.equals(endA, endB)).toBe(true);
      expect(Grid.equals(endA, plan.rejoinPoint)).toBe(true);
    });

    it("creates shapes at turn points", () => {
      const plan = planSplit(
        { row: 5, col: 5 },
        Direction.RIGHT,
        DEFAULT_CONFIG,
      );

      // Should have 2 shapes per path (at diverge turn and parallel turn)
      expect(plan.shapesA.length).toBe(2);
      expect(plan.shapesB.length).toBe(2);
    });

    it("paths diverge in perpendicular directions", () => {
      const entryDir = Direction.RIGHT;
      const [perpA, perpB] = Dir.getPerpendicular(entryDir);
      const splitPoint = { row: 10, col: 10 };

      const plan = planSplit(splitPoint, entryDir, DEFAULT_CONFIG);

      // First step of path A should be in perpA direction
      const firstA = plan.pathA[0];
      const expectedA = Grid.step(splitPoint, perpA);
      expect(Grid.equals(firstA, expectedA)).toBe(true);

      // First step of path B should be in perpB direction
      const firstB = plan.pathB[0];
      const expectedB = Grid.step(splitPoint, perpB);
      expect(Grid.equals(firstB, expectedB)).toBe(true);
    });

    it("respects maxDivergence config", () => {
      const config = { ...DEFAULT_CONFIG, maxDivergence: 2 };
      const splitPoint = { row: 10, col: 10 };

      for (let i = 0; i < 20; i++) {
        const plan = planSplit(splitPoint, Direction.RIGHT, config);

        // Check maximum divergence by looking at perpendicular distance
        // from split point to the furthest point
        for (const pos of plan.pathA) {
          const rowDist = Math.abs(pos.row - splitPoint.row);
          expect(rowDist).toBeLessThanOrEqual(config.maxDivergence);
        }
      }
    });
  });

  describe("planNextSegment", () => {
    it("creates a path of the expected length range", () => {
      const minDist = 3;
      const maxDist = 6;

      for (let i = 0; i < 20; i++) {
        const result = planNextSegment(
          { row: 0, col: 0 },
          Direction.RIGHT,
          minDist,
          maxDist,
        );

        expect(result.path.length).toBeGreaterThanOrEqual(minDist);
        expect(result.path.length).toBeLessThanOrEqual(maxDist);
      }
    });

    it("creates a shape at the end of the path", () => {
      const result = planNextSegment({ row: 0, col: 0 }, Direction.RIGHT);
      const lastPos = result.path[result.path.length - 1];

      expect(Grid.equals(result.endShape.position, lastPos)).toBe(true);
    });

    it("path moves in the correct direction", () => {
      const start = { row: 5, col: 5 };
      const result = planNextSegment(start, Direction.DOWN);

      // All positions should have same col, increasing row
      for (let i = 0; i < result.path.length; i++) {
        expect(result.path[i].col).toBe(start.col);
        expect(result.path[i].row).toBe(start.row + i + 1);
      }
    });
  });

  describe("getNextShapePosition", () => {
    it("returns position in the correct direction", () => {
      const start = { row: 5, col: 5 };
      const pos = getNextShapePosition(start, Direction.RIGHT, 3, 3);

      expect(pos.row).toBe(5);
      expect(pos.col).toBe(8);
    });

    it("respects min/max distance", () => {
      const start = { row: 0, col: 0 };

      for (let i = 0; i < 20; i++) {
        const pos = getNextShapePosition(start, Direction.DOWN, 2, 5);
        expect(pos.row).toBeGreaterThanOrEqual(2);
        expect(pos.row).toBeLessThanOrEqual(5);
      }
    });
  });

  describe("validateSplitPlan", () => {
    it("returns true for valid plan", () => {
      const plan = planSplit({ row: 5, col: 5 }, Direction.UP, DEFAULT_CONFIG);
      expect(validateSplitPlan(plan)).toBe(true);
    });

    it("returns false if paths end at different points", () => {
      const plan = planSplit({ row: 5, col: 5 }, Direction.UP, DEFAULT_CONFIG);
      // Corrupt the plan
      plan.pathA[plan.pathA.length - 1] = { row: 999, col: 999 };

      expect(validateSplitPlan(plan)).toBe(false);
    });
  });
});
