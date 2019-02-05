# First

The end file just moves the initial `result` value deceleration into the `appendFizzBuzz` function. So start by extracting the `result` decleration and assignment into a new function.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
-    let result = '';

-    result = appendFizzBuzz(i, result);
+    const result = appendFizzBuzz2(i);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

function appendFizzBuzz(i: number, result: string) {
  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }
  return result;
}

+function appendFizzBuzz2(i: number) {
+  let result = '';
+
+  result = appendFizzBuzz(i, result);
+
+  return result;
+}

```

# Second

Inline the original `appendFizzBuzz` function.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    const result = appendFizzBuzz2(i);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

-function appendFizzBuzz(i: number, result: string) {
-  if (i % 3 === 0) {
-    result += 'Fizz';
-  }
-  if (i % 5 === 0) {
-    result += 'Buzz';
-  }
-  return result;
-}

function appendFizzBuzz2(i: number) {
  let result = '';

+  if (i % 3 === 0) {
+    result += 'Fizz';
+  }
+  if (i % 5 === 0) {
+    result += 'Buzz';
+  }

  return result;
}
```

# Third

Rename `appendFizzBuzz2` to `getFizzBuzzText`.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
-    const result = appendFizzBuzz2(i);
+    const result = getFizzBuzzText(i);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

-function appendFizzBuzz2(i: number) {
+function getFizzBuzzText(i: number) {
  let result = '';

  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }

  return result;
}
```

# Done