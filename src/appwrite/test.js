import authService from "./auth.js";

let data = {
  name: "Tester",
  email: "tester@gmail.com",
  password: "Test@123",
};
console.log(authService.createAccount(data));
