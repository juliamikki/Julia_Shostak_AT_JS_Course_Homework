import fs from "fs-extra";

//won't work because the functions run asynchronously:
fs.ensureDir("./dir");
fs.ensureFile("./dir/file.txt");
fs.ensureDir("./dir2");
fs.ensureDir("./dir3");
fs.move("./dir/file.txt", "./dir2/file.txt");
fs.copy("./dir2/file.txt", "./dir3/file.txt");
fs.remove("./dir2/file.txt");
fs.remove("./dir2");
fs.remove("./dir3");
fs.remove("./dir");

//callback functions (callback hell)
fs.ensureDir("./dir", () => {
  fs.ensureFile("./dir/file.txt", () => {
    fs.ensureDir("./dir2", () => {
      fs.ensureDir("./dir3", () => {
        fs.move("./dir/file.txt", "./dir2/file.txt", () => {
          fs.copy("./dir2/file.txt", "./dir3/file.txt", () => {
            fs.remove("./dir2/file.txt");
            fs.remove("./dir2");
            fs.remove("./dir3");
            fs.remove("./dir");
          });
        });
      });
    });
  });
});

//promises:
fs.ensureDir("./dir")
  .then(() => {
    fs.ensureFile("./dir/file.txt");
    return "Success";
  })
  .then((sucessStr) => {
    console.log(`Previous operation result: ${sucessStr}`);
    fs.ensureDir("./dir2");
  })
  .then(() => fs.ensureDir("./dir3"))
  .then(() => fs.move("./dir/file.txt", "./dir2/file.txt"))
  .then(() => fs.copy("./dir2/file.txt", "./dir3/file.txt"))
  .then(() => fs.remove("./dir2/file.txt"))
  .then(() => fs.remove("./dir2"))
  .then(() => fs.remove("./dir3"))
  .then(() => fs.remove("./dir"))
  .catch((err) => console.error(err));

//async function:
async function main() {
  try {
    console.log("Hello from async function!");
    await fs.ensureDir("./dir");
    await fs.ensureFile("./dir/file.txt");
    console.log("Success");
    await fs.ensureDir("./dir2");
    await fs.ensureDir("./dir3");
    await fs.move("./dir/file.txt", "./dir2/file.txt");
    await fs.copy("./dir2/file.txt", "./dir3/file.txt");
    await fs.remove("./dir2/file.txt");
    await fs.remove("./dir2");
    await fs.remove("./dir3");
    await fs.remove("./dir");
  } catch (err) {
    console.error(err);
  }
}

main();
console.log("This will be logged before the async operations are completed.");