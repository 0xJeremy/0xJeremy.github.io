import { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  /** Set initial route entries for MemoryRouter (e.g. ["/projects/hexapod"]) */
  initialEntries?: string[];
}

/**
 * Custom render function that wraps components with necessary providers.
 * Use this instead of @testing-library/react's render for components that need routing.
 *
 * Pass `initialEntries` to render at a specific route (uses MemoryRouter).
 * Without it, uses BrowserRouter as before.
 */
const customRender = (ui: ReactElement, options?: CustomRenderOptions) => {
  const { initialEntries, ...renderOptions } = options ?? {};

  if (initialEntries) {
    return render(ui, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
      ),
      ...renderOptions,
    });
  }

  return render(ui, {
    wrapper: ({ children }) => <BrowserRouter>{children}</BrowserRouter>,
    ...renderOptions,
  });
};

// Re-export everything from testing-library
export * from "@testing-library/react";

// Override render with custom render
export { customRender as render };
