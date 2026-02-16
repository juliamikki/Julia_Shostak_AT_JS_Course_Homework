function findSquare(array) {
  return array.map((element) => ({
    name: element.name,
    square: element.width * element.height,
  }));
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

export { findSquare, getPromise };