# First

In both calling locations inline function as immediately called lambda.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    if (isFizz(i)) {
+    if ((input => input % 3 === 0)(i)) {
      result += 'Fizz';
    }

    if (isBar(i)) {
      result += 'Buzz';
    }

-    if (!isFizz(i) && !isBar(i)) {
+    if (!(input => input % 3 === 0)(i) && !isBar(i)) {
      result = i.toString();
    }

    console.log(result);
  }
}

-function isFizz(input: number): boolean {
-  return input % 3 === 0;
-}

function isBar(input: number): boolean {
  return input % 3 === 0;
}
```

# Second

Remove the `input` parameter and replace with the passed in value.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    if ((input => input % 3 === 0)(i)) {
+    if ((() => i % 3 === 0)()) {
      result += 'Fizz';
    }

    if (isBar(i)) {
      result += 'Buzz';
    }

-    if (!(input => input % 3 === 0)(i) && !isBar(i)) {
+    if (!(() => i % 3 === 0)() && !isBar(i)) {
      result = i.toString();
    }

    console.log(result);
  }
}

function isBar(input: number): boolean {
  return input % 3 === 0;
}

```

# Third

Since the lambda is just a single expression can inline it directly, do not need to do any kind of temporary variable assignment.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    if ((() => i % 3 === 0)()) {
+    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (isBar(i)) {
      result += 'Buzz';
    }

-    if (!(() => i % 3 === 0)() && !isBar(i)) {
+    if (!(i % 3 === 0) && !isBar(i)) {
      result = i.toString();
    }

    console.log(result);
  }
}

function isBar(input: number): boolean {
  return input % 3 === 0;
}
```

# Done