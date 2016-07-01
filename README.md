# js-lib-test-boilerplate

## Author

Wil Neeley ( [@wilneeley](http://twitter.com/wilneeley) / [github.com](https://github.com/Xaxis) )

## Summary

A boilerplate for rapidly spinning up JavaScript libraries /w testing.

Includes Mocha and Chai w/ integrated w/ grunt to allow for test driven development.

## Getting started

Clone the repo and then copy all files to your project directory.

```
git clone https://github.com/Xaxis/js-lib-boilerplate.git
```

Update LICENSE, package.json, README.md to match your project details then npm install from your project root.

```
npm install
```

During development use the grunt task runner to lint, test, concatenate, and minify files to the `dist/` directory.

```
grunt watch
```