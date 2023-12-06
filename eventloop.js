let globalCounter = 0;

function increment() {
  globalCounter++;
  increment();
}

try {
    increment();
} catch (error) {
  console.error(`Error: ${error.message}`);
  console.log(`Global counter: ${globalCounter}`);
}