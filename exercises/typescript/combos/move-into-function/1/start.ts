export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    result = appendFizzBuzz(i, result);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
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
