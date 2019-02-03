export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    result = maybeAppendToResultFizzBuzzOrOutputInput(i, result);

    console.log(result);
  }
}

function maybeAppendToResultFizzBuzzOrOutputInput(i: number, result: string) {
  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }
  if (result === '') {
    console.log(i.toString());
  }
  return result;
}
