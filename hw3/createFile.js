const fs = require(`fs-extra`);

const order = 1;

const folderPath = `./folder${order}`;
const filePath = `./folder${order}/file.txt`;
const fileContent = `Hi! It's my first file!`

fs.ensureDir(folderPath)
    .then(() => {
        return fs.writeFile(filePath, fileContent)
    })
    .then(() => {
        console.log(`Text file \"file${order}.txt\" is created successfully`)
    })
    .catch((error) => {
        console.error(`Error creating file:`, error);
    });