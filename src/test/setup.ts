import "@testing-library/jest-dom";

// Mock ResizeObserver for components that use it (e.g., canvas components)
class ResizeObserverMock {
  // eslint-disable-next-line class-methods-use-this
  observe() {}

  // eslint-disable-next-line class-methods-use-this
  unobserve() {}

  // eslint-disable-next-line class-methods-use-this
  disconnect() {}
}

(globalThis as any).ResizeObserver = ResizeObserverMock;
