const fs = require(`fs-extra`);

const sourceFilePath = `./folder1/file.txt`;
const destinationFilePath = `./folder2/file.txt`;

fs.move(sourceFilePath, destinationFilePath)
  .then(() => {
    console.log(`File moved successfully!`);
  })
  .catch((error) => {
    console.error(`Error moving file:`, error);
  });