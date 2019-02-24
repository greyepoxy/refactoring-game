export function main(): void {
  printHeader();

  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
}

// Inline this function
// ------------------
function printHeader() {
  console.log();
  console.log(' an amazing header');
  console.log();
}
// ------------------
