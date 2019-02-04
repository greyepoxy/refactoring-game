# First

Wrap code block in immediately executed lambda

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

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

Move lambda body into new module function. See compiler errors.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

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
+  if (result === 'FizzBuzz') { // Cannot find name 'result'. Compiler error
+    numberOfFizzBuzzes++; // Cannot find name 'numberOfFizzBuzzes'. Compiler error
+  }
+}
```

# Third

Resolve first compiler error by adding `result` as a parameter to the new function.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

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

# Fourth

Resolve second compiler error by adding `numberOfFizzBuzzes` as a parameter, since `numberOfFizzBuzzes` is re-assigned have to also return it from the function and assign it in the calling context.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

-    updateFizzBuzzCount(result);
+    numberOfFizzBuzzes = updateFizzBuzzCount(result, numberOfFizzBuzzes);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

-function updateFizzBuzzCount(result: string): void {
+function updateFizzBuzzCount(
+  result: string,
+  numberOfFizzBuzzes: number
+): number {
  if (result === 'FizzBuzz') {
    numberOfFizzBuzzes++;
  }

+  return numberOfFizzBuzzes;
}

```

# Done