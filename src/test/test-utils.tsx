import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

/**
 * Custom render function that wraps components with necessary providers.
 * Use this instead of @testing-library/react's render for components that need routing.
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) =>
  render(ui, {
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...options,
  });

// Re-export everything from testing-library
export * from "@testing-library/react";

// Override render with custom render
export { customRender as render };
