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
      resolve(`File Written`);
    });
  });
};

/*

Async Await - async/await is a powerful feature in JavaScript that simplifies asynchronous code and
makes it look and behave more like synchronous code. It's built on top of Promises and
provides a cleaner syntax for handling asynchronous operations.

To use async/await, you define a function as async. An async function always returns a Promise.
Await Keyword:

Inside an async function, you can use the await keyword before a Promise.
It pauses the execution of the function until the Promise is resolved and returns the resolved value.
You can use a try/catch block to handle errors for asynchronous operations.

You can put as many as awaits inside the async function.

*/
const getDocPic = async () => {
  const data = await readFilePro(`${__dirname}/dog.txt`);
  console.log(`Breed: ${data}`);
  try {
    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);
    const res1 = await writeFilePromise(res.body.message);
    console.log(res1);
  } catch (error) {
    console.log(`No Breed Found`);
  }
  return `Running`;
};

getDocPic().then((x) => {
  console.log(x);
  console.log(`End`);
});
