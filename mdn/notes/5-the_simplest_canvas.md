
# 5-the_simplest_canvas.md

Create the simplest possible use of a `Canvas` element, and
hope it helps accomplish one or both of the following Goals.

# 0. Goals:

These goals may possibly be related, in that they both apply to the `Canvas` element,
so fixing one may help shed light on how to fix the other.

- [x] 1. Try to fix **NEW** TS-related error:
  - **Note:** it might be easier to do the next step first!!
  - VSCODE Error Message:
    - 'Canvas' cannot be used as a JSX component.
      - Its type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is not a valid JSX element type.
      - Type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is
        -  not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
      - Target signature provides too few arguments. Expected 4 or more, but got 2.
    - '{ draw: (context: CanvasRenderingContext2D) => void; width: number; height: number; }'
    - but required in type '{ draw: any; function: any; width: any; height: any; }'.
- [x] 2. Try to Convert `Canvas.jsx` to `Canvas.tsx`
  - **Note:** it might be easier to do the previous step first!!
  - Keep existing `Canvas.jsx` just in case!

# 1. Start with Vite, Reactjs, MDB, TypeScript, and ESLint

**Note:** We do not necessarily need MDB, but let's include it anyway, so we can follow what is now becoming our standard process.

```
pwd                                          # /var/www/always_learning/always_learning_computer_graphics/mdn/projects
npm init vite@latest -- --template react-ts  # Project name: 5-the_simplest_canvas
cd 5-the_simplest_canvas
npm i mdb-react-ui-kit                       # Note: code has "4 moderate severity vulnerabilities"
npm run dev
```

# 2. Include Changes Made in Project 4

For details about these steps, see Project 4 in `4-canvas_with_sliders.md`.

## 2.1. Add Our `favicon.ico`

```
pwd                                          # /var/www/always_learning/always_learning_computer_graphics/mdn/projects
l 4-canvas_with_sliders/src/                 # project has a favicon.ico file
l 5-the_simplest_canvas/src/                 # project does NOT have a favicon.ico file

cp 4-canvas_with_sliders/src/favicon.ico  5-the_simplest_canvas/src/   # copy it over
```

## 2.2. Update `index.html`

- [x] Run `diff` to ensure no changes involve trying to add a `<canvas ...` element
- [x] Copy the version of `index.html` from `4-canvas_with_sliders/` to `5-the_simplest_canvas/`
- [x] Check VSCode for errors
- [x] Ensure the app still runs ok

```
$ pwd
/var/www/always_learning/always_learning_computer_graphics/mdn/projects
$ diff 4-canvas_with_sliders/index.html 5-the_simplest_canvas/index.html
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
$ cp  4-canvas_with_sliders/index.html 5-the_simplest_canvas/index.html
$
```

## 2.3. Copy Over `src/Canvas.jsx`

This is the file we will be focusing on.

```
cp 4-canvas_with_sliders/src/Canvas.jsx 5-the_simplest_canvas/src/
```

## 2.4. Copy Over `src/App.tsx`

- [x] Run `diff` to see changes made
- [x] Copy `4-canvas_with_sliders/src/App.tsx` to `5-the_simplest_canvas/src/App.tsx`

```
diff 4-canvas_with_sliders/src/App.tsx 5-the_simplest_canvas/src/App.tsx
cp 4-canvas_with_sliders/src/App.tsx 5-the_simplest_canvas/src/
```

## 2.5. Sanity Checks

- [x] Run `npm run lint` inside the `mdn/projects/5-the_simplest_canvas` directory
- [x] Run `npm run dev` inside the `mdn/projects/5-the_simplest_canvas` directory
- [x] Check in browser at http://localhost:5173/
- [x] Check VSCode for Problems
  - **Found one problem** and we have seen it before...

### 2.5.1. VSCode Has a Problem

We have seen this one before:

- Could not find a declaration file for module './Canvas.jsx'.
  - '/var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas/src/Canvas.jsx'
  - implicitly has an 'any' type.

**One Question Is:** at what point does this switch to the other *"'Canvas' cannot be used as a JSX component"* error??

## 2.6. Update github

The app still runs and, with the exception of the VSCode problem, which is what we are targeting
in this project, everything looks good.

- So we are checking this version in as our starting point

# 3. Update Code to Draw a Simple Image on a `<canvas ...` Element

## 3.1. Delete Crufty Icons

We copied over our own icon, so delete the following files:

```
pwd                          # /var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas
grep svg index.html src/*.*  # check that there are no lingering references to these files
git rm public/vite.svg
git rm src/assets/react.svg
git commit -m 'Deleted crufty icons from mdn/projects/5-the_simplest_canvas .'
```

## 3.2. Delete All Code Except the Simplest Canvas From `App.tsx`

- [x] Subsection 3.2.1.: add a `Canvas` element to the `App` function component
- [x] Subsection 3.2.2.: delete as much code as possible from `App.tsx`

### 3.2.1. Copy Code for One of the `Canvas` Elements Into `App()`

- [x] Step 3.2.1.1. Add constants `width` and `height`
- [x] Step 3.2.1.2. Add a simplified version of `handleImageClick`
- [x] Step 3.2.1.3. Add a `Canvas` element

#### Step 3.2.1.1 Add Constants `width` and `height`

*Add* the following code to *after* the `function` definition of the `App()` function component:

```
  const width = canvasWidth;
  const height = canvasHeight;
```

#### Step 3.2.1.2 Add a Simplified Version of `handleImageClick`

*Add* the following code to *before* the `return` statement in the `App()` function component:

```
  function handleImageClick(event: React.MouseEvent<HTMLElement>) {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    const pixelX = Math.round( event.clientX - rect.left );
    const pixelY = Math.round( event.clientY - rect.top );
    console.log( "Someone clicked on the Canvas at (" + pixelX + ", " + pixelY + ")." );
  }
```

#### Step 3.2.1.3. Add a `Canvas` Element

*Replace* the code in the `return` statement in `App()` with the code in the following code box:

```
<>
  <h3>The Simplest Canvas Using React</h3>
  <Canvas
    draw={draw}
    onClick={handleImageClick}
    width={width}
    height={height}
  />
</>
```

**Note:** deleting the markup referencing `FixedContainer` and `DFlexContainer` gives us warnings in VSCode,
but it is *essential,* because we will be deleting the definitions of those elements momentarily.

#### 3.2.1.4. Check for Sanity and Update github

VSCode has four new warnings about `FixedContainer` and `DFlexContainer`, but we will be fixing those momentarily.

- [x] Go ahead and update github, because in the next step we will be making *major* changes and might break something!

### 3.2.2.: Delete as Much Code as Possible From `App.tsx`

We will be working from the bottom up.

#### 3.2.2.1. Delete Components

Delete the following function components:

- [x] `DFlexContainer`
- [x] `DFlexImageCards`
- [x] `FixedContainer`
- [x] `FixedSizeImageCards`
- [x] `MySliderCard`
- [x] `MySlider`

#### 3.2.2.2. Delete Global Functions

Delete the following global functions:

- [x] `getRandomPrimaryColor()` function
- [x] `valueToPct` function

#### 3.2.2.3. Gut the `draw()` Function

Replace the `draw()` function with the code in the following code box:

```
// draw: Minimal draw function to ensure the Canvas works
const draw = (context: CanvasRenderingContext2D) => {
  const width = canvasWidth;
  const height = canvasHeight;

  // Paint it all black
  context.fillStyle = "rgb(0, 0, 0)";
  context.fillRect(0, 0, width, height);

  // Paint four colored squares inside the image
  context.fillStyle = "rgba(255, 0, 0, 100)";    // Red
  context.fillRect(0, 150, 50, 50);
  context.fillStyle = "rgba(0, 255, 0, 100)";    // Green
  context.fillRect(50, 100, 50, 50);
  context.fillStyle = "rgba(0, 0, 255, 100)";    // Blue
  context.fillRect(100, 50, 50, 50);
  context.fillStyle = "rgba(255, 255, 0, 100)";  // Yellow
  context.fillRect(150, 0, 50, 50);
};
```

#### 3.2.2.4. Delete *All* Global Variables *Except* `canvasWidth` and `canvasHeight`

Delete the following global variables:

- [x] `defaultValue`
- [x] `numberOfSliderCards`
- [x] `grojaesqueImagePropLabels`
- [x] `grojaesqueImagePropNames`
- [x] `colorLetters`
- [x] `gridTopX`
- [x] `gridTopY`
- [x] `squareSize`
- [x] `gridSize`
- [x] `globalProps`

#### 3.2.2.5. Delete All Interfaces

Delete the following interfaces:

- [x] `MySliderProps`
- [x] `GrojaesqueImageProps`
- [x] `GrojaesqueImagePercents`

#### 3.2.2.6. Delete Unused `import`s

Delete the following import statements:

```
import { ChangeEvent, useState } from 'react';  // DELETE THIS LINE
import { MDBRange } from 'mdb-react-ui-kit';    // DELETE THIS LINE
```

#### 3.2.2.7. Check for Sanity and Update github

VSCode is back to just the one error:

- Could not find a declaration file for module './Canvas.jsx'.
  - '/var/www/always_learning/always_learning_computer_graphics/mdn/projects/5-the_simplest_canvas/src/Canvas.jsx'
  - implicitly has an 'any' type.

Despite the error - which is what we are going to try to fix here - the App runs ok

- Update github with this minimal version of `App.tsx`

# 4. Adding `Canvas.tsx` Changes the Error Message!

Started trying to create `Canvas.tsx` - a TypeScript version of `Canvas.jsx` - and it changed the VSCode error message!

**Notes:**

- This new file is not being included in `App.tsx`
- Nor is this new file loaded in the VSCode editor
- Simply adding it to the directory changes the error message!

## 4.1. **New** VSCode Error

Ye olde *"declaration file"* error is now gone and we have this one:

- 'Canvas' cannot be used as a JSX component.
  - Its type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is not a valid JSX element type.
  - Type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is not assignable
    - to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
  - Target signature provides too few arguments. Expected 4 or more, but got 2.

## 4.2. Getting Back to the **Old** VSCode Error

Renaming the file from `Canvas.tsx` to `Canvas.tsx-NOT` - as in the following command:

```
mv Canvas.tsx Canvas.tsx-NOT
```

Gets us back to the original *"Ye Olde"* "Could not find a declaration file..." error.

**Interesting!**

### 4.2.1. Attempts to Fix the Original VSCode Error

We have already spent quite a bit of time trying to fix *"Ye Olde"* "...declaration file..." error.

- For details, see subsection *"2.6.2.1. Get an Error"* in `mdn/notes/3-canvas_with_react_hooks.md`

However, it is **good to *finally* know why the error message changed!**


# 5. Fixing the Error, Including Converting `Canvas.jsx` to `Canvas.tsx`

Ideas for fixing the error and possibly converting `Canvas.jsx` to `Canvas.tsx`:

- [x] 5.0. Try to Fix *"Ye Olde"* "...declaration file..." Error
  - [x] As mentioned above, I've already tried this!
  - [x] For details, see subsection *"2.6.2.1. Get an Error"* in `mdn/notes/3-canvas_with_react_hooks.md`
- [x] 5.1. Research `React.useRef()` and `React.useEffect()`, which are used in `Canvas.jsx`
  - [x] 5.1.1. Research React hooks in General
  - [x] Notes are in `reactjs/notes/1-escape_hatches.md` in the `always_learning_javascript` repo
- [x] 5.2. Look for a New Solution
  - The one I found and used was a little outdated
  - Example search: "typescript react canvas how-to"
- [x] 5.3. Look for How to Convert Extended JS `*.jsx` files to TypeScript `*.tsx` files
  - This sounds like something that would be good to know
  - Example search: "how to convert .jsx to .tsx"
- [!] 5.4. Add Code in `Canvas.jsx` to `App.tsx`
  - Note that this implies knowing how to convert `*.jsx` files to `*.tsx` files!
  - [!] This proved to be unnecessary because I was able to fix the error!
  - [!] Also, this is definitely not what I want, because I will need the flexibility a reusable component provides
    - Specifically, different personality assessments will want to draw different types of images
- [!] 5.5. Post to stackoverflow!
  - If I go through all those ideas and still get an error, ask for help!!!
  - [!] This proved to be unnecessary because I was able to fix the error!


## 5.1. Research `React.useRef()` and `React.useEffect()`, which are used in `Canvas.jsx`

### 5.1.1. References

- React Hooks are called ["Escape Hatches"](https://react.dev/learn/escape-hatches)
- [React Refs](https://react.dev/learn/referencing-values-with-refs)

### 5.1.2. Notes

Notes taken while reviewing the documentation about Escape Hatches are all in:

- `reactjs/notes/1-escape_hatches.md` in the `always_learning_javascript` repo.

### 5.1.3. Attempts Tried

**Not Applicable.**

This research did not give me any ideas about how I might fix this error.

### 5.1.4. Results

None.


## 5.2. Look for a New Solution

- The one I found initially and used was a little outdated
- Example search: "typescript react canvas how-to"

### 5.2.1. Results

I enjoyed seeing some of these approaches.
They helped inform me, but I didn't use any of them, per se.

### 5.2.2. References

A lot of results recommend slightly different approaches:

- Putting the draw function in the component:
  - https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
  - Not what I want, because I will need the flexibility a reusable component provides
    - Specifically, different personality assessments will want to draw different types of images
- Putting the draw commands in the call to `useEffect()`:
  - https://stackoverflow.com/questions/60424853/html-canvas-with-react-hooks-and-typescript
  - Not what I want, because I will need the flexibility a reusable component provides
    - Specifically, different personality assessments will want to draw different types of images
- Using a `class`:
  - https://kernhanda.github.io/tutorial-typescript-canvas-drawing/
  - https://stackoverflow.com/questions/63667903/canvas-wont-draw-anything-react-typescript
  - Not what I want, because I have learned that functional components are more efficient
- Some of them referred to a type of `React.FC`
  - This post says that stands for *"React Functional Component"*:
    - https://www.freecodecamp.org/news/using-typescript-in-react-apps/
- This one encourages the use of a *"custom hook and canvas-wrapping component"*:
  - https://reactjsexample.com/a-react-typescript-custom-hook-and-canvas-wrapping-component-providing-an-interface-to-render-2d-3d-scenes/

### 5.2.3. Attempts Tried

None of these posts inspired any changes to the code I already have.

## 5.3. Look for How to Convert Extended JS `*.jsx` files to TypeScript `*.tsx` files

- This sounds like something that would be good to know
- Example search: "how to convert .jsx to .tsx"
  - **Note:** The previous search revealed the answers I needed to do this!

### 5.3.1. Results

A lot of the problems with my initial approach to writing `Canvas.tsx` were due to
my not knowing the syntax to use.

- Combining tips and tricks gleaned from the References listed below, I was able to fix the errors!

### 5.3.2. References

These posts, which I turned up in the search performed in the previous subsection
*"5.2. Look for a New Solution"*, turned out to be a big help:

- https://hashnode.blainegarrett.com/html-5-canvas-react-refs-and-typescript-ckf4jju8r00eypos1gyisenyf
  - Shows how to declare the type of a ref:
    - See the second code box in *"Part 3 Making React Refs Type aware with TypeScript Generics"*
    - `const canvasRef = useRef<HTMLCanvasElement | null>(null);`
  - JSX doesn't care if `canvas.current` might be null, but TypeScript does
    - So I need to check `canvas.current` for being null before using it
- https://www.ankursheel.com/blog/react-component-draw-page-hooks-typescript
  - The idea for declaring an interface makes sense
  - That, along with the syntax for declaring the `Canvas` using the interface and an arrow function

### 5.3.3. Attempts Tried

Inspired by the posts listed above, I made a series of tweaks to the code that ultimately gave me
the result I was looking for!

## 5.4. Add Code in `Canvas.jsx` to `App.tsx`

**Decided not to do this, for reasons given above at the beginning of this section in
*"[Fixing the Error, Including Converting `Canvas.jsx` to `Canvas.tsx`](https://github.com/tomwhartung/always_learning_computer_graphics/blob/master/mdn/notes/5-the_simplest_canvas.md#5-fixing-the-error-including-converting-canvasjsx-to-canvastsx)"*.**

## 5.5. Post to StackOverflow!

**Decided not to do this, for reasons given at the beginning of this section in
*"[Fixing the Error, Including Converting `Canvas.jsx` to `Canvas.tsx`](https://github.com/tomwhartung/always_learning_computer_graphics/blob/master/mdn/notes/5-the_simplest_canvas.md#5-fixing-the-error-including-converting-canvasjsx-to-canvastsx)"*.**

