# First

Inline function as immediately executed lambda.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    if (isFizz(i)) {
+    if (
+      (input => {
+        const inputModuloThree = input % 3;
+        return inputModuloThree === 0;
+      })(i)
+    ) {
      result += 'Fizz';
    }

    console.log(result);
  }
}

-function isFizz(input: number): boolean {
-  const inputModuloThree = input % 3;
-  return inputModuloThree === 0;
-}

```

# Second

Use passed value instead of parameter.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (
-      (input => {
+      (() => {
-        const inputModuloThree = input % 3;
+        const inputModuloThree = i % 3;
        return inputModuloThree === 0;
-      })(i)
+      })()
    ) {
      result += 'Fizz';
    }

    console.log(result);
  }
}
```

# Third

Since there are multiple statements in the lambda need to move it before the `if` and assign the return result to a temporary variable.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

+    let isFizz = (() => {
+      const inputModuloThree = i % 3;
+      return inputModuloThree === 0;
+    })();

-    if (
-      (() => {
-        const inputModuloThree = i % 3;
-        return inputModuloThree === 0;
-      })()
-    ) {
+    if (isFizz) {
      result += 'Fizz';
    }

    console.log(result);
  }
}

```

# Fourth

Replace the lambda return with an assignment.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    let isFizz = (() => {;
+    let isFizz: boolean;
+    (() => {
      const inputModuloThree = i % 3;
-      return inputModuloThree === 0;
+      isFizz = inputModuloThree === 0;
    })();

    if (isFizz) {
      result += 'Fizz';
    }

    console.log(result);
  }
}
```

# Fifth

Inline void parameterless lambda.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    let isFizz: boolean;
-    (() => {
    const inputModuloThree = i % 3;
    isFizz = inputModuloThree === 0;
-    })();

    if (isFizz) {
      result += 'Fizz';
    }

    console.log(result);
  }
}
```

# Sixth (Optional)

Move deceleration to assignment.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

-    let isFizz: boolean;
    const inputModuloThree = i % 3;
-    isFizz = inputModuloThree === 0;
+    let isFizz = inputModuloThree === 0;

    if (isFizz) {
      result += 'Fizz';
    }

    console.log(result);
  }
}
```

# Seventh (Optional)

Replace `let` with `const`.

```diff
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    const inputModuloThree = i % 3;
-    let isFizz = inputModuloThree === 0;
+    const isFizz = inputModuloThree === 0;

    if (isFizz) {
      result += 'Fizz';
    }

    console.log(result);
  }
}
```

# Done