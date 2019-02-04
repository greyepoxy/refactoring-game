# First

Wrap code block in immediately executed lambda.

```diff
let numberOfFizzBuzzes: number = 0;

export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

+    (() => {
      if (result === 'FizzBuzz') {
        numberOfFizzBuzzes++;
      }
+    })();

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

```

# Second

Move lambda body into new function defined in module scope. See compiler error.

```diff
let numberOfFizzBuzzes: number = 0;

export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

-    (() => {
-      if (result === 'FizzBuzz') {
-        numberOfFizzBuzzes++;
-      }
-    })();
+    updateFizzBuzzCount();

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

+function updateFizzBuzzCount(): void {
+  if (result === 'FizzBuzz') { //Cannot find name 'result'. Compiler error.
+    numberOfFizzBuzzes++;
+  }
+}

```

# Third

Fix compiler error by passing in `result`.

```diff
let numberOfFizzBuzzes: number = 0;

export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

-    updateFizzBuzzCount();
+    updateFizzBuzzCount(result);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

-function updateFizzBuzzCount(): void {
+function updateFizzBuzzCount(result: string): void {
  if (result === 'FizzBuzz') {
    numberOfFizzBuzzes++;
  }
}

```

# Done
