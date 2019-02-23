# First

Turn the segment to extract into a lambda and execute it immediately

```diff
export function main(): void {
+  (() => {
    console.log(
      'For numbers one through 100 will print out Fizz if the number'
    );
    console.log('is divisible by 3, Buzz if it is divisible by 5, FizzBuzz if');
    console.log('it is divisible by both, else will just print the number.');
+  })();


  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}
```

# Second

Turn the lambda into a module level function, no compiler errors for un-referenced variables so you are done!

```diff
export function main(): void {
-  (() => {
-    console.log(
-      'For numbers one through 100 will print out Fizz if the number'
-    );
-    console.log('is divisible by 3, Buzz if it is divisible by 5, FizzBuzz if');
-    console.log('it is divisible by both, else will just print the number.');
-  })();
+  printHeader();

  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

+function printHeader() {
+  console.log('For numbers one through 100 will print out Fizz if the number');
+  console.log('is divisible by 3, Buzz if it is divisible by 5, FizzBuzz if');
+  console.log('it is divisible by both, else will just print the number.');
+}
```

# Done
