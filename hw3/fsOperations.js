const fs = require(`fs-extra`);
const path = require("path");

//create folder:
function createFolder(order) {
    return fs.ensureDir(`folder${order}`)
        .then(() => console.log(`Folder \"folder${order}\" is created successfully!`))
        .catch(error => console.error(`Error creating folder:`, error));
}

//create file:
function createFile(order) {
    const folder = `folder${order}`;
    const file = `folder${order}/file.txt`;
    const fileContent = `Hi! It's my first file!`

    return fs.ensureDir(folder)
        .then(() => fs.writeFile(file, fileContent))
        .then(() => console.log(`Text file \"file.txt\" is created successfully in folder \"folder${order}\"!`))
        .catch(error => console.error(`Error creating file:`, error));
}

//move file:
function moveFile(from, to) {

    const sourceFilePath = `folder${from}/file.txt`;
    const destinationFilePath = `folder${to}/file.txt`;

    return fs.move(sourceFilePath, destinationFilePath)
        .then(() => console.log(`File is moved successfully from \"folder${from}\" to \"folder${to}\"!`))
        .catch(error => console.error(`Error moving file:`, error));
}

//copy file:
function copyFile(from, to) {

    const sourceFilePath = `folder${from}/file.txt`;
    const destinationFilePath = `folder${to}/file.txt`;

    return fs.copy(sourceFilePath, destinationFilePath)
        .then(() => console.log(`File is copied successfully from \"folder${from}\" to \"folder${to}\"!`))
        .catch(error => console.error(`Error copying file:`, error));
}

//delete file
function deleteFile(order) {
    const filePath = `./folder${order}/file.txt`;

    return fs.remove(filePath)
        .then(() => console.log(`File \"file.txt\" is deleted successfully from \"folder${order}\"!`))
        .catch(error => console.error(`Error deleting file:`, error));
}

//delete all folders
function deleteFolders() {
    const root = "./";

    return fs.readdir(root)
        .then(items => {
            const folders = items.filter(i => i.startsWith(`folder`));

            folders.forEach(folder => {
                const folderPath = path.join(root, folder);

                fs.remove(folderPath)
                    .then(() => console.log(`Folder \"${folderPath}\" is deleted successfully!`))
                    .catch(error => console.error(`Error creating folder:`, error))

            });
        })
        .catch(err => console.error(err));
}

async function run() {
    await createFolder(1);
    await createFile(1);
    await createFolder(2);
    await moveFile(1, 2);
    await createFolder(3);
    await copyFile(2, 3);
    await deleteFile(1);
    await deleteFile(2);
    await deleteFile(3);
    await deleteFolders();
}

run();