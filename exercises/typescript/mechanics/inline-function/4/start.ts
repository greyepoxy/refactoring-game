export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

    ({
      fizzBuzzText: result,
      fizzBuzzCount: numberOfFizzBuzzes
    } = updateFizzBuzzCount(i, result, numberOfFizzBuzzes));

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

// Inline this function
// ------------------
function updateFizzBuzzCount(
  index: number,
  fizzBuzzText: string,
  fizzBuzzCount: number
) {
  if (index % 3 === 0) {
    fizzBuzzText += 'Fizz';
  }

  if (index % 5 === 0) {
    fizzBuzzText += 'Buzz';
  }

  if (fizzBuzzText === 'FizzBuzz') {
    fizzBuzzCount++;
  }

  return { fizzBuzzText, fizzBuzzCount };
}
// ------------------
