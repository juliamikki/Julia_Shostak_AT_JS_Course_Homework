const fs = require(`fs-extra`);
const path = require(`path`);

const root = "./";

fs.readdir(root)
    .then(items => {

        //filter only directories that start with "folder":
        const folders = items.filter(i => i.startsWith(`folder`));

        folders.forEach(folder => {
            const folderPath = path.join(root, folder);

            fs.remove(folderPath)
                .then(() => console.log(`Folder ${folderPath} deleted successfully!`))
                .catch(error => console.error(`Error creating folder:`, error))

        });
    })
    .catch(err => console.error(err));
