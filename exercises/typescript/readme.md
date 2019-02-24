# Typescript Exercise Setup Instructions

## For all editors
Make sure you have [node](https://nodejs.org/en/) installed

Next in the folder containing this readme run

```unix
npm install
```

This will download the required dependencies (like TypeScript) so that compiling and linting will work.

## Using vscode

For the recommended experience use [vscode](https://code.visualstudio.com/)

1. Open the folder containing this readme file in vscode.
1. With a TypeScript file selected, in the bottom right of the UI click on the TypeScript version number to switch to using the workspace version of TypeScript. This will ensure you get the expected intellisense experience.
1. It is recommended to install the [tslint plugin](https://marketplace.visualstudio.com/items?itemName=eg2.tslint). With the plugin enabled this project is setup to perform auto-formatting on save. There are also some tslint rules configured to help with performing the refactorings.

Compiler errors will now show up in the UI with red underlining and tslint errors/warnings will show up with green underlining.

## Using another editor

Alternatively, any code editor can be used.

A couple of CLI commands can be used to compile and lint the exercise files, run the following in the folder containing this readme file.

To **compile and lint**:

```unix
npm run build
```

To **auto-fix lint errors/warnings** (including formatting):

```unix
npm run lint-fix
```

## Exercises

[Mechanics](mechanics/readme.md)

[Combos](combos/readme.md)

TODO: Program Rearrangements - Large scale behaviorally equivalent program transformations. Would like to put together some exercises for this.
