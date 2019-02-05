export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (isFizz(i)) {
      result += 'Fizz';
    }

    console.log(result);
  }
}

// Inline this function
function isFizz(input: number): boolean {
  const inputModuloThree = input % 3;
  return inputModuloThree === 0;
}
