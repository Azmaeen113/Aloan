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

# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a324b202-15a8-4cd5-b438-f38c22ee7c20

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a324b202-15a8-4cd5-b438-f38c22ee7c20) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

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

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a324b202-15a8-4cd5-b438-f38c22ee7c20) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
