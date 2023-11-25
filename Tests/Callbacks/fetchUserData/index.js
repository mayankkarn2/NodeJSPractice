// ChatGPT FetchUserData Question

console.log(`Start`);
const data = {
  "MKARAN":  "Mayank",
  "NIKGOLI": "Nikhitha"
};

const displayName = (Userid) => {
  console.log(`User name is: ${data[Userid]}`)
}

const getName = (Userid,nameDisplay) => {
  setTimeout(() => {
    console.log("After 3 secs");
    nameDisplay(Userid);
  }, 3000);
 
}

getName('MKARAN',displayName);
console.log(`End`)