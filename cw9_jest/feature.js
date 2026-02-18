function findSquare(array) {
  return array.map((element) => ({
    name: element.name,
    square: element.width * element.height,
  }));
}

function findUsersWithA(users) {
  return users.filter((user) => user.name.toLowerCase().includes("a"));
}

function getPromise(status, timeout) {
  return new Promise((resolve, reject) => {
    if (status === "reject") {
      setTimeout(() => {
        reject(status);
      }, timeout);
    }
    setTimeout(() => {
      resolve(status);
    }, timeout);
  });
}

export { findSquare, findUsersWithA, getPromise };
