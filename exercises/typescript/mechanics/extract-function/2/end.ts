export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = getFizzBuzzTextIfDivisibleByThreeOrFive(i);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}

function getFizzBuzzTextIfDivisibleByThreeOrFive(i: number) {
  let result = '';
  if (i % 3 === 0) {
    result += 'Fizz';
  }
  if (i % 5 === 0) {
    result += 'Buzz';
  }
  return result;
}
