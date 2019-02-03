export function main(): void {
  for (let i = 1; i <= 100; i++) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (isBar(i)) {
      result += 'Buzz';
    }

    if (i % 3 !== 0 && !isBar(i)) {
      result = i.toString();
    }

    console.log(result);
  }
}

function isBar(input: number): boolean {
  return input % 3 === 0;
}
