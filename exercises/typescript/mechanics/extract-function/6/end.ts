export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    const result = getFizzBuzzAndUpdateTotalCount(i, numberOfFizzBuzzes);
    numberOfFizzBuzzes = result.numberOfFizzBuzzes;

    console.log(result.result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

function getFizzBuzzAndUpdateTotalCount(i: number, numberOfFizzBuzzes: number) {
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
  return { result, numberOfFizzBuzzes };
}
