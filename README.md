# angular-qart [![npm](https://img.shields.io/npm/v/angular-qart.svg?style=flat-square)](https://github.com/isonet/angular-qart)[![licence](https://img.shields.io/npm/l/angular-qart.svg?style=flat-square)](https://img.shields.io/npm/l/angular-qart.svg)[![Codacy grade](https://img.shields.io/codacy/grade/7e22372439304c17bf215cc5eaa3e8ca.svg?style=flat-square)](https://github.com/isonet/angular-qart)

### Check out the [demo](https://isonet.github.io/angular-qart/)!

[NPM registry](https://www.npmjs.com/package/angular-qart)

An angular directive for [kciter's qart.js](https://github.com/kciter/qart.js)

## Installation

#### Install with NPM

```npm install --save angular-qart```

#### Import

```javascript
import 'angular-qart';
```

#### Or include the script in your code

```html
<script src="node_modules/angular-qart/dist/angular-qart.js"></script>
```

#### Add it as a module to angular

```javascript
angular.module('MyExampleApp', ['angular-qart']);
```

## Usage

Default values:

```html
<angular-qart ng-model="example text" option-filter="color" image-url="example.png"></angular-qart>
```

-Take a look at the example/index.html file.

For more details you should definitely check out [kciter's qart.js](https://github.com/kciter/qart.js)

# Dev / Other

This package is written in ES2015 and uses webpack for bundling.
