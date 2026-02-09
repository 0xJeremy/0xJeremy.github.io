import { describe, it, expect } from "vitest";
import { Direction } from "../core/types";
import {
  gridCoord,
  equals,
  add,
  subtract,
  scale,
  step,
  stepN,
  manhattanDistance,
  toWorld,
  fromWorld,
  lerpWorld,
  toKey,
  fromKey,
  pathBetween,
  isInBounds,
} from "../core/GridCoord";

describe("GridCoord", () => {
  describe("gridCoord", () => {
    it("creates a grid coordinate", () => {
      expect(gridCoord(5, 10)).toEqual({ row: 5, col: 10 });
    });
  });

  describe("equals", () => {
    it("returns true for equal coordinates", () => {
      expect(equals({ row: 1, col: 2 }, { row: 1, col: 2 })).toBe(true);
    });

    it("returns false for different rows", () => {
      expect(equals({ row: 1, col: 2 }, { row: 2, col: 2 })).toBe(false);
    });

    it("returns false for different cols", () => {
      expect(equals({ row: 1, col: 2 }, { row: 1, col: 3 })).toBe(false);
    });
  });

  describe("add", () => {
    it("adds coordinates", () => {
      expect(add({ row: 1, col: 2 }, { row: 3, col: 4 })).toEqual({
        row: 4,
        col: 6,
      });
    });

    it("handles negative values", () => {
      expect(add({ row: 5, col: 5 }, { row: -2, col: -3 })).toEqual({
        row: 3,
        col: 2,
      });
    });
  });

  describe("subtract", () => {
    it("subtracts coordinates", () => {
      expect(subtract({ row: 5, col: 7 }, { row: 2, col: 3 })).toEqual({
        row: 3,
        col: 4,
      });
    });
  });

  describe("scale", () => {
    it("scales coordinates", () => {
      expect(scale({ row: 2, col: 3 }, 4)).toEqual({ row: 8, col: 12 });
    });
  });

  describe("step", () => {
    it("moves UP (row -1)", () => {
      expect(step({ row: 5, col: 5 }, Direction.UP)).toEqual({
        row: 4,
        col: 5,
      });
    });

    it("moves DOWN (row +1)", () => {
      expect(step({ row: 5, col: 5 }, Direction.DOWN)).toEqual({
        row: 6,
        col: 5,
      });
    });

    it("moves LEFT (col -1)", () => {
      expect(step({ row: 5, col: 5 }, Direction.LEFT)).toEqual({
        row: 5,
        col: 4,
      });
    });

    it("moves RIGHT (col +1)", () => {
      expect(step({ row: 5, col: 5 }, Direction.RIGHT)).toEqual({
        row: 5,
        col: 6,
      });
    });
  });

  describe("stepN", () => {
    it("moves N steps in direction", () => {
      expect(stepN({ row: 0, col: 0 }, Direction.RIGHT, 5)).toEqual({
        row: 0,
        col: 5,
      });
      expect(stepN({ row: 10, col: 10 }, Direction.UP, 3)).toEqual({
        row: 7,
        col: 10,
      });
    });
  });

  describe("manhattanDistance", () => {
    it("calculates distance for same point", () => {
      expect(manhattanDistance({ row: 5, col: 5 }, { row: 5, col: 5 })).toBe(0);
    });

    it("calculates horizontal distance", () => {
      expect(manhattanDistance({ row: 0, col: 0 }, { row: 0, col: 5 })).toBe(5);
    });

    it("calculates vertical distance", () => {
      expect(manhattanDistance({ row: 0, col: 0 }, { row: 3, col: 0 })).toBe(3);
    });

    it("calculates diagonal distance", () => {
      expect(manhattanDistance({ row: 0, col: 0 }, { row: 3, col: 4 })).toBe(7);
    });

    it("is symmetric", () => {
      const a = { row: 2, col: 5 };
      const b = { row: 8, col: 1 };
      expect(manhattanDistance(a, b)).toBe(manhattanDistance(b, a));
    });
  });

  describe("toWorld", () => {
    it("converts to center of cell", () => {
      const cellSize = 70;
      expect(toWorld({ row: 0, col: 0 }, cellSize)).toEqual({ x: 35, y: 35 });
      expect(toWorld({ row: 1, col: 2 }, cellSize)).toEqual({ x: 175, y: 105 });
    });
  });

  describe("fromWorld", () => {
    it("converts world to grid (floors)", () => {
      const cellSize = 70;
      expect(fromWorld({ x: 0, y: 0 }, cellSize)).toEqual({ row: 0, col: 0 });
      expect(fromWorld({ x: 69, y: 69 }, cellSize)).toEqual({ row: 0, col: 0 });
      expect(fromWorld({ x: 70, y: 70 }, cellSize)).toEqual({ row: 1, col: 1 });
    });
  });

  describe("lerpWorld", () => {
    it("returns start at t=0", () => {
      const from = { row: 0, col: 0 };
      const to = { row: 0, col: 1 };
      const cellSize = 70;
      const result = lerpWorld(from, to, 0, cellSize);
      expect(result).toEqual(toWorld(from, cellSize));
    });

    it("returns end at t=1", () => {
      const from = { row: 0, col: 0 };
      const to = { row: 0, col: 1 };
      const cellSize = 70;
      const result = lerpWorld(from, to, 1, cellSize);
      expect(result).toEqual(toWorld(to, cellSize));
    });

    it("returns midpoint at t=0.5", () => {
      const from = { row: 0, col: 0 };
      const to = { row: 0, col: 2 };
      const cellSize = 100;
      const result = lerpWorld(from, to, 0.5, cellSize);
      // from center: (50, 50), to center: (250, 50)
      // midpoint: (150, 50)
      expect(result).toEqual({ x: 150, y: 50 });
    });
  });

  describe("toKey / fromKey", () => {
    it("converts to string and back", () => {
      const coord = { row: 42, col: -17 };
      const key = toKey(coord);
      expect(key).toBe("42,-17");
      expect(fromKey(key)).toEqual(coord);
    });
  });

  describe("pathBetween", () => {
    it("returns single point for same start/end", () => {
      const result = pathBetween({ row: 5, col: 5 }, { row: 5, col: 5 });
      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({ row: 5, col: 5 });
    });

    it("generates horizontal path", () => {
      const result = pathBetween({ row: 0, col: 0 }, { row: 0, col: 3 });
      expect(result).toEqual([
        { row: 0, col: 0 },
        { row: 0, col: 1 },
        { row: 0, col: 2 },
        { row: 0, col: 3 },
      ]);
    });

    it("generates vertical path", () => {
      const result = pathBetween({ row: 0, col: 0 }, { row: 2, col: 0 });
      expect(result).toEqual([
        { row: 0, col: 0 },
        { row: 1, col: 0 },
        { row: 2, col: 0 },
      ]);
    });
  });

  describe("isInBounds", () => {
    it("returns true for coordinate within bounds", () => {
      expect(isInBounds({ row: 5, col: 5 }, 0, 10, 0, 10)).toBe(true);
    });

    it("returns true for coordinate on boundary", () => {
      expect(isInBounds({ row: 0, col: 0 }, 0, 10, 0, 10)).toBe(true);
      expect(isInBounds({ row: 10, col: 10 }, 0, 10, 0, 10)).toBe(true);
    });

    it("returns false for coordinate outside bounds", () => {
      expect(isInBounds({ row: -1, col: 5 }, 0, 10, 0, 10)).toBe(false);
      expect(isInBounds({ row: 5, col: 11 }, 0, 10, 0, 10)).toBe(false);
    });
  });
});
