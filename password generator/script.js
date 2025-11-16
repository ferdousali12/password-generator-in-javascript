let chars = "ABCDEFHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let length = 12;
let password = "";

for (let i = 0; i < length; i++) {
  let randomINdex = Math.floor(Math.random() * chars.length);
  password = password + chars[randomINdex];
}
console.log(password);
