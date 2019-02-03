export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

    numberOfFizzBuzzes = updateFizzBuzzCount(result, numberOfFizzBuzzes);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}

function updateFizzBuzzCount(result: string, numberOfFizzBuzzes: number) {
  if (result === 'FizzBuzz') {
    numberOfFizzBuzzes++;
  }

  return numberOfFizzBuzzes;
}
