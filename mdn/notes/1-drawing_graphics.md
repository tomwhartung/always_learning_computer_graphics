
# 1-drawing_graphics.md

Test driving the code discussed and presented on the
[MDN Drawing Graphics page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics).

# Notes

Taking notes as I work through
[this page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics).

## 1. Creating and sizing our canvas

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
- [x] Step 2. *"Active Learning:"* Get the canvas context and *Paint it Black*
  - [Get the Canvas Context](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#getting_the_canvas_context_and_final_setup)
  - Add a call to the `canvas.getContext()` method to `scripts.js`
  - `ctx` *"contains a CanvasRenderingContext2D object"*
  - **Note:** all canvas operations *"will involve manipulating this object"*
  - Use `ctx.fillStyle` and `ctx.fillRect` to *Paint it Black*

## 2. Canvas Basics

- [x] Canvas Basics
  - [2D Canvas Basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics#2d_canvas_basics)
  - Top left corner is (0,0)
    - Values for `x` increase from 0 to `width` as we go from left to right
    - Values for `y` increase from 0 to `height` as we go from the top to the bottom
  - [x] 1. Start with the code from Step 2. above
  - [x] 2. Use `ctx.fillStyle` and `ctx.fillRect` to add an opaque Red rectangle to the image
  - [x] 3. Use `ctx.fillStyle` and `ctx.fillRect` to add an opaque Green rectangle to the image
  - [x] 4. Use `ctx.fillStyle` and `ctx.fillRect` to add a translucent purple rectangle to the image
  - [x] 5. Use `ctx.fillStyle` and `ctx.fillRect` to add a *"groja-esque"* grid of Blue, Green, Red, and Yellow squares to the image

## 3. Do We Want to Do More?

We have what we need to draw grojas, do we want to continue with this tutorial?

- I am thinking, **"No, why bother??"**

I am anxious to get this working with React, TS, and MDB!!

