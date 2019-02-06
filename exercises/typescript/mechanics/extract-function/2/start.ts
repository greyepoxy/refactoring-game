const getText = (i: number) => {
  let result = '';

  if (i % 3 === 0) {
    result += 'Fizz';
  }

  if (i % 5 === 0) {
    result += 'Buzz';
  }
  return result;
};
export function main(): void {
  for (let i = 1; i <= 100; i++) {
    const result = getText(i);

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}
