
# 4-canvas_with_sliders.md

Create a totally random *"gorja-esque"* image that reflects the values of four sliders.

# 0. Overview:

- [x] 1. Start with Vite, Reactjs, MDB, TypeScript, and ESLint
- [x] 2. Copy in code from the `mdn/projects/2-grojaesque-proof_of_concept/` project in this repo
- [ ] 3. Add in code from Project 3 in `mdn/projects/3-canvas_with_react_hooks/`
- [ ] 4. Update code so that the image reflects the values of the four sliders

# 1. Start with Vite, Reactjs, MDB, TypeScript, and ESLint

Follow what is now becoming our standard process.
Note that Project 2 includes the output of these steps in `2-grojaesque-proof_of_concept.md`.

```
pwd                                          # /var/www/always_learning/always_learning_computer_graphics/mdn/projects
npm init vite@latest -- --template react-ts  # Project name: 4-canvas_with_sliders
cd 4-canvas_with_sliders
npm i mdb-react-ui-kit
npm run dev
```

# 2. Include Changes Made in Project 2

These changes are *"basic"* in that they do not involve the addition of a `<canvas ...` element, except in commented-out code.

For details about these steps, see Project 2 in `2-grojaesque-proof_of_concept.md`.

## 2.1. Add Our `favicon.ico`

```
pwd               # /var/www/always_learning/always_learning_computer_graphics/mdn/projects
l 2-grojaesque-proof_of_concept/src/  # project has a favicon.ico file
l 4-canvas_with_sliders/src/          # project does NOT have a favicon.ico file
cp 2-grojaesque-proof_of_concept/src/favicon.ico  4-canvas_with_sliders/src/   # copy it over
```

## 2.2. Update `index.html`

- [x] Run `diff` to ensure no changes involve trying to add a `<canvas ...` element
- [x] Copy the version of `index.html` from `2-grojaesque-proof_of_concept/` to `4-canvas_with_sliders/`
- [x] Check VSCode for errors
- [x] Ensure the app still runs ok

```
$ pwd
/var/www/always_learning/always_learning_computer_graphics/mdn/projects
$ diff 2-grojaesque-proof_of_concept/index.html 4-canvas_with_sliders/index.html
4a5
>     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
6,20c7
<     <!-- Font Awesome -->
<     <link
<       rel="stylesheet"
<       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
<     />
<     <!-- Google Fonts Roboto -->
<     <link
<       rel="stylesheet"
<       href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
<     />
<     <!-- MDB -->
<     <link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
<     <!-- Groja icon -->
<     <link rel="icon" href="/src/favicon.ico" type="image/x-icon" />
<     <title>Vite + React + TS + MDB</title>
---
>     <title>Vite + React + TS</title>
$ cp  2-grojaesque-proof_of_concept/index.html 4-canvas_with_sliders/index.html
$
```

## 2.3. Update `src/App.tsx`

- [x] Run `diff` to see changes made
- [x] Copy `2-grojaesque-proof_of_concept/src/App.tsx` to `4-canvas_with_sliders/src/App.tsx`

```
diff 2-grojaesque-proof_of_concept/src/App.tsx 4-canvas_with_sliders/src/App.tsx
cp 2-grojaesque-proof_of_concept/src/App.tsx 4-canvas_with_sliders/src/
```

### 2.3.1. Changes Made After Copying the File Over

- [x] Commented out line 5 to fix this error:
  - 'React' is declared but its value is never read.
- [x] Commented out lines 64-72 to fix these errors:
  - 'Canvas' is assigned a value but never used.
  - 'canvas' is declared but its value is never read.

## 2.4. Cleanup Cruft

Deleting the following files:

```
pwd                    # /var/www/always_learning/always_learning_computer_graphics/mdn/projects/2-grojaesque-proof_of_concept
rm public/vite.svg
rm src/assets/react.svg
grep svg index.html src/*.*  # check that there are no lingering references to these files
```

## 2.5. Sanity Checks

- [x] Run `npm run lint` inside the `mdn/projects/2-grojaesque-proof_of_concept` directory
- [x] Run `npm run dev` inside the `mdn/projects/2-grojaesque-proof_of_concept` directory
- [x] Check in browser at http://localhost:5173/
- [x] Check VSCode for Problems

## 2.6. Update github

Everything looks good so check this version in as our starting point.

# 3. Update Code to Draw a Simple Image on a `<canvas ...` Element

Try to incorporate code we got to work in Project 3.

## 3.1. Include `Canvas.jsx` As-Is:

### 3.1.1. Tempt Fate And ...

- [x] Copy over `Canvas.jsx` from Project 3 (first code box) and...:
- [x] Add the `import` (first) or `require` (maybe later) to `App.tsx` (second code box):

```
pwd   # /var/www/always_learning/always_learning_computer_graphics/mdn/projects

cp 3-canvas_with_react_hooks/src/Canvas.jsx 4-canvas_with_sliders/src/
```

```
import Canvas from './Canvas.jsx'
// const Canvas = require('./Canvas');
```

### 3.2.2. VSCode Error

Getting ye olde *"declaration file"* error:

- Could not find a declaration file for module './Canvas.jsx'. '... /src/Canvas.jsx' implicitly has an 'any' type.

**Note:** we have already spent quite a bit of time trying to solve this problem.

- For details, see subsection *"2.6.2.1. Get an Error"* in `mdn/notes/3-canvas_with_react_hooks.md`

### 3.2.3. Update github

App still runs ok, so I am moving on.

## 3.2. Update `App.tsx` to Use the `Canvas`

### 3.1.1. Copy-and-Paste Code

- From `mdn/projects/3-canvas_with_react_hooks/src/App.tsx` in Project 3
- To `mdn/projects/4-canvas_with_sliders/src/App.tsx` in Project 4

- [x] Copy-and-paste code from this code box to define some `const`s near the top of the file:

```
const width = 333;
const height = 333;
const draw = (context: CanvasRenderingContext2D) => {
  // Paint it black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Add an opaque red rectangle at (50,50) that is 100 px wide and 150 px tall
  context.fillStyle = "rgb(255, 0, 0)";
  context.fillRect(50, 50, 100, 150);
  // Add an opaque green rectangle at (75,75) that is 100 px wide and 100 px tall
  context.fillStyle = "rgb(0, 255, 0)";
  context.fillRect(75, 75, 100, 100);

  // Add a translucent purple rectangle at (25,100) that is 175 px wide and 150 px tall
  context.fillStyle = "rgba(255, 0, 255, 0.75)";
  context.fillRect(25, 100, 175, 50);
};
```

- [x] Copy-and-paste code from this code box to use the `Canvas` into the `App` function component:

```
<div>
  <Canvas draw={draw} width={width} height={height} />
</div>
```

### 3.1.2. OMG/ADM/OMD It Works!

Still getting ye olde *"declaration file"* error, that we have already spent quite a bit of time trying to fix.

- For details, see subsection *"2.6.2.1. Get an Error"* in `mdn/notes/3-canvas_with_react_hooks.md`

### 3.1.3. Update github

App runs ok - and shows an image, **YES!!** - so I am moving on!

