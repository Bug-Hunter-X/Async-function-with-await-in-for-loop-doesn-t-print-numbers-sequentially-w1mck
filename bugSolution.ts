function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

printNumbers(5); // This works fine

async function asyncPrintNumbers(n: number): Promise<void> {
  for (let i = 1; i <= n; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(i);
  }
}

asyncPrintNumbers(5); 