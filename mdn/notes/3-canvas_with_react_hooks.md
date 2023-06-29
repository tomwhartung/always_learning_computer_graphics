
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

#### 2.4.1.2. Fixing the Error!

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

## 2.6. *"Step 6: Render the canvas component"*

### 2.6.1. Update `App.tsx` to Use the `Canvas` Component - First Try

- [x] Step 6.1. Add the following `draw` arrow function to `App.tsx`:

```
const draw = context => {
  // Insert your code to draw an image
};
```

#### 2.6.1.1. Get an Error

This causes the following error:

- Parameter 'context' implicitly has an 'any' type.

#### 2.6.1.2. Fix the Error

- [x] Fix 1: declare `context` to be an `any` type
  - `const draw = (context: any) => {`
  - **This is an inferior solution,** but is ok in the short term.
- [x] Fix 2: declare `context` to be of type `CanvasRenderingContext2D`
  - `const draw = (context: CanvasRenderingContext2D) => {`
  - **This is a better solution**


- [x] Step 6.2. Add the following new `<div>` containing a `<Canvas ...` element to `App.tsx`:

```
      <div>
        <Canvas draw={draw} height={100} width={100} />
      </div>
```

#### 2.6.2.1. Get an Error

This causes the following error:

- Could not find a declaration file for module './Canvas.jsx'. '... Canvas.jsx' implicitly has an 'any' type.

#### 2.6.2.2. [Try to] Fix the Error ...

Looked at and tried several solutions:

- https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam#42505940
  - https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam?
  - This post includes two pages of answers, including how to "fix" it using `require`
- https://stackoverflow.com/questions/56927551/how-to-resolve-could-not-find-a-declaration-file-for-module-request-context
- https://blog.atomist.com/declaration-file-fix/
- https://pjausovec.medium.com/how-to-fix-error-ts7016-could-not-find-a-declaration-file-for-module-xyz-has-an-any-type-ecab588800a8
- https://akashmittal.com/could-not-find-declaration-file-module/
- https://learnshareit.com/solution-for-the-error-could-not-find-declaration-file-for-module-lodash/

There is a common thread to these, and I am leaving a couple of files here as evidence of this.

#### 2.6.2.3. ... Or Not?

I tried to fix the error, but the app runs anyway, and I am ready to move on!

Leaving these two files as evidence of the common thread found in the *"solutions"* listed above:

- `mdn/projects/3-canvas_with_react_hooks/typings/index.d.ts`
- `mdn/projects/3-canvas_with_react_hooks/tsconfig.json-typeroots-did_not_work`

### 2.6.3. Check for Problems and Update github

VSCode is still reporting a problem that I tried to fix, but was unable to.

- I will be using this in an attempt to get Project 2 to work, but plan to do things a little differently
  - I.e., am going to try to include the code in this project's `Canvas.jsx` in the main file `App.tsx`
  - That way I do not have to `import` it, and so should not get the error.
- Wondering why the fixes I found do not work, but think it's time to move on...

### 2.6.4. Just Make the Error Go Away!

Well, now I want to look at Project 3 side-by-side with Project 4, and this error is very distracting.
If something I do causes a new error, I want know that right away!

OK, so this post:
https://stackoverflow.com/questions/41292559/could-not-find-a-declaration-file-for-module-module-name-path-to-module-nam#42505940
shows how to "fix" the error using `require` rather than `import`, but *that technique leads to this error:*

- Require statement not part of import statement.

This post:
https://stackoverflow.com/questions/59278151/eslint-require-statement-not-part-of-import-statement-typescript-eslint-no-va
shows how to "fix" this error by adding the line marked with a `+` in the following code box to the
`rules` section of `.eslintrc.js`:

```
   rules: {
     'react-refresh/only-export-components': 'warn',
+    '@typescript-eslint/no-var-requires': 0,
   },
```

#### 2.6.4.1. Check for Problems and Update github

This "fix" made the error go away, so I updated github and am moving on.

