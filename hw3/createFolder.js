const fs = require(`fs-extra`);

const order = 3;

fs.ensureDir(`folder${order}`)
    .then(() => {
        console.log(`Folder \"folder${order}\" created successfully!`)
    })
    .catch((error) => {
        console.error(`Error creating folder:`, error);
    });