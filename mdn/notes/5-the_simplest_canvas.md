
# 5-the_simplest_canvas.md

Create the simplest possible use of a `Canvas` element, and
hope it helps accomplish one or both of the following Goals.

# 0. Goals:

These goals may possibly be related, in that they both apply to the `Canvas` element,
so fixing one may help shed light on how to fix the other.

- [ ] 1. Try to fix **NEW** TS-related error:
  - **Note:** it might be easier to do the next step first!!
  - VSCODE Error Message:
    - 'Canvas' cannot be used as a JSX component.
      - Its type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is not a valid JSX element type.
      - Type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is
        -  not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
      - Target signature provides too few arguments. Expected 4 or more, but got 2.
    - '{ draw: (context: CanvasRenderingContext2D) => void; width: number; height: number; }'
    - but required in type '{ draw: any; function: any; width: any; height: any; }'.
- [ ] 2. Try to Convert `Canvas.jsx` to `Canvas.tsx`
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

#### Step 3.2.1.3. Add a `Canvas` Element

*Replace* the code in the `return` statement in `App()` with the code in the following code box:

```
    <>
      <h3>The Simplest Canvas Using React</h3>
      <div>
        <Canvas
          draw={draw}
          onClick={handleImageClick}
          width={width}
          height={height} />
      </div>
    </>
```

**Note:** deleting the markup referencing `FixedContainer` and `DFlexContainer` gives us warnings in VSCode,
but it is *essential,* because we will be deleting the definitions of those elements momentarily.

#### 3.2.1.4. Check for Sanity and Update github

VSCode has four new warnings about `FixedContainer` and `DFlexContainer`, but we will be fixing those momentarily.

- [x] Go ahead and update github, because in the next step we will be making *major* changes and might break something!

### 3.2.2.: Delete as Much Code as Possible From `App.tsx`

