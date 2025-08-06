# Element Selector

A DOM element picker that provides a visual interface for selecting elements on any webpage. Works in any JavaScript environment - vanilla JS, React, Vue, Angular, etc.

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
  import { launchSelector } from '@botanicastudios/element-selector';
  
  document.getElementById('select-btn').addEventListener('click', async () => {
    try {
      const element = await launchSelector();
      console.log('Selected:', element);
    } catch (error) {
      console.log('Cancelled');
    }
  });
</script>
```

#### Vue Example

```javascript
import { launchSelector } from '@botanicastudios/element-selector';

export default {
  methods: {
    async selectElement() {
      try {
        const element = await launchSelector();
        this.selectedElement = element;
      } catch (error) {
        console.log('Cancelled');
      }
    }
  }
}
```

#### Angular Example

```typescript
import { launchSelector } from '@botanicastudios/element-selector';

@Component({
  selector: 'app-picker',
  template: `<button (click)="pick()">Select Element</button>`
})
export class PickerComponent {
  async pick() {
    try {
      const element = await launchSelector();
      console.log('Selected:', element);
    } catch (error) {
      console.log('Cancelled');
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
      multiSelect: true,        // Allow selecting multiple elements
      friendlySelectors: true   // Show human-readable tag names
    });
    console.log("Selected elements:", elements);
    // Each element object contains:
    // - element: the DOM element reference
    // - selector: CSS selector for the element
    // - tag: lowercase tag name
    // - id: element ID (if any)
    // - classes: element class names
    // - textPreview: first 100 characters of text content
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
      multiSelect={true}        // Optional: Allow multiple selections
      friendlySelectors={true}  // Optional: Use friendly tag names
    />
  );
}
```

### Using from CDN

You can also use the library directly from a CDN without installing:

```html
<script type="module">
  import { launchSelector } from 'https://unpkg.com/@botanicastudios/element-selector/dist/element-selector.js';
  
  // Use launchSelector as shown above
</script>
```

## Options

### `multiSelect` (default: `false`)

When set to `true`, allows selecting multiple elements. Without this option, only one element can be selected at a time.

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
2. Move your mouse over elements to see them highlighted in blue with their tag name
3. Click to select an element (it will be outlined in gray)
4. In multi-select mode: Click different elements to select multiple
5. Click a selected element again to deselect it
6. Press Enter to confirm your selection and receive the element data
7. Press Escape to cancel the selection

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
