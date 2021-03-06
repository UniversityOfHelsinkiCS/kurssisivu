# Course App

## Development

### Install dependencies

To install the dependencies run:

```
npm install
```

### Run Webpack

Webpack entry file is `src/index.jsx`. The `src` folder has all JavaScript source files. SASS files are in the `src/styles` folder. To run webpack run:

```
npm run-script dev
```

Running the above command will also launch webpack dev server at port `8080`.

### Open browser

And navigate to [http://localhost:8080/webpack-dev-server/index.html](http://localhost:8080/webpack-dev-server/index.html).


## How to use

Course App can be embedded to any web page using the following `div` tag:

```html
<div id="course-app-root" data-organization="ORGANIZATION_CODE"></div>
```

You'll also need to include the following `script` tag at the end of your page's `body` tag:

```html
<script src="URL_COMING_SOON/app.var.js"></script>
```

Course App can also be embedded the following way:
```html
import { CoursesApp } from 'courses-app';

<CoursesApp dataOrganization="ORGANIZATION_CODE" />
```

TODO: Correct url for the script tag.

## Deployment

## Building

To build run:

```
npm run-script build
```

Webpack will output styles:
* app.css

and following different build files inside the `dist` folder:
* app.var.js
* app.commonjs2.js
* app.umd.js
* app.amd.js
