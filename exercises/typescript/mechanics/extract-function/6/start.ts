export function main(): void {
  let numberOfFizzBuzzes: number = 0;

  for (let i = 1; i <= 100; i++) {
    // Extract this block into a function in the module scope
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
    //

    console.log(result);
  }

  console.log(`There were ${numberOfFizzBuzzes} 'FizzBuzz'es`);
}
