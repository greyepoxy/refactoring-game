# Inline Function Exercises

> Make sure to check out the [TypeScript setup instructions](../../readme.md)

Inline function is a core mechanic and is a building block for more complicated refactorings.

For each folder, look at the `start.ts` file for a comment specifying which function to inline:

```ts
// Inline this function
function ( ... ) {
  ...
}
```

Inline the function into its call sites, then compare your approach with the solution steps in `solution.md`.

NOTE: The solutions for these exercises depend on tslint's "no-shadowed-variable" rule. If using vscode with the [tslint plugin](https://marketplace.visualstudio.com/items?itemName=eg2.tslint) installed, these rule failures should show up as errors in the editor.
