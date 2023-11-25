const fs = require("fs");
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
fs.readFile(`${__dirname}/dog.txt`, (err, data) => {
  if (err) return console.log(`File Reading Failed`);
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
});
console.log(`End`);
