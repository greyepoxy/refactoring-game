# First

Ensure no disabling of the tslint rule `no-shadowed-variable` is occurring in the file.

In this case there is a disabled `no-shadowed-variable` error so remove the comment and resolve the error with a rename.

```diff
const result: string = 'garbage';

export function main(): void {
  for (let i = 1; i <= 100; i++) {
-    let result = '';
+    let innerResult = '';

    if (i % 3 === 0) {
-      result += 'Fizz';
+      innerResult += 'Fizz';
    }

    if (i % 5 === 0) {
-      result += 'Buzz';
+      innerResult += 'Buzz';
    }

-    if (result === '') {
+    if (innerResult === '') {
      console.log(i.toString());
    }

-    console.log(result);
+    console.log(innerResult);
  }
}
```

# Second

Try and convert the function block into an executed inlined lambda.

```diff
const result: string = 'garbage';

export function main(): void {
  for (let i = 1; i <= 100; i++) {
+    (() => {
      let innerResult = '';

      if (i % 3 === 0) {
        innerResult += 'Fizz';
      }

      if (i % 5 === 0) {
        innerResult += 'Buzz';
      }
+    })();

    if (innerResult === '') { // Cannot find name 'result'. compiler erro
      console.log(i.toString());
    }

    console.log(innerResult); // Cannot find name 'result'. compiler erro
  }
}
```

See two compiler errors for `result` variable defined in the lambda but used later.

# Third

Return `innerResult` variable from lambda and assign to `innerResult` variable defined external of the lambda scope

```diff
const result: string = 'garbage';

export function main(): void {
  for (let i = 1; i <= 100; i++) {
-    (() => {
+    let innerResult = (() => {
      let innerResult = ''; // Shadowed name: 'innerResult', tslint error

      if (i % 3 === 0) {
        innerResult += 'Fizz';
      }

      if (i % 5 === 0) {
        innerResult += 'Buzz';
      }

+      return innerResult;
    })();

    if (innerResult === '') {
      console.log(i.toString());
    }

    console.log(innerResult);
  }
}
```

See a tslint `no-shadowed-variable` error.

# Fourth

Not strictly required in this case but is good practice, resolve the `no-shadowed-variable` error with a rename.

```diff
const result: string = 'garbage';

export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let innerResult = (() => {
-      let innerResult = '';      
+      let innerResult2 = '';

      if (i % 3 === 0) {
-        innerResult += 'Fizz';
+        innerResult2 += 'Fizz';
      }

      if (i % 5 === 0) {
-        innerResult += 'Buzz';
+        innerResult2 += 'Buzz';
      }

-      return innerResult;
+      return innerResult2;
    })();

    if (innerResult === '') {
      console.log(i.toString());
    }

    console.log(innerResult);
  }
}

```

# Fifth

Move Lambda body into module function. See compiler errors.

```diff
const result: string = 'garbage';

export function main(): void {
  for (let i = 1; i <= 100; i++) {
+    let innerResult = getFizzBuzzTextIfDivisibleByThreeOrFive();
-    let innerResult = (() => {     
-      let innerResult2 = '';
-
-      if (i % 3 === 0) {
-        innerResult2 += 'Fizz';
-      }
-
-      if (i % 5 === 0) {
-        innerResult2 += 'Buzz';
-      }
-
-      return innerResult2;
-    })();

    if (innerResult === '') {
      console.log(i.toString());
    }

    console.log(innerResult);
  }
}

+function getFizzBuzzTextIfDivisibleByThreeOrFive(): string {
+  let innerResult2 = '';
+
+  if (i % 3 === 0) { // Cannot find name 'i'. compiler error
+    innerResult2 += 'Fizz';
+  }
+
+  if (i % 5 === 0) { // Cannot find name 'i'. compiler error
+    innerResult2 += 'Buzz';
+  }
+
+  return innerResult2;
+}
```

# Sixth

Resolve compiler errors by making `i` an argument into the new function.

```diff
const result: string = 'garbage';

export function main(): void {
  for (let i = 1; i <= 100; i++) {
-    let innerResult = getFizzBuzzTextIfDivisibleByThreeOrFive();
+    let innerResult = getFizzBuzzTextIfDivisibleByThreeOrFive(i);

    if (innerResult === '') {
      console.log(i.toString());
    }

    console.log(innerResult);
  }
}

-function getFizzBuzzTextIfDivisibleByThreeOrFive(): string {
+function getFizzBuzzTextIfDivisibleByThreeOrFive(i: number): string {
  let innerResult2 = '';

  if (i % 3 === 0) {
    innerResult2 += 'Fizz';
  }

  if (i % 5 === 0) {
    innerResult2 += 'Buzz';
  }

  return innerResult2;
}
```

# Done
