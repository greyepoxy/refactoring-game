# First

```ts
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    // First Extract the following lines into function
    let result = '';

    result = appendFizzBuzz(i, result);
    //

    // ...
  }
}
```

This leave you with
```ts
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = getFizzBuzzText(i);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

function getFizzBuzzText(i: number) {
  let result = '';
  result = appendFizzBuzz(i, result);
  return result;
}

function appendFizzBuzz(i: number, result: string) {
  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }
  return result;
}
```

# Second

Inline `appendFizzBuzz` this leave you with `getFizzBuzzText` as

```ts
function getFizzBuzzText(i: number) {
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

# Third

In main function convert `let result` to `const result` since it is not re-assigned
