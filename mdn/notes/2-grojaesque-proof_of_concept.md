
# 2-grojaesque-proof_of_concept.md

Create a totally random *"gorja-esque"* image that reflects the values of four sliders.

# 0. Overview:

- [x] 1. Start with Vite, Reactjs, MDB, TypeScript, and ESLint
- [x] 2. Copy in code from the `mdbootstrap/projects/7c-lsup-array_of_numbers/` project in the `always_learning_javascript` repo
- [!] 3. Copy in code from Project 1 in `mdn/projects/1-drawing_graphics/`
  - Could not get this to work!  Rats!!
- [ ] 4. Update code so that the image reflects the values of the four sliders

# 1. Start with Vite, Reactjs, MDB, TypeScript, and ESLint

## 1.1. Install

**Note:** Got some warnings this time!

```
$ pwd
/var/www/always_learning/always_learning_computer_graphics/mdn/projects
$ npm init vite@latest -- --template react-ts
Project name: 2-grojaesque-proof_of_concept

Scaffolding project in /var/www/always_learning/always_learning_computer_graphics/mdn/projects/2-grojaesque-proof_of_concept...

Done. Now run:

  cd 2-grojaesque-proof_of_concept
  npm install
  npm run dev
$ cd 2-grojaesque-proof_of_concept
$ npm i mdb-react-ui-kit

added 215 packages, and audited 216 packages in 32s

40 packages are looking for funding
  run `npm fund` for details

4 moderate severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
$ npm run dev
```

## 1.2. Update github

```
cd /var/www/always_learning/always_learning_computer_graphics
git add mdn/projects/2-grojaesque-proof_of_concept
git commit -m 'Adding project directory mdn/projects/2-grojaesque-proof_of_concept .'
```

# 2. Copy in code from Project 1 in `mdn/projects/1-drawing_graphics/`

## 2.1. Update `index.html`:

Copy a version of `index.html` that has MDB, Font Awesome, and Google Fonts Roboto already in it
to this project's `index.html`.

- I.e., use `whole_shebang/projects/1-whole_shebang/index.html` in the `always_learning_javascript` repo

```
pwd   # /var/www/always_learning/always_learning_computer_graphics/mdn/projects/2-grojaesque-proof_of_concept
diff index.html /var/www/always_learning/always_learning_javascript/whole_shebang/projects/1-whole_shebang/index.html
cp /var/www/always_learning/always_learning_javascript/whole_shebang/projects/1-whole_shebang/index.html .
cp /var/www/always_learning/always_learning_javascript/whole_shebang/projects/1-whole_shebang/src/favicon.ico src
```

Running `git diff` to compare the new `index.html` with the old one should look like this:

```
$ git diff mdn/projects/2-grojaesque-proof_of_concept/index.html
diff --git a/mdn/projects/2-grojaesque-proof_of_concept/index.html b/mdn/projects/2-grojaesque-proof_of_concept/index.html
index e0d1c84..2854449 100644
--- a/mdn/projects/2-grojaesque-proof_of_concept/index.html
+++ b/mdn/projects/2-grojaesque-proof_of_concept/index.html
@@ -4,6 +4,20 @@
     <meta charset="UTF-8" />
     <link rel="icon" type="image/svg+xml" href="/vite.svg" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
+    <!-- Groja icon -->
+    <link rel="icon" href="/src/favicon.ico" type="image/x-icon" />
+    <!-- Font Awesome -->
+    <link
+      rel="stylesheet"
+      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
+    />
+    <!-- Google Fonts Roboto -->
+    <link
+      rel="stylesheet"
+      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
+    />
+    <!-- MDB -->
+    <link rel="stylesheet" href="/node_modules/mdb-react-ui-kit/dist/css/mdb.min.css" />
     <title>Vite + React + TS</title>
   </head>
   <body>
$ git add mdn/projects/2-grojaesque-proof_of_concept/index.html
$ git add mdn/projects/2-grojaesque-proof_of_concept/src/favicon.ico
$ git commit -m 'Updated mdn/projects/2-grojaesque-proof_of_concept/index.html to include a few basic dependencies, such as MDB.'
$
```

## 2.2. Update `src/App.tsx`

Copy a version of `src/App.tsx` that has four MDB sliders and has state lifted up to this project's `src/App.tsx`.

- I.e., use `mdbootstrap/projects/7c-lsup-array_of_numbers/src/App.tsx` in the `always_learning_javascript` repo

```
pwd   # /var/www/always_learning/always_learning_computer_graphics/mdn/projects/2-grojaesque-proof_of_concept/src
diff App.tsx /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7c-lsup-array_of_numbers/src/App.tsx
cp /var/www/always_learning/always_learning_javascript/mdbootstrap/projects/7c-lsup-array_of_numbers/src/App.tsx .
```

## 2.3. Sanity Checks

- [x] Run `npm run lint` inside the `mdn/projects/2-grojaesque-proof_of_concept` directory
- [x] Run `npm run dev` inside the `mdn/projects/2-grojaesque-proof_of_concept` directory
- [x] Check in browser at http://localhost:5173/
- [x] Load into VSCode

This is the end of this step and successful completion indicates a stable setup, so *definitely* consider updating git here.

## 2.4. Cleanup Cruft

Deleting the following files:

```
pwd                    # /var/www/always_learning/always_learning_computer_graphics/mdn/projects/2-grojaesque-proof_of_concept
git rm public/vite.svg
git rm src/assets/react.svg
```

Ensure `index.html` and `src/App.tsx` do not reference them:

```
pwd                    # /var/www/always_learning/always_learning_computer_graphics/mdn/projects/2-grojaesque-proof_of_concept
grep svg index.html src/*.*
```

# 3. Update code so that the image reflects the values of the four sliders
