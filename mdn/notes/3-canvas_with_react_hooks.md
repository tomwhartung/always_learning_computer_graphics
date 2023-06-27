
# 3-canvas_with_react_hooks.md

Try to get a canvas element to work with React.

# 0. Overview:

Trying to keep it as simple as possible while following this reference:

- [HTML canvas with React hooks](https://dev.to/masakudamatsu/how-to-use-html-canvas-with-react-hooks-2j47)

- [x] 1. Start with Vite, Reactjs, MDB, TypeScript, and ESLint
- [ ] 2. Add in code from the Reference
- [ ] 3. Update code so that the image reflects the values of the four sliders

# 1. Start with Vite, Reactjs, MDB, TypeScript, and ESLint

## 1.1. Install

**Note:** Got some warnings this time!

```
pwd                                          # /var/www/always_learning/always_learning_computer_graphics/mdn/projects
npm init vite@latest -- --template react-ts  # Project name: 3-canvas_with_react_hooks
cd 3-canvas_with_react_hooks
npm install
npm run dev
```

**Note:** not adding MDB.

## 1.2. Check for Problems - *"Sanity Checks"*

- [x] Open page in browser
  - Looks OK!
- [x] Run `npm run lint`
  - Looks OK!
- [x] Open project directory in VSCode
  - Looks OK!

## 1.3. Update github

```
cd /var/www/always_learning/always_learning_computer_graphics
git add mdn/projects/3-canvas_with_react_hooks
git commit -m 'Adding new project code in mdn/projects/3-canvas_with_react_hooks/ , which is for taking a step back.'
```

# 2. Start Adding Code from the Reference

Reference:

- [HTML canvas with React hooks](https://dev.to/masakudamatsu/how-to-use-html-canvas-with-react-hooks-2j47)

## 2.1. *"Step 1: Render a canvas element"*

### 2.1.1. Add `src/Canvas.js`

Copy code from the *"Step 1: Render a canvas element"* section of the Reference into a new file named `src/Canvas.js`.

**Note:** not creating a `components` directory at this time.

### 2.1.2. Update `src/App.tsx`

Update `src/App.tsx` to `import src/Canvas.js`

### 2.1.3. Fix the Error

Getting an error in the console:

- "Uncaught SyntaxError: Unexpected token '<' (at Canvas.js?t=1687812204326:14:10)"

Fix it by renaming the file:

- Rename `src/Canvas.js` to `src/Canvas.jsx`
- Update `src/App.tsx` accordingly

## 2.1.4. Check for Problems and Update github

- [x] See console for the page in the browser - Looks OK!
- [x] Check project in VSCode - Looks OK!
- [x] Update github: `src/Canvas.js` and `src/App.tsx`

## 2.2. *"Step 2: Refer to the canvas element"*

### 2.2.1. Update `Canvas.jsx`

Add these two lines to the `Canvas` arrow function, as shown in the Reference:

```
. . .
  const canvas = React.useRef(); // ADDED
. . .
    ref={canvas} // ADDED
. . .
```

Quoting from the Reference:

> once the canvas element is rendered on the screen, we can refer to it as `canvas.current` in our JavaScript code.

### 2.2.2. Check for Problems and Update github

So far, so good!

- Taking baby steps here so updating github as I go along!

## 2.3. *"Step 3: Create the canvas context"*

Quoting from the Reference:

> This step is the trickiest part of using the HTML canvas with React. The solution is the useEffect hook:

### 2.3.1. Update `Canvas.jsx`

Add these three lines to the `Canvas` arrow function, between the `const canvas ...` and `return ...` statements:

```
. . .
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
  });

. . .
```

### 2.3.2. Check for Problems and Update github

VSCode shows an eslint warning:

- 'context' is assigned a value but never used.

Thinking this will be fixed in the next step or two, so *updating github anyway.*

## 2.4. *"Step 4: Draw an image"*

This Step should actually be entitled *"Step 4: **Prepare to** Draw an image"*!

### 2.4.1. Update `Canvas.jsx` - First Try

This step calls for making several changes to `Canvas.jsx`,
so the following code box shows how the file should look for this step:

```
import React from 'react';
import PropTypes from 'prop-types'; // ADDED

const Canvas = ( {draw} ) => { // CHANGED
  const canvas = React.useRef();

  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context); // ADDED
  });

  return (
    <canvas
      ref={canvas}
      width="100"
      height="100"
    />
  )
};

// ADDED
Canvas.propTypes = {
  draw: PropTypes.func.isRequired,
};

export default Canvas;
```

### 2.4.1.1. Error!

**This gives an error in the browser:**

- Failed to resolve import "prop-types" from "src/Canvas.jsx". Does the file exist?

Regarding `PropTypes`, the Reference refers to this page:

- [Typechecking With PropTypes](https://legacy.reactjs.org/docs/typechecking-with-proptypes.html)

Which is old!  Quoting from this page:

> These docs are old and won’t be updated. Go to react.dev for the new React docs.
> PropTypes aren’t commonly used in modern React. Use TypeScript for static type checking.

### 2.4.1.2. Fixing the Error!

**Commenting out the references to `propTypes` fixes the error.**

### 2.4.2. Update `Canvas.jsx` - Second Try

Following is our updated copy of `src/Canvas.jsx`:

```
import React from 'react';

// import PropTypes from 'prop-types'; // Added in Step 4

const Canvas = ( {draw} ) => {     // Changed in Step 4
  const canvas = React.useRef();   // Added useRef in Step 2

  // Added useEffect in Step 3:
  React.useEffect(() => {
    const context = canvas.current.getContext('2d');
    draw(context); // Added in Step 4
  });

  return (
    <canvas
      ref={canvas}   // Added ref in Step 2
      width="100"
      height="100"
    />
  )
};

// Added in Step 4
// Canvas.propTypes = {
//   draw: PropTypes.func.isRequired,
// };

export default Canvas;
```

### 2.4.2. Check for Problems and Update github

There are no problems in VSCode and the app still runs in the browser, so updated github with these changes.

## 2.5. *"Step 5: Make the component reusable"*

This step entails updating `Canvas.jsx` so that the `width` and `height` of the `canvas` are props.

- [x] Step 5.1. Add to the `const Canvas ...` line so that it looks like this:

```
const Canvas = ( {draw, width, height} ) => {   // Changed in Step 4 and Step 5
```

- [x] Step 5.2. Replace the hard-coded `100`s in the `<canvas ...` element with these new props:

```
   return (
     <canvas
       ref={canvas}       // Added ref in Step 2
       width={width}      // Added width prop in Step 5
       height={height}    // Added height prop in Step 5
   />
```

### 2.5.2. Check for Problems and Update github

There are no problems in VSCode and the app still runs in the browser, so updated github with these changes.

