# First

Inline function into immediately executed lambda. See tslint errors.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    result = maybeAppendToResultFizzBuzzOrOutputInput(i, result);
+    result = ((i, result) => { // Shadowed name: 'i'. Shadowed name: 'result'. Tslint errors.
+      if (i % 3 === 0) {
+        result += 'Fizz';
+      }
+      if (i % 5 === 0) {
+        result += 'Buzz';
+      }
+      if (result === '') {
+        console.log(i.toString());
+      }
+      return result;
+    })(i, result);

    console.log(result);
  }
}

-function maybeAppendToResultFizzBuzzOrOutputInput(i: number, result: string) {
-  if (i % 3 === 0) {
-    result += 'Fizz';
-  }
-  if (i % 5 === 0) {
-    result += 'Buzz';
-  }
-  if (result === '') {
-    console.log(i.toString());
-  }
-  return result;
-}
```

# Second

Perform a 'rename' refactoring on `i` to some name that is not shadowing an externally defined variable.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    result = ((i, result) => {
+    result = ((index, result) => {
-      if (i % 3 === 0) {
+      if (index % 3 === 0) {
        result += 'Fizz';
      }
-      if (i % 5 === 0) {
+      if (index % 5 === 0) {
        result += 'Buzz';
      }
      if (result === '') {
-        console.log(i.toString());
+        console.log(index.toString());
      }
      return result;
    })(i, result);

    console.log(result);
  }
}
```

# Third

Perform a 'rename' refactoring on `result` to some name that is not shadowing an externally defined variable.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    result = ((index, result) => {
+    result = ((index, fizzBuzzText) => {
      if (index % 3 === 0) {
-        result += 'Fizz';
+        fizzBuzzText += 'Fizz';
      }
      if (index % 5 === 0) {
-        result += 'Buzz';
+        fizzBuzzText += 'Buzz';
      }
-      if (result === '') {
+      if (fizzBuzzText === '') {
        console.log(index.toString());
      }
-      return result;
+      return fizzBuzzText;
    })(i, result);

    console.log(result);
  }
}
```

# Fourth

Replace return value with variable assignment.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    result = ((index, fizzBuzzText) => {
+    ((index, fizzBuzzText) => {
      if (index % 3 === 0) {
        fizzBuzzText += 'Fizz';
      }
      if (index % 5 === 0) {
        fizzBuzzText += 'Buzz';
      }
      if (fizzBuzzText === '') {
        console.log(index.toString());
      }
-      return result;      
+      result = fizzBuzzText;
    })(i, result);

    console.log(result);
  }
}
```

# Fifth

Replace `index` parameter with passed in variable `i`.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    ((index, fizzBuzzText) => {
+    (fizzBuzzText => {
-      if (index % 3 === 0) {
+      if (i % 3 === 0) {
        fizzBuzzText += 'Fizz';
      }
-      if (index % 5 === 0) {
+      if (i % 5 === 0) {
        fizzBuzzText += 'Buzz';
      }
      if (fizzBuzzText === '') {
-        console.log(index.toString());
+        console.log(i.toString());
      }
      result = fizzBuzzText;
-    })(i, result);
+    })(result);

    console.log(result);
  }
}
```

# Sixth

Replace `fizzBuzzText` parameter with passed in variable `result`.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    (fizzBuzzText => {
+    (() => {
      if (i % 3 === 0) {
-        fizzBuzzText += 'Fizz';
+        result += 'Fizz';
      }
      if (i % 5 === 0) {
-        fizzBuzzText += 'Buzz';
+        result += 'Buzz';
      }
-      if (fizzBuzzText === '') {
+      if (result === '') {
        console.log(i.toString());
      }
-      result = fizzBuzzText;
+      result = result;
-    })(result);
+    })();

    console.log(result);
  }
}
```

# Seventh

Remove no-op variable assignment

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    (() => {
      if (i % 3 === 0) {
        result += 'Fizz';
      }
      if (i % 5 === 0) {
        result += 'Buzz';
      }
      if (result === '') {
        console.log(i.toString());
      }
-      result = result;
    })();

    console.log(result);
  }
}
```

# Eighth

No shadowed variables, so can remove lambda deceleration.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    (() => {
    if (i % 3 === 0) {
      result += 'Fizz';
    }
    if (i % 5 === 0) {
      result += 'Buzz';
    }
    if (result === '') {
      console.log(i.toString());
    }
-    })();

    console.log(result);
  }
}

```

# Done