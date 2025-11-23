# Element Selector

A DOM element picker that provides a visual interface for selecting elements on any webpage. Works in any JavaScript environment - vanilla JS, React, Vue, Angular, etc.

[**Live demo**](https://botanicastudios.github.io/element-selector/)

## Features

- Works in any JavaScript environment (not just React)
- Visual element highlighting on hover
- Multiple element selection
- Real-time position tracking (30 FPS)
- CSS selector generation for selected elements
- Keyboard shortcuts (Enter to confirm, Escape to cancel)
- Clean promise-based API
- Velocity-based hover detection to avoid jittery selection

## Installation

```bash
npm install @botanicastudios/element-selector
```

**Note**: This package requires React and ReactDOM as peer dependencies. If you're using it outside a React project, you'll need to install them:

```bash
npm install react react-dom
```

## Usage

### Using in any JavaScript project (Vanilla JS, Vue, Angular, etc.)

The `launchSelector` function works in any JavaScript environment, not just React projects. It creates its own React instance internally, so you can use it anywhere.

#### Vanilla JavaScript Example

```html
<script type="module">
  import { launchSelector } from "@botanicastudios/element-selector";

  document.getElementById("select-btn").addEventListener("click", async () => {
    try {
      const element = await launchSelector();
      console.log("Selected:", element);
    } catch (error) {
      console.log("Cancelled");
    }
  });
</script>
```

#### Vue Example

```javascript
import { launchSelector } from "@botanicastudios/element-selector";

export default {
  methods: {
    async selectElement() {
      try {
        const element = await launchSelector();
        this.selectedElement = element;
      } catch (error) {
        console.log("Cancelled");
      }
    },
  },
};
```

#### Angular Example

```typescript
import { launchSelector } from "@botanicastudios/element-selector";

@Component({
  selector: "app-picker",
  template: `<button (click)="pick()">Select Element</button>`,
})
export class PickerComponent {
  async pick() {
    try {
      const element = await launchSelector();
      console.log("Selected:", element);
    } catch (error) {
      console.log("Cancelled");
    }
  }
}
```

### Using the promise-based API (recommended)

```javascript
import { launchSelector } from "@botanicastudios/element-selector";

// Basic usage
async function selectElement() {
  try {
    const element = await launchSelector();
    console.log("Selected element:", element);
  } catch (error) {
    console.log("Selection cancelled");
  }
}

// With options
async function selectMultipleElements() {
  try {
    const elements = await launchSelector({
      multiSelect: true, // Allow selecting multiple elements
      friendlySelectors: true, // Show human-readable tag names
      snipElementHtml: true, // true (default) trims element html to ~2kB; false disables; number sets a custom limit
      snipHtml: true, // applies to beforeHtml/afterHtml context
    });
    console.log("Selected elements:", elements);
    // Return shape (single select returns an object; multi-select returns an array of these):
    // Select mode:
    // {
    //   mode: "select",
    //   selectedElement: HTMLElement,
    //   htmlBefore: string,
    //   elementBefore: HTMLElement | null,
    //   elementBeforeHtml: string | null,
    //   htmlAfter: string,
    //   elementAfter: HTMLElement | null,
    //   elementAfterHtml: string | null,
    //   selectedSrc?: string,
    //   selectedRouteId?: string,
    //   selectedRouteFile?: string,
    //   selectedElementHtml: string,
    //   selectedElementClasses: string,
    //   selectedElementId: string | null,
    //   selectedElementTextPreview: string,
    //   selectedElementTag: string,
    //   selectedElementSelector: string,
    //   beforeSrc?: string,
    //   afterSrc?: string,
    //   markdownSummary: string,
    // }
    //
    // Insert mode:
    // {
    //   mode: "insert",
    //   htmlBefore: string,
    //   elementBefore: HTMLElement | null,
    //   elementBeforeHtml: string | null,
    //   htmlAfter: string,
    //   elementAfter: HTMLElement | null,
    //   elementAfterHtml: string | null,
    //   htmlWithMarker: `${elementBeforeHtml || ""}\n<!-- INSERTION POINT -->\n${elementAfterHtml || ""}`,
    //   srcBefore?: string,
    //   srcAfter?: string,
    //   routeIdBefore?: string,
    //   routeIdAfter?: string,
    //   routeFileBefore?: string,
    //   routeFileAfter?: string,
    //   elementBeforeClasses: string | null,
    //   elementBeforeId: string | null,
    //   elementBeforeTextPreview: string | null,
    //   elementBeforeTag: string | null,
    //   elementBeforeSelector: string | null,
    //   elementAfterClasses: string | null,
    //   elementAfterId: string | null,
    //   elementAfterTextPreview: string | null,
    //   elementAfterTag: string | null,
    //   elementAfterSelector: string | null,
    //   markdownSummary: string,
    // }
    // Note: html snippets are truncated to ~2kB with a marker if very large.
  } catch (error) {
    console.log("Selection cancelled");
  }
}
```

### As a standalone component

```javascript
import { ElementSelector } from "@botanicastudios/element-selector";

function MyApp() {
  const handleElementSelected = (elements) => {
    console.log("Selected elements:", elements);
  };

  const handleCancel = () => {
    console.log("Selection cancelled");
  };

  return (
    <ElementSelector
      onElementSelected={handleElementSelected}
      onCancel={handleCancel}
      multiSelect={true} // Optional: Allow multiple selections
      friendlySelectors={true} // Optional: Use friendly tag names
    />
  );
}
```

### Using from CDN

You can also use the library directly from a CDN without installing:

```html
<script type="module">
  import { launchSelector } from "https://unpkg.com/@botanicastudios/element-selector/dist/element-selector.js";

  // Use launchSelector as shown above
</script>
```

## Options

### `multiSelect` (default: `false`)

When set to `true`, allows selecting multiple elements. Without this option, only one element can be selected at a time.

### `mode` (default: `select`)

Choose between two interaction modes:

- `select`: highlight existing DOM nodes and return their details (the original behaviour)
- `insert`: preview drop points with horizontal/vertical rules so you can decide where new content should be injected. The selector returns the reference element plus the edge (`before`/`after`) and axis.

### `allowModeToggle` (default: `true`)

Controls whether the floating toolbar inside the selector lets users switch between select and insert modes. Set to `false` if you want to lock the selector to the mode you launch with.

### `optionsPanelPosition` (default: `{ vertical: "top", horizontal: "center" }`)

Sets where the floating toolbar (Select/Insert, instructions, counters) appears on screen.

- `vertical`: `"top"` or `"bottom"`
- `horizontal`: `"left"`, `"center"`, or `"right"`

For example:

```javascript
await launchSelector({
  optionsPanelPosition: { vertical: "bottom", horizontal: "right" },
});
```

### `theme` (default: `"dark"`)

Switch the toolbar and buttons between the built‑in `"dark"` and `"light"` styles. This only affects the selector UI, not your page styles.

### `selectionBarText`

Override the copy shown in the floating toolbar. All fields are optional; anything you omit falls back to the default text.

```javascript
await launchSelector({
  selectionBarText: {
    selectLabel: "Pick",
    insertLabel: "Place",
    instructionSelectSingle: "Tap an element",
    instructionSelectMulti: "Tap every element you need",
    instructionInsert: "Choose where new content should go",
    confirmLabel: "Done",
    cancelLabel: "Close",
  },
});
```

- `selectLabel` / `insertLabel`: Text for the mode toggle buttons when mode switching is allowed.
- `instructionSelectSingle`: Instruction shown in select mode when picking a single element.
- `instructionSelectMulti`: Instruction shown in select mode when multi-select is enabled.
- `instructionInsert`: Instruction shown in insert mode.
- `confirmLabel`: Text for the confirm button.
- `cancelLabel`: Text for the cancel button.

`selectedCount` is kept for backward compatibility but currently ignored because the counter chip was removed from the toolbar.

### `retainSelectionHighlights` (default: `false`)

When `true`, the purple selection boxes stay on the page after the selector resolves. They remain until you start another selection session (launching `launchSelector` always clears them first) or call the `resetSelectionHighlights()` helper.

### `friendlySelectors` (default: `false`)

When set to `true`, displays human-readable tag names instead of HTML tag names. For example:

- `<a>` shows as "link"
- `<button>` shows as "button"
- `<p>` shows as "paragraph"
- `<div>` shows as "container"
- `<img>` shows as "image"
- And many more user-friendly names

## How it works

1. Call `launchSelector()` or render the `ElementSelector` component
2. Choose between **Select** (default) and **Insert** in the toolbar, if toggling is enabled
3. Move your mouse over the page to preview the target
   - Select mode highlights whole elements
   - Insert mode draws a rule between siblings to illustrate the drop point
4. Click to confirm the current highlight
5. In select + multi-select mode: click multiple elements, then press Enter to confirm (click again to remove)
6. Press Escape at any time to cancel without making a selection

### Resetting persisted highlights

If you enable `retainSelectionHighlights`, call `resetSelectionHighlights()` when you want to remove the overlays without starting a new selection session:

```javascript
import { resetSelectionHighlights } from "@botanicastudios/element-selector";

// Clear persisted highlight boxes
resetSelectionHighlights();
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the demo app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the library as an ES module to the `dist` folder.\
This creates the production-ready library files that can be published to npm.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## GitHub Pages

Pushes to `main` automatically build the Create React App demo (`npm run demo:build`) and publish it to GitHub Pages via `.github/workflows/deploy-demo.yml`. You can also trigger a deployment manually with the **Run workflow** button in the Actions tab.
