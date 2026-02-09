import { describe, it, expect } from "vitest";
import { Direction } from "../core/types";
import {
  getOpposite,
  rotateCW,
  rotateCCW,
  getPerpendicular,
  getOtherDirections,
  getValidTurnDirections,
  toGridDelta,
  toAngle,
  areOpposite,
  arePerpendicular,
  ALL_DIRECTIONS,
} from "../core/Direction";

describe("Direction", () => {
  describe("getOpposite", () => {
    it("returns DOWN for UP", () => {
      expect(getOpposite(Direction.UP)).toBe(Direction.DOWN);
    });

    it("returns UP for DOWN", () => {
      expect(getOpposite(Direction.DOWN)).toBe(Direction.UP);
    });

    it("returns RIGHT for LEFT", () => {
      expect(getOpposite(Direction.LEFT)).toBe(Direction.RIGHT);
    });

    it("returns LEFT for RIGHT", () => {
      expect(getOpposite(Direction.RIGHT)).toBe(Direction.LEFT);
    });

    it("is symmetric (opposite of opposite is original)", () => {
      for (const dir of ALL_DIRECTIONS) {
        expect(getOpposite(getOpposite(dir))).toBe(dir);
      }
    });
  });

  describe("rotateCW", () => {
    it("rotates UP to RIGHT", () => {
      expect(rotateCW(Direction.UP)).toBe(Direction.RIGHT);
    });

    it("rotates RIGHT to DOWN", () => {
      expect(rotateCW(Direction.RIGHT)).toBe(Direction.DOWN);
    });

    it("rotates DOWN to LEFT", () => {
      expect(rotateCW(Direction.DOWN)).toBe(Direction.LEFT);
    });

    it("rotates LEFT to UP", () => {
      expect(rotateCW(Direction.LEFT)).toBe(Direction.UP);
    });

    it("four rotations return to original", () => {
      for (const dir of ALL_DIRECTIONS) {
        expect(rotateCW(rotateCW(rotateCW(rotateCW(dir))))).toBe(dir);
      }
    });
  });

  describe("rotateCCW", () => {
    it("rotates UP to LEFT", () => {
      expect(rotateCCW(Direction.UP)).toBe(Direction.LEFT);
    });

    it("rotates LEFT to DOWN", () => {
      expect(rotateCCW(Direction.LEFT)).toBe(Direction.DOWN);
    });

    it("rotates DOWN to RIGHT", () => {
      expect(rotateCCW(Direction.DOWN)).toBe(Direction.RIGHT);
    });

    it("rotates RIGHT to UP", () => {
      expect(rotateCCW(Direction.RIGHT)).toBe(Direction.UP);
    });

    it("CW then CCW returns original", () => {
      for (const dir of ALL_DIRECTIONS) {
        expect(rotateCCW(rotateCW(dir))).toBe(dir);
        expect(rotateCW(rotateCCW(dir))).toBe(dir);
      }
    });
  });

  describe("getPerpendicular", () => {
    it("returns LEFT and RIGHT for UP", () => {
      const [a, b] = getPerpendicular(Direction.UP);
      expect([a, b].sort()).toEqual([Direction.LEFT, Direction.RIGHT].sort());
    });

    it("returns LEFT and RIGHT for DOWN", () => {
      const [a, b] = getPerpendicular(Direction.DOWN);
      expect([a, b].sort()).toEqual([Direction.LEFT, Direction.RIGHT].sort());
    });

    it("returns UP and DOWN for LEFT", () => {
      const [a, b] = getPerpendicular(Direction.LEFT);
      expect([a, b].sort()).toEqual([Direction.DOWN, Direction.UP].sort());
    });

    it("returns UP and DOWN for RIGHT", () => {
      const [a, b] = getPerpendicular(Direction.RIGHT);
      expect([a, b].sort()).toEqual([Direction.DOWN, Direction.UP].sort());
    });
  });

  describe("getOtherDirections", () => {
    it("excludes the given direction", () => {
      for (const dir of ALL_DIRECTIONS) {
        const others = getOtherDirections(dir);
        expect(others).toHaveLength(3);
        expect(others).not.toContain(dir);
      }
    });
  });

  describe("getValidTurnDirections", () => {
    it("excludes current and opposite directions", () => {
      for (const dir of ALL_DIRECTIONS) {
        const valid = getValidTurnDirections(dir);
        expect(valid).toHaveLength(2);
        expect(valid).not.toContain(dir);
        expect(valid).not.toContain(getOpposite(dir));
      }
    });

    it("returns perpendicular directions", () => {
      const valid = getValidTurnDirections(Direction.UP);
      expect(valid.sort()).toEqual([Direction.LEFT, Direction.RIGHT].sort());
    });
  });

  describe("toGridDelta", () => {
    it("UP moves row -1", () => {
      expect(toGridDelta(Direction.UP)).toEqual({ row: -1, col: 0 });
    });

    it("DOWN moves row +1", () => {
      expect(toGridDelta(Direction.DOWN)).toEqual({ row: 1, col: 0 });
    });

    it("LEFT moves col -1", () => {
      expect(toGridDelta(Direction.LEFT)).toEqual({ row: 0, col: -1 });
    });

    it("RIGHT moves col +1", () => {
      expect(toGridDelta(Direction.RIGHT)).toEqual({ row: 0, col: 1 });
    });
  });

  describe("toAngle", () => {
    it("RIGHT is 0 radians", () => {
      expect(toAngle(Direction.RIGHT)).toBe(0);
    });

    it("DOWN is PI/2 radians", () => {
      expect(toAngle(Direction.DOWN)).toBe(Math.PI / 2);
    });

    it("LEFT is PI radians", () => {
      expect(toAngle(Direction.LEFT)).toBe(Math.PI);
    });

    it("UP is -PI/2 radians", () => {
      expect(toAngle(Direction.UP)).toBe(-Math.PI / 2);
    });
  });

  describe("areOpposite", () => {
    it("returns true for opposite pairs", () => {
      expect(areOpposite(Direction.UP, Direction.DOWN)).toBe(true);
      expect(areOpposite(Direction.DOWN, Direction.UP)).toBe(true);
      expect(areOpposite(Direction.LEFT, Direction.RIGHT)).toBe(true);
      expect(areOpposite(Direction.RIGHT, Direction.LEFT)).toBe(true);
    });

    it("returns false for non-opposite pairs", () => {
      expect(areOpposite(Direction.UP, Direction.LEFT)).toBe(false);
      expect(areOpposite(Direction.UP, Direction.RIGHT)).toBe(false);
      expect(areOpposite(Direction.UP, Direction.UP)).toBe(false);
    });
  });

  describe("arePerpendicular", () => {
    it("returns true for perpendicular pairs", () => {
      expect(arePerpendicular(Direction.UP, Direction.LEFT)).toBe(true);
      expect(arePerpendicular(Direction.UP, Direction.RIGHT)).toBe(true);
      expect(arePerpendicular(Direction.DOWN, Direction.LEFT)).toBe(true);
      expect(arePerpendicular(Direction.DOWN, Direction.RIGHT)).toBe(true);
    });

    it("returns false for same direction", () => {
      for (const dir of ALL_DIRECTIONS) {
        expect(arePerpendicular(dir, dir)).toBe(false);
      }
    });

    it("returns false for opposite directions", () => {
      expect(arePerpendicular(Direction.UP, Direction.DOWN)).toBe(false);
      expect(arePerpendicular(Direction.LEFT, Direction.RIGHT)).toBe(false);
    });
  });
});
