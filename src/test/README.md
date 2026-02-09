# Test Utilities

Testing infrastructure and helpers.

## Files

| File             | Description                                                                   |
| ---------------- | ----------------------------------------------------------------------------- |
| `setup.ts`       | Vitest setup file. Configures testing environment (e.g., jest-dom matchers).  |
| `test-utils.tsx` | Custom render function wrapping components with necessary providers (Router). |

## test-utils.tsx

### Custom Render

Use this instead of `@testing-library/react`'s default render:

```tsx
import { render } from "@/test/test-utils";

render(<MyComponent />);
```

This automatically wraps components with:

- `BrowserRouter` for routing context

### Re-exports

All exports from `@testing-library/react` are available:

```tsx
import { render, screen, fireEvent, waitFor } from "@/test/test-utils";
```

## Writing Tests

1. Create `ComponentName.test.tsx` alongside the component
2. Import `render` from `@/test/test-utils`
3. Test user-visible behavior, not implementation
4. Query by role/text, not test IDs

```tsx
import { describe, it, expect } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "@/test/test-utils";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("renders correctly", () => {
    render(<MyComponent />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
```
