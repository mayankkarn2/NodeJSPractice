const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");

// Callback Hell
// fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
//   if (err) return console.log(`File Reading Failed`);
//   superagent
//     .get(`https://dog.ceo/api/breed/${data}/images/random`)
//     .end((err, res) => {
//       if (err) return console.log(err.message);
//       console.log(res.body.message);
//       fs.writeFile("dog-img.txt", res.body.message, (err) => {
//         if (err) return console.log(err.message);
//         console.log("Random Dog image saved to file");
//       });
//     });
// });

//Introduction to Promises

console.log(`Start`);

// Creating our own Promise
const readFilePro = (file) => {
  // This creates a own promise when the file is read, it takes two arguements resolve for success case
  // i.e, the file is read successfullt and rejects if the file is not read successfully.
  return new Promise((resolve, rejects) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        rejects(`No file found`);
      }
      resolve(data);
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    superagent
      .get(`https://dog.ceo/api/breed/${data}/images/random`)
      .then((res) => {
        console.log(res.body.message);
        fs.writeFile("dog-img.txt", res.body.message, (err) => {
          if (err) return console.log(err.message);
          console.log("Random Dog image saved to file");
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  })
  .catch((err) => {
    console.log(err);
  });

console.log(`End`);
