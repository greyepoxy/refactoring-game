# First

Inline function as immediately executed lambda.

```diff
export function main(): void {
-  printHeader();
+  (() => {
+    console.log();
+    console.log(' an amazing header');
+    console.log();
+  })();

  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

-function printHeader() {
-  console.log();
-  console.log(' an amazing header');
-  console.log();
-}
```

# Second

No errors, parameters, or return values so can just remove lambda definition.

```diff
export function main(): void {
-  (() => {
  console.log();
  console.log(' an amazing header');
  console.log();
- })();

  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

```

# Done