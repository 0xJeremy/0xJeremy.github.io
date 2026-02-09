# Pages

Page components for application routes. Pages should primarily **compose components** from `src/components/` rather than defining their own styled elements.

## Pages

| File           | Description                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| `Home.tsx`     | Landing page with dramatic full-viewport hero section. Features animated background, title/subtitle, and CTAs. |
| `Projects.tsx` | Portfolio grid displaying project cards. Currently uses placeholder data.                                      |
| `AboutMe.tsx`  | Personal introduction with skills overview. Categorized skill lists (Frontend, Tools, Testing).                |
| `Contact.tsx`  | Contact information placeholder. Will contain contact form.                                                    |

## Route Mapping

| Route       | Page     | Notes       |
| ----------- | -------- | ----------- |
| `/`         | Home     | Index route |
| `/projects` | Projects |             |
| `/about`    | AboutMe  |             |
| `/contact`  | Contact  |             |

## Adding New Pages

1. Create `PageName.tsx` with doc comment at top
2. Create `PageName.test.tsx` alongside it
3. Add route in `App.tsx`
4. Add nav link in `src/constants/navigation.ts`
5. Update this README

## Style Guidelines

Pages should:

- Import and compose components from `@/components/`
- Avoid defining styled components within the page file
- Use design tokens via CSS variables if minimal custom styling is needed
