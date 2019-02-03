export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (isFizz(i)) {
      result += 'Fizz';
    }

    if (isBar(i)) {
      result += 'Buzz';
    }

    if (!isFizz(i) && !isBar(i)) {
      result = i.toString();
    }

    console.log(result);
  }
}

// Inline this function
function isFizz(input: number): boolean {
  return input % 3 === 0;
}

function isBar(input: number): boolean {
  return input % 3 === 0;
}
