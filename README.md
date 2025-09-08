## ModeSwitch Component

Add a modern, accessible toggle that switches between Jew Mode and Bitch Mode with persistence and icon support.

### Installation

1. Ensure your icons are placed in `public`:
   - `public/switch icon default.png` (Bitch Mode / OFF)
   - `public/switch icon mode.png` (Jew Mode / ON)

2. Import and use the component:

```tsx
import { useCallback } from "react";
import ModeSwitch, { ModeType } from "./src/components/ModeSwitch";

export default function Example() {
  const handleChange = useCallback((mode: ModeType) => {
    console.log("mode changed:", mode);
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <ModeSwitch onChange={handleChange} />
    </div>
  );
}
```

### Props

- `initialMode`: `"jew" | "bitch"` (default `"bitch"`)
- `onChange(mode)`: callback triggered whenever the mode changes
- `storageKey`: localStorage key (default `"mode-switch"`)
- `width`, `height`: switch size in px (defaults 168 x 84)
- `durationMs`: animation duration (default 300)
- `jewIconSrc`, `bitchIconSrc`: icon URLs
- `ariaLabel`: accessibility label
- `enableSound`, `soundSrc`: optional click sound

### Styling

The component uses CSS variables for easy theming:

```css
.ms-track{ /* the pill */ }
.ms-thumb{ /* the round slider */ }
```

# Local development

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

You can also edit files directly in GitHub or use Codespaces if preferred.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

You can deploy with any static host (e.g., Vercel, Netlify, GitHub Pages). Build with `npm run build` and deploy the `dist` directory.
