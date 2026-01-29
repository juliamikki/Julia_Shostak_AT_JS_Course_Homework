const fs = require(`fs-extra`);

const order = 3;
const filePath = `./folder${order}/file.txt`;

fs.remove(filePath)
    .then(() => {
        console.log(`File \"file.txt\" is deleted successfully from \"folder${order}\"!`);
    })
    .catch((error) => {
        console.error(`Error deleting file:`, error);
    });