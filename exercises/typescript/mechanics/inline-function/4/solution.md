# First

Replace the function calls with an inlined lambda call.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

-    ({
-      fizzBuzzText: result,
-      fizzBuzzCount: numberOfFizzBuzzes
-    } = updateFizzBuzzCount(i, result, numberOfFizzBuzzes));
+    ({ fizzBuzzText: result, fizzBuzzCount: numberOfFizzBuzzes } = ((
+      index,
+      fizzBuzzText,
+      fizzBuzzCount
+    ) => {
+      if (index % 3 === 0) {
+        fizzBuzzText += 'Fizz';
+      }
+
+      if (index % 5 === 0) {
+        fizzBuzzText += 'Buzz';
+      }
+
+      if (fizzBuzzText === 'FizzBuzz') {
+        fizzBuzzCount++;
+      }
+
+      return { fizzBuzzText, fizzBuzzCount };
+    })(i, result, numberOfFizzBuzzes));

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

-function updateFizzBuzzCount(
-  index: number,
-  fizzBuzzText: string,
-  fizzBuzzCount: number
-) {
-  if (index % 3 === 0) {
-    fizzBuzzText += 'Fizz';
-  }
-
-  if (index % 5 === 0) {
-    fizzBuzzText += 'Buzz';
-  }
-
-  if (fizzBuzzText === 'FizzBuzz') {
-    fizzBuzzCount++;
-  }
-
-  return { fizzBuzzText, fizzBuzzCount };
-}
```

# Second

For read-only `index` parameter remove parameter and use compiler errors to replace all usage of `index`.


```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

    ({ fizzBuzzText: result, fizzBuzzCount: numberOfFizzBuzzes } = ((
-      index,
      fizzBuzzText,
      fizzBuzzCount
    ) => {
-      if (index % 3 === 0) {
+      if (i % 3 === 0) {
        fizzBuzzText += 'Fizz';
      }

-      if (index % 5 === 0) {
+      if (i % 5 === 0) {
        fizzBuzzText += 'Buzz';
      }

      if (fizzBuzzText === 'FizzBuzz') {
        fizzBuzzCount++;
      }

      return { fizzBuzzText, fizzBuzzCount };
-    })(i, result, numberOfFizzBuzzes));
+    })(result, numberOfFizzBuzzes));

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
```

# Third

Remove return statement and replace with function assignments.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

-    ({ fizzBuzzText: result, fizzBuzzCount: numberOfFizzBuzzes } = ((
-      fizzBuzzText,
-      fizzBuzzCount
-    ) => {
+    ((fizzBuzzText, fizzBuzzCount) => {
      if (i % 3 === 0) {
        fizzBuzzText += 'Fizz';
      }

      if (i % 5 === 0) {
        fizzBuzzText += 'Buzz';
      }

      if (fizzBuzzText === 'FizzBuzz') {
        fizzBuzzCount++;
      }

-      return { fizzBuzzText, fizzBuzzCount };
+      result = fizzBuzzText;
+      numberOfFizzBuzzes = fizzBuzzCount;
-    })(result, numberOfFizzBuzzes));
+    })(result, numberOfFizzBuzzes);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
```

# Fourth

Now that the lambda has no return statement, for the remaining parameters remove them and follow the compiler errors to replace with the passed in value.

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

-    ((fizzBuzzText, fizzBuzzCount) => {
+    (() => {
      if (i % 3 === 0) {
-        fizzBuzzText += 'Fizz';
+        result += 'Fizz';
      }

      if (i % 5 === 0) {
-        fizzBuzzText += 'Buzz';
+        result += 'Buzz';
      }

-      if (fizzBuzzText === 'FizzBuzz') {
+      if (result === 'FizzBuzz') {
-        fizzBuzzCount++;
+        numberOfFizzBuzzes++;
      }

-      result = fizzBuzzText;
+      result = result;
-      numberOfFizzBuzzes = fizzBuzzCount;
+      numberOfFizzBuzzes = numberOfFizzBuzzes;
-    })(result, numberOfFizzBuzzes);
+    })();

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
```

# Fifth

Remove no-op assignments

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

    (() => {
      if (i % 3 === 0) {
        result += 'Fizz';
      }

      if (i % 5 === 0) {
        result += 'Buzz';
      }

      if (result === 'FizzBuzz') {
        numberOfFizzBuzzes++;
      }

-      result = result;
-      numberOfFizzBuzzes = numberOfFizzBuzzes;
    })();

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
```

# Sixth

Remove lambda

```diff
export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

-    (() => {
    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

    if (result === 'FizzBuzz') {
      numberOfFizzBuzzes++;
    }
-    })();

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
```

# Done