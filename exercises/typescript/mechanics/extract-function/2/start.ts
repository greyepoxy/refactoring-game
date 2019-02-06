export function main(): void {
  for (let i = 1; i <= 100; i++) {
    // Extract this block into a function in the module scope
    const getText = () => {
      let result = '';

      if (i % 3 === 0) {
        result += 'Fizz';
      }

      if (i % 5 === 0) {
        result += 'Buzz';
      }
      return result;
    };
    const result = getText();
    //

    if (result === '') {
      console.log(i.toString());
    }

    console.log(result);
  }
}
