const i: number = 99;

export function main(): void {
  // tslint:disable-next-line:no-shadowed-variable
  for (let i = 1; i <= 100; i++) {
    let result = '';

    // Extract this block into a function in the module scope
    // ------------------
    if (i % 3 === 0) {
      result += 'Fizz';
    }

    if (i % 5 === 0) {
      result += 'Buzz';
    }

    if (result === '') {
      console.log(i.toString());
    }
    // ------------------

    console.log(result);
  }
}
