const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");

//Introduction to Promises

console.log(`Start`);

// Creating our own Promise to read the file
const readFilePro = (file) => {
  // This creates a own promise when the file is read, it takes two arguements resolve for success case
  // i.e, the file is read successfully and rejects if the file is not read successfully.
  return new Promise((resolve, rejects) => {
    fs.readFile(file, (err, data) => {
      if (err) {
        rejects(`No file found`);
      }
      resolve(data);
    });
  });
};

//Promise to for File Writing

const writeFilePromise = (file) => {
  return new Promise((resolve, rejects) => {
    fs.writeFile("dog-img.txt", file, (err, data) => {
      if (err) {
        rejects(`Error while writing in the file`);
      }
      resolve(data);
    });
  });
};

readFilePro(`${__dirname}/dog.txt`)
  // A Promises ("then and catch") usually ensures that it will return something upon it's execution, for example, when the api called
  // is successfully made to the Dog CEO end point, "then" part will be written, else "catch" will be run.
  .then((data) => {
    superagent
      .get(`https://dog.ceo/api/breed/${data}/images/random`)
      .then((res) => {
        writeFilePromise(res.body.message)
          .then(() => {
            console.log(`Data Written`);
          })
          .catch((err) => {
            console.log(err);
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
