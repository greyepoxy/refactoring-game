# First

Turn block to extract into immediately executed lambda.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
      let result = '';

+    (() => {
      if (i % 3 === 0) {
        result += 'Fizz';
      }

      if (i % 5 === 0) {
        result += 'Buzz';
      }

      if (result === '') {
        console.log(i.toString());
      }
+    })();

    console.log(result);
  }
}
```

# Second

Move lambda body into a new module level function. See compiler errors in new function.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    (() => {
-      if (i % 3 === 0) {
-        result += 'Fizz';
-      }
-
-      if (i % 5 === 0) {
-        result += 'Buzz';
-      }
-
-      if (result === '') {
-        console.log(i.toString());
-      }
-    })();
+    maybeAppendToResultFizzBuzzOrOutputInput();

    console.log(result);
  }
}

+function maybeAppendToResultFizzBuzzOrOutputInput(): void {
+  if (i % 3 === 0) { // Cannot find name 'i'. Compiler error
+    result += 'Fizz'; // Cannot find name 'result'. Compiler error
+  }
+
+  if (i % 5 === 0) { // Cannot find name 'i'. Compiler error
+    result += 'Buzz'; // Cannot find name 'result'. Compiler error
+  }
+
+  if (result === '') { // Cannot find name 'result'. Compiler error
+    console.log(i.toString()); // Cannot find name 'i'. Compiler error
+  }
+}
```

# Third

Resolve first set of compiler errors by passing `i` into the new function. Since `i` is only read do not need to pass it back out to re-assign the outer variable.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    maybeAppendToResultFizzBuzzOrOutputInput();
+    maybeAppendToResultFizzBuzzOrOutputInput(i);

    console.log(result);
  }
}

-function maybeAppendToResultFizzBuzzOrOutputInput(): void {
+function maybeAppendToResultFizzBuzzOrOutputInput(i: number): void {
  if (i % 3 === 0) {
    result += 'Fizz'; // Cannot find name 'result'. Compiler error
  }

  if (i % 5 === 0) {
    result += 'Buzz'; // Cannot find name 'result'. Compiler error
  }

  if (result === '') { // Cannot find name 'result'. Compiler error
    console.log(i.toString());
  }
}
```

# Fourth

Resolve second set of compiler errors by adding `result` as a parameter to the new function. Since `result` gets re-assigned in the function it also needs to be returned in order to re-assign the external `result` variable.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    maybeAppendToResultFizzBuzzOrOutputInput(i);
+    result = maybeAppendToResultFizzBuzzOrOutputInput(i, result);

    console.log(result);
  }
}

-function maybeAppendToResultFizzBuzzOrOutputInput(i: number): void {
+function maybeAppendToResultFizzBuzzOrOutputInput(
+  i: number,
+  result: string
+): string {
  if (i % 3 === 0) {
    result += 'Fizz';
  }

  if (i % 5 === 0) {
    result += 'Buzz';
  }

  if (result === '') {
    console.log(i.toString());
  }

+  return result;
}
```

# Done
