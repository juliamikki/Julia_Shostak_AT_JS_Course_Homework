const fs = require(`fs-extra`);

const sourceFilePath = `./folder2/file.txt`;
const destinationFilePath = `./folder3/file.txt`;

fs.copy(sourceFilePath, destinationFilePath)
  .then(() => {
    console.log(`File copied successfully!`);
  })
  .catch((error) => {
    console.error(`Error copying file:`, error);
  });