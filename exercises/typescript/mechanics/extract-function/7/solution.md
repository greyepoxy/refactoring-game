# First
Inline, wrap the expression to be extracted into an immediately executed lambda function.

```diff
-    if (i % 3 === 0) {
+    if ((() => i % 3 === 0)()) {
      result += 'Fizz';
    }
```

# Second
Move lambda decleration to the top level of the module (the file). See compiler errors.

```diff
-   if ((() => i % 3 === 0)()) {
+   if (foo()) {
      result += 'Fizz';
    }
```
```diff
+const foo = () => i % 3 === 0; // Cannot find name 'i'. Compiler error.
```

# Third
Resolve compiler error by passing in `i` as a parameter to the new function.

```diff
-   if (foo()) {
+   if (foo(i)) {
      result += 'Fizz';
    }
```
```diff
-const foo = () => i % 3 === 0;
+const foo = (i: number) => i % 3 === 0;
```

# Fourth
Rename the lambda to something truthful.

```diff
-   if (foo(i)) {
+   if (indexIsDivisibleByThree(i)) {
      result += 'Fizz';
    }
```
```diff
-const foo = (i: number) => i % 3 === 0;
+const indexIsDivisibleByThree = (i: number) => i % 3 === 0;
```

# Fifth A (optional)
Move the lambda function declaration back next to it usage. See lint error.

```diff
+   const indexIsDivisibleByThree = (i: number) => i % 3 === 0; // Shadowed name: 'i' (no-shadowed-variable). Lint error.
    if (indexIsDivisibleByThree(i)) {
      result += 'Fizz';
    }
```
```diff
-const indexIsDivisibleByThree = (i: number) => i % 3 === 0;
```

# Fifth B (optional)
Rename the `i` variable to not shadow the previously declared `i`.

```diff
-   const indexIsDivisibleByThree = (i: number) => i % 3 === 0;
+   const indexIsDivisibleByThree = (index: number) => index % 3 === 0;
    if (indexIsDivisibleByThree(i)) {
      result += 'Fizz';
    }
```

# Sixth (optional)
Convert lambda declaration into function declaration.

```diff
-   const indexIsDivisibleByThree = (index: number) => index % 3 === 0;
+   const isDivisibleByThree = function(index: number) {
+     return index % 3 === 0;
+   };
    if (indexIsDivisibleByThree(i)) {
      result += 'Fizz';
    }
```

# Done