# First

Wrap function block in immediatly executed lambda. See compiler error.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
+    (() => {
      let result = '';
      let isFizz = i % 3 === 0;
      let isBuzz = i % 5 === 0;

      if (isFizz) {
        result += 'Fizz';
      }

      if (isBuzz) {
        result += 'Buzz';
      }

      if (isFizz && isBuzz) {
        numberOfFizzBuzzes++;
      }

      if (!isFizz && !isBuzz) {
        result = i.toString();
      }
+    })();

    console.log(result); // Cannot find name 'result'. Compiler error
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
```

# Second

Fix compiler error by returning internally defined variable `result` and defining it externally to the function as well.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
-    (() => {
+    let result = (() => {
      let result = '';
      let isFizz = i % 3 === 0;
      let isBuzz = i % 5 === 0;

      if (isFizz) {
        result += 'Fizz';
      }

      if (isBuzz) {
        result += 'Buzz';
      }

      if (isFizz && isBuzz) {
        numberOfFizzBuzzes++;
      }

      if (!isFizz && !isBuzz) {
        result = i.toString();
      }

+      return result;
    })();

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
```

# Third

Move lambda body into a new module function. See compiler errors.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
-    let result = (() => {
-      let result = '';
-      let isFizz = i % 3 === 0;
-      let isBuzz = i % 5 === 0;
-
-      if (isFizz) {
-        result += 'Fizz';
-      }
-
-      if (isBuzz) {
-        result += 'Buzz';
-      }
-
-      if (isFizz && isBuzz) {
-        numberOfFizzBuzzes++;
-      }
-
-      if (!isFizz && !isBuzz) {
-        result = i.toString();
-      }
-
-      return result;
-    })();
+    let result = getFizzBuzzAndUpdateTotalCount();

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

+function getFizzBuzzAndUpdateTotalCount(): string {
+  let result = '';
+  let isFizz = i % 3 === 0; // Cannot find name 'i'. Compiler error
+  let isBuzz = i % 5 === 0; // Cannot find name 'i'. Compiler error
+
+  if (isFizz) {
+    result += 'Fizz';
+  }
+
+  if (isBuzz) {
+    result += 'Buzz';
+  }
+
+  if (isFizz && isBuzz) {
+    numberOfFizzBuzzes++; // Cannot find name 'numberOfFizzBuzzes'. Compiler error
+  }
+
+  if (!isFizz && !isBuzz) {
+    result = i.toString(); // Cannot find name 'i'. Compiler error
+  }
+
+  return result;
+}
```

# Fourth

Resolve first set of compiler errors by passing in `i` as a parameter to the new function.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
-    let result = getFizzBuzzAndUpdateTotalCount();
+    let result = getFizzBuzzAndUpdateTotalCount(i);

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

-function getFizzBuzzAndUpdateTotalCount(): string {
+function getFizzBuzzAndUpdateTotalCount(i: number): string {
  let result = '';
  let isFizz = i % 3 === 0;
  let isBuzz = i % 5 === 0;

  if (isFizz) {
    result += 'Fizz';
  }

  if (isBuzz) {
    result += 'Buzz';
  }

  if (isFizz && isBuzz) {
    numberOfFizzBuzzes++; // Cannot find name 'numberOfFizzBuzzes'. 
  }

  if (!isFizz && !isBuzz) {
    result = i.toString();
  }

  return result;
}
```

# Fifth

To resolve the second set of compiler errors will need to pass in `numberOfFizzBuzzes` as a parameter but since it is assigned need to also pass it back out. In order to do that need to return multiple values, so will convert result type to an object. Note: Object deconstruction is used in this example for the return value assignment but creating a new local variable to use for assignment could be done instead.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
-    let result = getFizzBuzzAndUpdateTotalCount(i);
+    let result: string;
+    ({ result } = getFizzBuzzAndUpdateTotalCount(i));

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

-function getFizzBuzzAndUpdateTotalCount(i: number): string {
+function getFizzBuzzAndUpdateTotalCount(i: number): { result: string } {
  let result = '';
  let isFizz = i % 3 === 0;
  let isBuzz = i % 5 === 0;

  if (isFizz) {
    result += 'Fizz';
  }

  if (isBuzz) {
    result += 'Buzz';
  }

  if (isFizz && isBuzz) {
    numberOfFizzBuzzes++;
  }

  if (!isFizz && !isBuzz) {
    result = i.toString();
  }

-  return result;
+  return { result };
}
```

Or alternatively:

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
-    let result = getFizzBuzzAndUpdateTotalCount(i);
+    let result: string;
+    let getFizzBuzzAndUpdateTotalCountResult = getFizzBuzzAndUpdateTotalCount(
+      i
+    );
+    result = getFizzBuzzAndUpdateTotalCountResult.result;

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

-function getFizzBuzzAndUpdateTotalCount(i: number): string {
+function getFizzBuzzAndUpdateTotalCount(i: number): { result: string } {
  let result = '';
  let isFizz = i % 3 === 0;
  let isBuzz = i % 5 === 0;

  if (isFizz) {
    result += 'Fizz';
  }

  if (isBuzz) {
    result += 'Buzz';
  }

  if (isFizz && isBuzz) {
    numberOfFizzBuzzes++;
  }

  if (!isFizz && !isBuzz) {
    result = i.toString();
  }

-  return result;
+  return { result };
}
```

# Sixth

Resolve the second set of compiler errors by passing in `numberOfFizzBuzzes` as a parameter and returning it in the return value to be re-assigned in the caller scope.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result: string;
-    ({ result } = getFizzBuzzAndUpdateTotalCount(i));
+    ({ result, numberOfFizzBuzzes } = getFizzBuzzAndUpdateTotalCount(
+      i,
+      numberOfFizzBuzzes
+    ));

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

-function getFizzBuzzAndUpdateTotalCount(i: number): { result: string } {
+function getFizzBuzzAndUpdateTotalCount(
+  i: number,
+  numberOfFizzBuzzes: number
+): { result: string; numberOfFizzBuzzes: number } {
  let result = '';
  let isFizz = i % 3 === 0;
  let isBuzz = i % 5 === 0;

  if (isFizz) {
    result += 'Fizz';
  }

  if (isBuzz) {
    result += 'Buzz';
  }

  if (isFizz && isBuzz) {
    numberOfFizzBuzzes++;
  }

  if (!isFizz && !isBuzz) {
    result = i.toString();
  }

-  return { result };
+  return { result, numberOfFizzBuzzes };
}
```

# Done