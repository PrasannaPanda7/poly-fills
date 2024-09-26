function setUserName(username) {
  this.username = username;
}

function createUser(username, email, password) {
  console.log("this: ", this);
  setUserName.call(this, username);
  this.email = email;
  this.password = password;
}

const user = new createUser("ayush", "ayush@ayush", "ayush123");
console.log(user);
