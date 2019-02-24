# First

Ensure no disabling of the tslint rule `no-shadowed-variable` is occurring in the file.

In this case there is a disabled `no-shadowed-variable` error so remove the comment and resolve the error with a rename.

```diff
const i: number = 99;

export function main(): void {
-  for (let i = 1; i <= 100; i++) {
+  for (let index = 1; index <= 100; index++) {
    let result = '';

-    if (i % 3 === 0) {
+    if (index % 3 === 0) {
      result += 'Fizz';
    }

-    if (i % 5 === 0) {
+    if (index % 5 === 0) {
      result += 'Buzz';
    }

    if (result === '') {
-      console.log(i.toString());
+      console.log(index.toString());
    }

    console.log(result);
  }
}
```

# Second

Turn the block to extract into an immediately executed lambda.

```diff
const i: number = 99;

export function main(): void {
  for (let index = 1; index <= 100; index++) {
    let result = '';

+    (() => {
      if (index % 3 === 0) {
        result += 'Fizz';
      }

      if (index % 5 === 0) {
        result += 'Buzz';
      }

      if (result === '') {
        console.log(index.toString());
      }
+    })();

    console.log(result);
  }
}
```

# Third

Move lambda body into a new module level function. See compiler errors in new function.

```diff
const i: number = 99;

export function main(): void {
  for (let index = 1; index <= 100; index++) {
    let result = '';

-    (() => {
-      if (index % 3 === 0) {
-        result += 'Fizz';
-      }
-
-      if (index % 5 === 0) {
-        result += 'Buzz';
-      }
-
-      if (result === '') {
-        console.log(index.toString());
-      }
-    })();
+    maybeAppendToResultFizzBuzzOrOutputInput();

    console.log(result);
  }
}

+function maybeAppendToResultFizzBuzzOrOutputInput(): void {
+  if (index % 3 === 0) { // Cannot find name 'index'. Compiler error
+    result += 'Fizz'; // Cannot find name 'result'. Compiler error
+  }
+
+  if (index % 5 === 0) { // Cannot find name 'index'. Compiler error
+    result += 'Buzz'; // Cannot find name 'result'. Compiler error
+  }
+
+  if (result === '') { // Cannot find name 'result'. Compiler error
+    console.log(index.toString()); // Cannot find name 'index'. Compiler error
+  }
+}
```

# Fourth

Resolve first set of compiler errors by passing `i` into the new function. Since `i` is only read do not need to pass it back out to re-assign the outer variable.

```diff
const i: number = 99;

export function main(): void {
  for (let index = 1; index <= 100; index++) {
    let result = '';

-    maybeAppendToResultFizzBuzzOrOutputInput();
+    maybeAppendToResultFizzBuzzOrOutputInput(index);

    console.log(result);
  }
}

-function maybeAppendToResultFizzBuzzOrOutputInput(): void {
+function maybeAppendToResultFizzBuzzOrOutputInput(index: number): void {
  if (index % 3 === 0) {
    result += 'Fizz'; // Cannot find name 'result'. Compiler error
  }

  if (index % 5 === 0) {
    result += 'Buzz'; // Cannot find name 'result'. Compiler error
  }

  if (result === '') { // Cannot find name 'result'. Compiler error
    console.log(index.toString());
  }
}
```

# Fifth

Resolve second set of compiler errors by adding `result` as a parameter to the new function. Since `result` gets re-assigned in the function it also needs to be returned in order to re-assign the external `result` variable.

```diff
const i: number = 99;

export function main(): void {
  for (let index = 1; index <= 100; index++) {
    let result = '';

-    maybeAppendToResultFizzBuzzOrOutputInput(index);
+    result = maybeAppendToResultFizzBuzzOrOutputInput(index, result);

    console.log(result);
  }
}

-function maybeAppendToResultFizzBuzzOrOutputInput(index: number): void {
+function maybeAppendToResultFizzBuzzOrOutputInput(
+  index: number,
+  result: string
+): string {
  if (index % 3 === 0) {
    result += 'Fizz';
  }

  if (index % 5 === 0) {
    result += 'Buzz';
  }

  if (result === '') {
    console.log(index.toString());
  }

+  return result;
}
```

# Done
