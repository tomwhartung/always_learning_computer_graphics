
# README.md

`README.md` file for the `always_learning_computer_graphics` repository.

# Purpose

Test-drive one or more JavaScript graphics packages for use with React, TypeScript, and MDB.

# References

Actually, looking at the
[Mozilla Developer Network site](https://developer.mozilla.org/en-US/docs/Web)
we might not even need to use a graphics package!

# List of Projects

- [x] Project 1: MDN Drawing Graphics Page
  - Result:
    - Learned how to draw images using JavaScript and a `<canvas ...` Element
  - Reference:
    - [MDN Drawing Graphics page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - Notes: `mdn/notes/1-drawing_graphics.md`
  - Code: `mdn/projects/1-drawing_graphics`

- [!] Project 2: *"Groja-esque"* Image With React, TypeScript, and MDB
  - Result:
    - Got frustrated trying to draw images using JavaScript and a `<canvas ...` Element with React and TypeScript
    - Taking a step back to focus on that goal, without MDB
    - Picking this goal back up in Project 4
  - References:
    - [How to use a canvas in React](https://dev.to/masakudamatsu/how-to-use-html-canvas-with-react-hooks-2j47)
    - [Using a canvas in React and TS](https://hashnode.blainegarrett.com/html-5-canvas-react-refs-and-typescript-ckf4jju8r00eypos1gyisenyf)
  - Goal - combine (1) and (2):
    - (1) See *"groja-esque"* image in code for Project 1 in `mdn/projects/1-drawing_graphics`
    - (2) See `mdbootstrap/README.md` in the `always_learning_javascript` repository
      - Specifically, see *"Step 3.4."* of *"Project 7"* in `mdbootstrap/README.md`
      - That is, see the notes file `mdbootstrap/notes/7c-lsup-array_of_numbers.md`
  - Notes: `mdn/notes/2-grojaesque-proof_of_concept.md`
  - Code: `mdn/projects/2-grojaesque-proof_of_concept`
- [x] Project 3: Take a Step Back to Get `<canvas...>` Tag to Work
  - Result:
    - Successfully drew an image using JavaScript and a `<canvas ...` element using React and TypeScript, but no MDB
  - Reference:
    - [HTML canvas with React hooks](https://dev.to/masakudamatsu/how-to-use-html-canvas-with-react-hooks-2j47)
  - Unused References - for possible future reference:
    - https://stackoverflow.com/questions/60424853/html-canvas-with-react-hooks-and-typescript
    - https://kernhanda.github.io/tutorial-typescript-canvas-drawing/
    - https://blog.logrocket.com/creating-canvas-graphics-in-react-cad70cd5b210/
  - Notes: `mdn/notes/3-canvas_with_react_hooks.md`
  - Code: `mdn/projects/3-canvas_with_react_hooks`

- [x] Project 4: Try to Finish Project 2: Use MDB Sliders to Control a *"Groja-esque"* Image
  - Result:
    - App runs fine and is actually kind of cool!
    - However, VSCode shows a lingering error, that occurs twice because I am using two `Canvas` elements:
      - 'Canvas' cannot be used as a JSX component.
        - Its type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is not a valid JSX element type.
        - Type '(draw: any, onClick: any, width: any, height: any) => JSX.Element' is not assignable to type '(props: any, deprecatedLegacyContext?: any) => ReactNode'.
        - Target signature provides too few arguments. Expected 4 or more, but got 2.
  - References:
    - Project 1, Project 2, and Project 3 above
  - Goal:
    - Combine portions of Project 1, Project 2, and Project 3
    - Get to where I can use the sliders to control the colors in the *"grojaesque"* image
  - Notes: `mdn/notes/4-canvas_with_sliders`
  - Code: `mdn/projects/4-canvas_with_sliders`

