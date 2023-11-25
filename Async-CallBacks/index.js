const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
const superagent = require("superagent");

// When a function is passed as an argument in the another function call, those functions are called
// call back functions.
console.log(`Start`);
//Callback Hell
// Will not be able to maintain the code in the long run
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.log(`File Reading Failed`);
  superagent
    .get(`https://dog.ceo/api/breed/${data}/images/random`)
    .end((err, res) => {
      if (err) return console.log(err.message);
      console.log(res.body.message);
      fs.writeFile("dog-img.txt", res.body.message, (err) => {
        if (err) return console.log(err.message);
        console.log("Random Dog image saved to file");
      });
    });
});
console.log(`End`);
