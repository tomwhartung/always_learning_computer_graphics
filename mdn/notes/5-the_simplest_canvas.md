
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
```

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

- [x] Idea 5.0. Try to Fix *"Ye Olde"* "...declaration file..." Error
  - [x] As mentioned above, I've alread tried this!
  - [x] For details, see subsection *"2.6.2.1. Get an Error"* in `mdn/notes/3-canvas_with_react_hooks.md`
 
- [ ] Idea 5.1. Research `React.useRef()` and `React.useEffect()`, which are used in `Canvas.jsx` 
  - [ ] Good Idea 5.1.1. Research React hooks in General 

- [ ] Idea 5.2. Look for a New Solution
  - The one I found and used was a little outdated
  - Example search: "typescript react canvas how-to"
- [ ] Idea 5.3. Look for How to Convert Extended JS `*.jsx` files to TypeScript `*.tsx` files
  - This sounds like something that would be good to know
  - Example search: "how to convert .jsx to .tsx"
- [ ] Idea 5.4. Add Code in `Canvas.jsx` to `App.tsx`
  - Note that this implies knowing how to convert `*.jsx` files to `*.tsx` files!
- [ ] Idea 5.5. Post to stackoverflow!
  - If I go through all those ideas and still get an error, ask for help!!!


## Idea 5.1. Research `React.useRef()` and `React.useEffect()`, which are used in `Canvas.jsx`

### 5.1.1. References

- React Hooks are called ["Escape Hatches"](https://react.dev/learn/escape-hatches)
- [React Refs](https://react.dev/learn/referencing-values-with-refs)

### 5.1.2. Attempts Tried 

TBD 

### 5.1.3. Good Idea: Research React Hooks in General

Hooks provide *"escape hatches that let you “step outside” React and connect to external systems.
Most of your application logic and data flow should not rely on these features."*

#### 5.1.3.1. Notes and Quotes From the *"Referencing Values With Refs*" Page

These tidbits are from the "React Refs" or
[*"Referencing Values With Refs"*](https://react.dev/learn/referencing-values-with-refs) page.

##### 5.1.3.1.1. From the *"Example: building a stopwatch"* section:

> When a piece of information is used for rendering, keep it in state.
> When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, using a ref may be more efficient.

##### 5.1.3.1.2. From the *"Differences between refs and state"* section:

- Refs are mutable: *"you can modify and update current’s value outside of the rendering process."*
- State is "immutable: *"you must use the state setting function to modify state variables to queue a re-render."*

> [R]eading `ref.current` during render leads to unreliable code. If you need that, use state instead.

##### 5.1.3.1.3. From the *"Best practices for refs"* section:

> Treat refs as an escape hatch. Refs are useful when you work with external systems or browser APIs.

- I suppose we can consider a `canvas` as being an external system or browser API

> Don’t read or write ref.current during rendering. If some information is needed during rendering, use state instead.

#### 5.1.3.2. Notes and Quotes From the *"Manipulating the DOM with Refs"* Page

These tidbits are from the
[*"Manipulating the DOM with Refs"*](https://react.dev/learn/manipulating-the-dom-with-refs) page.

Note that these two statements are equivalent:

```
const canvas = React.useRef();       // from Canvas.jsx
const canvas = React.useRef(null);   // see below
```

##### 5.1.3.2.1. From the *"Getting a ref to the node"* section:

Use `useRef` to *"declare a `ref` inside your component:"* `const myRef = useRef(null);`

Then *"pass your ref as the ref attribute to the JSX tag for which you want to get the DOM node:"*

```
<div ref={myRef}>
```

**This is *exactly* what happens inside the definition of `Canvas` as an *arrow function* in `Canvas.jsx`**

- This makes the `Canvas` variable refer to the `<canvas ...` element

> The `useRef` Hook returns an object with a single property called `current`....
> When React creates a DOM node for this `<div>`, React will put a reference to this node into `myRef.current`.
> You can then access this DOM node from your event handlers and use the built-in browser APIs defined on it.

**This is how `Canvas.jsx` uses the browser graphics API to obtain the context we need to `draw` shapes:**

```
const context = canvas.current.getContext('2d');
```

It appears to me that we use a *ref* instead of *state* when drawing graphics because the drawing commands work immediately.

- Because the drawing happens right away, there is no need to re-render the `Canvas`.

Remember:

> Refs are like state variables that don’t trigger re-renders when you set them.

##### 5.1.3.2.2. From the *"Accessing another component’s DOM nodes"* section:

Typically we might want to use refs on *browser* elements but *not* on our own React elements.

> if you try to put a *ref* on your own component, like `<MyInput />`, by default you will get `null` [instead of `current`].

**If we find we want to use a ref on a React component,** read this section, because it shows how to do that.
For now, I am skipping the rest of this section.

##### 5.1.3.2.3. From the *"When React attaches the refs"* section:

**Good to know:**

> In React, every update is split in two phases:
>
> o During **render,** React calls your components to figure out what should be on the screen.
> o During **commit,** React applies changes to the DOM.

This is why you *should not* access refs during rendering:

> During the first render, the DOM nodes have not yet been created, so `ref.current` will be `null`.
> And during the rendering of updates, the DOM nodes haven’t been updated yet.
> So it’s too early to read them.

Furthermore:

> **Usually, you will access refs from event handlers.**

In some cases, e.g., when there is no event handler for the ref, we may want to use an Effect.
For details about Effects, see the next page,
[Synchronizing With Effects](https://react.dev/learn/synchronizing-with-effects).

##### 5.1.3.2.4. From the *"Best practices for DOM manipulation with refs"* section:

Examples of when we might want to use a *ref* include:

- Managing focus
- Managing scroll position
- Calling browser APIs that React does not expose

Our `Canvas` uses a *ref* for the last reason: so we can use the browser API to draw an image.

A couple of high-level of recommendations:

> **Avoid changing DOM nodes managed by React.**...

> However... **You can safely modify parts of the DOM that React has *no* reason to update.**

**Note:** we might want to return to this page later, after having worked with refs and letting this all sink in a bit.

#### 5.1.3.3. Notes and Quotes From the *"Synchronizing With Effects"* Page

These tidbits are from the
[Synchronizing With Effects](https://react.dev/learn/synchronizing-with-effects).

Following is why we have *Effects:*

> *Effects* let you run some code after rendering so that you can synchronize your component with some system outside of React.

##### 5.1.3.3.1. From the *"What are Effects and how are they different from events?"* section:

React components contain these two types of logic:

- *"Rendering Code"* - code that manages props and state and `return`s JSX to be rendered on the screen
  - For details, see [Describing the UI](https://react.dev/learn/describing-the-ui)
- *"Event handlers"* - code existing in *"nested functions"* in *"components that **do** things"*
  - For details, see [Adding Interactivity](https://react.dev/learn/adding-interactivity)

**Sometimes we need to write code that does not fit into one of these two types.**

- A typical example is code that needs to interact with something outside the browser, such as a server

> ** *Effects* let you specify side effects that are caused by rendering itself, rather than by a particular event.**

> [S]etting up a server connection is an *Effect* because it should happen no matter which interaction caused the component to appear.
> Effects run at the end of a commit after the screen updates.
> This is a good time to synchronize the React components with some external system (like network or a third-party library).



##### 5.1.3.3.2. From the *"You might not need an Effect"* section:

##### 5.1.3.3.3. From the *"How to write an Effect"* section:

##### 5.1.3.3.4. From the *""* section:
##### 5.1.3.3.5. From the *""* section:
##### 5.1.3.3.6. From the *""* section:

#### 5.1.3.4. Notes and Quotes From the *""* Page

These tidbits are from the
[](https://react.dev/learn/separating-events-from-effects) page.

##### 5.1.3.4.1. From the *""* section:
##### 5.1.3.4.2. From the *""* section:


#### 5.1.3.5. Notes and Quotes From the *""* Page

These tidbits are from the
[](https://react.dev/learn/removing-effect-dependencies) page.

##### 5.1.3.5.1. From the *""* section:
##### 5.1.3.5.2. From the *""* section:


#### 5.1.3.6. Notes and Quotes From the *""* Page

These tidbits are from the
[](https://react.dev/learn/reusing-logic-with-custom-hooks) page.

##### 5.1.3.6.1. From the *""* section:
##### 5.1.3.6.2. From the *""* section:


#### 5.1.3.7. Notes and Quotes From the *""* Page

These tidbits are from the
[](https://react.dev/learn/you-might-not-need-an-effect) page.

##### 5.1.3.7.1. From the *""* section:
##### 5.1.3.7.2. From the *""* section:


#### 5.1.3.8. Notes and Quotes From the *""* Page

These tidbits are from the
[](https://react.dev/learn/lifecycle-of-reactive-effects) page.

##### 5.1.3.8.1. From the *""* section:
##### 5.1.3.8.2. From the *""* section:



### 5.1.4. Results 

TBD 

