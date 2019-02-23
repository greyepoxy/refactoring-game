# First

Try and convert the function block into an executed inlined lambda.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
+    (() => {
      let result = '';

      if (i % 3 === 0) {
        result += 'Fizz';
      }

      if (i % 5 === 0) {
        result += 'Buzz';
      }
+    })();

    if (result === '') { // Cannot find name 'result'. compiler error
      console.log(i.toString());
    }

    console.log(result); // Cannot find name 'result'. compiler error
  }
}
```

See two compiler errors for `result` variable defined in the lambda but used later.

# Second

Return `result` variable from lambda and assign to `result` variable defined external of the lambda scope

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
-    (() => {
+    let result = (() => {
      let result = '';

      if (i % 3 === 0) {
        result += 'Fizz';
      }

      if (i % 5 === 0) {
        result += 'Buzz';
      }

+      return result;
    })();

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}
```

# Third

Convert Lambda into module function. See compiler errors.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
+    let result = getFizzBuzzTextIfDivisibleByThreeOrFive();
-    let result = (() => {
-      let result = '';
-
-      if (i % 3 === 0) {
-        result += 'Fizz';
-      }
-
-      if (i % 5 === 0) {
-        result += 'Buzz';
-      }
-
-      return result;
-    })();

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

+function getFizzBuzzTextIfDivisibleByThreeOrFive(): string {
+  let result = '';
+
+  if (i % 3 === 0) { // Cannot find name 'i'. compiler error
+    result += 'Fizz';
+  }
+
+  if (i % 5 === 0) { // Cannot find name 'i'. compiler error
+    result += 'Buzz';
+  }
+
+  return result;
+}
```

# Fourth

Resolve compiler errors by making `i` an argument into the new function.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
-    let result = getFizzBuzzTextIfDivisibleByThreeOrFive();
+    let result = getFizzBuzzTextIfDivisibleByThreeOrFive(i);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

- function getFizzBuzzTextIfDivisibleByThreeOrFive(): string {
+function getFizzBuzzTextIfDivisibleByThreeOrFive(i: number): string {
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
