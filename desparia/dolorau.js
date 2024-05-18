async function generateRandomName() {
  // Generates a random integer between min (inclusive) and max (inclusive)
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Generates random names based on the provided number
  async function genRandNames(numberOfNames) {
    const names = ['Alice', 'Bob', 'Charlie', 'Diana'];
    let randomNames = '';
    for (let i = 0; i < numberOfNames; i++) {
      randomNames += names[getRandomIntInclusive(0, names.length - 1)] + ' ';
    }
    return randomNames.trim();
  }

  // Append a random name to the existing 'name' variable
  const randomNameCount = getRandomIntInclusive(1, 2);
  const randomNames = await genRandNames(randomNameCount);
  name += ' ' + randomNames;
  return name;
}

// Usage
let name = 'CurrentName';
generateRandomName().then((updatedName) => {
  console.log('Updated Name:', updatedName);
});
