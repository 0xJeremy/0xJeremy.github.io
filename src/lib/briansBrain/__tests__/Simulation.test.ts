/**
 * Tests for Brian's Brain simulation logic.
 */

import { describe, it, expect } from "vitest";
import {
  CellState,
  createBrainState,
  createBrainStateFromPattern,
  getCell,
  getCellWrapped,
  countOnNeighbors,
  computeNextCellState,
  tick,
  getStats,
  setCell,
  clearGrid,
  randomizeGrid,
} from "../index";

describe("Brian's Brain Simulation", () => {
  describe("createBrainState", () => {
    it("creates a grid with the specified dimensions", () => {
      const state = createBrainState({ cols: 10, rows: 5, initialDensity: 0 });

      expect(state.cols).toBe(10);
      expect(state.rows).toBe(5);
      expect(state.grid.length).toBe(50);
      expect(state.generation).toBe(0);
    });

    it("initializes cells based on density", () => {
      // With density 0, all cells should be OFF
      const stateEmpty = createBrainState({
        cols: 10,
        rows: 10,
        initialDensity: 0,
      });
      const allOff = stateEmpty.grid.every((cell) => cell === CellState.OFF);
      expect(allOff).toBe(true);

      // With density 1, all cells should be ON
      const stateFull = createBrainState({
        cols: 10,
        rows: 10,
        initialDensity: 1,
      });
      const allOn = stateFull.grid.every((cell) => cell === CellState.ON);
      expect(allOn).toBe(true);
    });
  });

  describe("createBrainStateFromPattern", () => {
    it("creates a grid matching the provided pattern", () => {
      const pattern = [
        [CellState.OFF, CellState.ON, CellState.OFF],
        [CellState.ON, CellState.DYING, CellState.ON],
        [CellState.OFF, CellState.ON, CellState.OFF],
      ];

      const state = createBrainStateFromPattern(pattern);

      expect(state.cols).toBe(3);
      expect(state.rows).toBe(3);
      expect(getCell(state, 0, 1)).toBe(CellState.ON);
      expect(getCell(state, 1, 1)).toBe(CellState.DYING);
      expect(getCell(state, 0, 0)).toBe(CellState.OFF);
    });
  });

  describe("getCell", () => {
    it("returns the cell state at valid coordinates", () => {
      const pattern = [
        [CellState.ON, CellState.OFF],
        [CellState.DYING, CellState.ON],
      ];
      const state = createBrainStateFromPattern(pattern);

      expect(getCell(state, 0, 0)).toBe(CellState.ON);
      expect(getCell(state, 0, 1)).toBe(CellState.OFF);
      expect(getCell(state, 1, 0)).toBe(CellState.DYING);
      expect(getCell(state, 1, 1)).toBe(CellState.ON);
    });

    it("returns OFF for out-of-bounds coordinates", () => {
      const state = createBrainState({ cols: 3, rows: 3, initialDensity: 1 });

      expect(getCell(state, -1, 0)).toBe(CellState.OFF);
      expect(getCell(state, 0, -1)).toBe(CellState.OFF);
      expect(getCell(state, 3, 0)).toBe(CellState.OFF);
      expect(getCell(state, 0, 3)).toBe(CellState.OFF);
    });
  });

  describe("getCellWrapped", () => {
    it("wraps coordinates at grid boundaries", () => {
      const pattern = [
        [CellState.ON, CellState.OFF, CellState.DYING],
        [CellState.OFF, CellState.OFF, CellState.OFF],
        [CellState.OFF, CellState.OFF, CellState.OFF],
      ];
      const state = createBrainStateFromPattern(pattern);

      // Wrapping negative
      expect(getCellWrapped(state, -1, 0)).toBe(CellState.OFF); // row 2
      expect(getCellWrapped(state, 0, -1)).toBe(CellState.DYING); // col 2

      // Wrapping positive
      expect(getCellWrapped(state, 3, 0)).toBe(CellState.ON); // row 0
      expect(getCellWrapped(state, 0, 3)).toBe(CellState.ON); // col 0
    });
  });

  describe("countOnNeighbors", () => {
    it("counts ON neighbors correctly", () => {
      const pattern = [
        [CellState.ON, CellState.ON, CellState.OFF],
        [CellState.OFF, CellState.OFF, CellState.OFF],
        [CellState.OFF, CellState.OFF, CellState.OFF],
      ];
      const state = createBrainStateFromPattern(pattern);

      // Center of top row has 1 ON neighbor (top-left)
      expect(countOnNeighbors(state, 0, 1, false)).toBe(1);

      // Cell at (1, 0) has 2 ON neighbors
      expect(countOnNeighbors(state, 1, 0, false)).toBe(2);

      // Cell at (1, 1) has 2 ON neighbors
      expect(countOnNeighbors(state, 1, 1, false)).toBe(2);
    });

    it("ignores DYING cells in count", () => {
      const pattern = [
        [CellState.DYING, CellState.DYING, CellState.DYING],
        [CellState.DYING, CellState.OFF, CellState.DYING],
        [CellState.DYING, CellState.DYING, CellState.DYING],
      ];
      const state = createBrainStateFromPattern(pattern);

      // Center cell has 0 ON neighbors (all DYING)
      expect(countOnNeighbors(state, 1, 1, false)).toBe(0);
    });

    it("handles edge wrapping", () => {
      const pattern = [
        [CellState.OFF, CellState.OFF, CellState.ON],
        [CellState.OFF, CellState.OFF, CellState.OFF],
        [CellState.ON, CellState.OFF, CellState.OFF],
      ];
      const state = createBrainStateFromPattern(pattern);

      // Top-left with wrapping sees bottom-right neighbor
      // Neighbors of (0,0) wrapped: includes (2,2), (2,0), (2,1), (0,2), (1,2), (0,1), (1,0), (1,1)
      // ON cells: (0,2) and (2,0)
      expect(countOnNeighbors(state, 0, 0, true)).toBe(2);
    });
  });

  describe("computeNextCellState", () => {
    it("OFF with exactly 2 ON neighbors becomes ON", () => {
      expect(computeNextCellState(CellState.OFF, 2)).toBe(CellState.ON);
    });

    it("OFF with other neighbor counts stays OFF", () => {
      expect(computeNextCellState(CellState.OFF, 0)).toBe(CellState.OFF);
      expect(computeNextCellState(CellState.OFF, 1)).toBe(CellState.OFF);
      expect(computeNextCellState(CellState.OFF, 3)).toBe(CellState.OFF);
      expect(computeNextCellState(CellState.OFF, 8)).toBe(CellState.OFF);
    });

    it("ON always becomes DYING", () => {
      expect(computeNextCellState(CellState.ON, 0)).toBe(CellState.DYING);
      expect(computeNextCellState(CellState.ON, 2)).toBe(CellState.DYING);
      expect(computeNextCellState(CellState.ON, 8)).toBe(CellState.DYING);
    });

    it("DYING always becomes OFF", () => {
      expect(computeNextCellState(CellState.DYING, 0)).toBe(CellState.OFF);
      expect(computeNextCellState(CellState.DYING, 2)).toBe(CellState.OFF);
      expect(computeNextCellState(CellState.DYING, 8)).toBe(CellState.OFF);
    });
  });

  describe("tick", () => {
    it("advances generation counter", () => {
      const state = createBrainState({ cols: 5, rows: 5, initialDensity: 0 });
      const next = tick(state);

      expect(next.generation).toBe(1);
    });

    it("applies Brian's Brain rules correctly", () => {
      // Pattern where cell at (1,1) should turn ON (has exactly 2 ON neighbors)
      const pattern = [
        [CellState.ON, CellState.OFF, CellState.OFF],
        [CellState.ON, CellState.OFF, CellState.OFF],
        [CellState.OFF, CellState.OFF, CellState.OFF],
      ];
      const state = createBrainStateFromPattern(pattern);
      const next = tick(state, { wrapEdges: false });

      // Original ON cells should be DYING
      expect(getCell(next, 0, 0)).toBe(CellState.DYING);
      expect(getCell(next, 1, 0)).toBe(CellState.DYING);

      // Cell at (1,1) had 2 ON neighbors, should be ON
      expect(getCell(next, 1, 1)).toBe(CellState.ON);
    });

    it("DYING cells become OFF", () => {
      const pattern = [[CellState.DYING]];
      const state = createBrainStateFromPattern(pattern);
      const next = tick(state);

      expect(getCell(next, 0, 0)).toBe(CellState.OFF);
    });

    it("returns immutable state (does not modify original)", () => {
      const state = createBrainState({ cols: 5, rows: 5, initialDensity: 0.5 });
      const originalGrid = new Uint8Array(state.grid);

      tick(state);

      // Original state should be unchanged
      expect(state.grid).toEqual(originalGrid);
      expect(state.generation).toBe(0);
    });
  });

  describe("getStats", () => {
    it("counts cells in each state", () => {
      const pattern = [
        [CellState.ON, CellState.ON, CellState.OFF],
        [CellState.DYING, CellState.OFF, CellState.OFF],
        [CellState.OFF, CellState.OFF, CellState.DYING],
      ];
      const state = createBrainStateFromPattern(pattern);
      state.generation = 5;

      const stats = getStats(state);

      expect(stats.onCount).toBe(2);
      expect(stats.dyingCount).toBe(2);
      expect(stats.offCount).toBe(5);
      expect(stats.generation).toBe(5);
    });
  });

  describe("setCell", () => {
    it("sets a cell to a new state", () => {
      const state = createBrainState({ cols: 3, rows: 3, initialDensity: 0 });
      const updated = setCell(state, 1, 1, CellState.ON);

      expect(getCell(updated, 1, 1)).toBe(CellState.ON);
      // Original unchanged
      expect(getCell(state, 1, 1)).toBe(CellState.OFF);
    });

    it("returns original state for out-of-bounds coordinates", () => {
      const state = createBrainState({ cols: 3, rows: 3, initialDensity: 0 });
      const result = setCell(state, -1, 0, CellState.ON);

      expect(result).toBe(state);
    });
  });

  describe("clearGrid", () => {
    it("sets all cells to OFF and resets generation", () => {
      const state = createBrainState({ cols: 5, rows: 5, initialDensity: 1 });
      state.generation = 10;

      const cleared = clearGrid(state);

      expect(cleared.generation).toBe(0);
      const allOff = cleared.grid.every((cell) => cell === CellState.OFF);
      expect(allOff).toBe(true);
    });
  });

  describe("randomizeGrid", () => {
    it("randomizes grid with given density", () => {
      const state = createBrainState({ cols: 10, rows: 10, initialDensity: 0 });

      // With density 1, all should be ON
      const randomized = randomizeGrid(state, 1);
      const allOn = randomized.grid.every((cell) => cell === CellState.ON);
      expect(allOn).toBe(true);

      // Generation should reset
      expect(randomized.generation).toBe(0);
    });
  });
});
