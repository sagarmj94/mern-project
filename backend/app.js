const fs = require("fs");

const userName = "sagar";
console.log("userName", userName);

fs.writeFile("user-data.txt", "Name: " + userName, (err) => {
  if (err) {
    console.log(err);
  }
  //   console.log("WROTE FILE");
});
