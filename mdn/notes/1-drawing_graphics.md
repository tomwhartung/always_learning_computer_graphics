
# 1-drawing_graphics.md

Test driving the code discussed and presented on the
[MDN Drawing Graphics page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics).

# Notes

Taking notes as I work through
[this page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics).

## Creating and sizing our canvas

Following along at
[Creating and sizing our canvas](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#creating_and_sizing_our_canvas)

Downloading initial code for the project from MDN's
[0_canvas_start](https://github.com/mdn/learning-area/tree/main/javascript/apis/drawing-graphics/getting-started/0_canvas_start)
directory in their
[`learning-area` repo](https://github.com/mdn/learning-area/tree/main)
on github.

- [x] Step 1.
  - [Create and Size the Canvas](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#creating_and_sizing_our_canvas)
  - [x] 1.1. Downloaded this code and put a copy of the files in the `mdn/projects/1-drawing_graphics` directory
    - Note that this code is extremely minimal at this time
    - Opened code in vscode and *"No problems have been detected in the workspace"*
  - [x] 1.2. Add a `canvas` element to `index.html`
    - The default size of a `canvas` element is *"300 pixels wide by 150 pixels high"*
  - [x] 1.3. Add some `const` variables to `script.js`
    - **Recommendation:** use *"HTML attributes or DOM properties"* to set the size of a `canvas`
      - Setting these in CSS *"the sizing is done after the canvas has rendered"* can cause the image to becomd *"pixelated/distorted"*
- [x] Step 2. Get the canvas context and *Paint it Black*
  - [Get the Canvas Context](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#getting_the_canvas_context_and_final_setup)
  - Add a call to the `canvas.getContext()` method to `scripts.js`
  - `ctx` *"contains a CanvasRenderingContext2D object"*
  - **Note:** all canvas operations *"will involve manipulating this object"*
  - Use `ctx.fillStyle` and `ctx.fillRect` to *Paint it Black*
- [ ] Step 3. The Basics
  - [2D Canvas Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#2d_canvas_basics)

