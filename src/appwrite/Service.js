// import { Account, Client } from "appwrite";

// class Service {
//   client = new Client();
//   account = null;

//   constructor() {
//     this.client
//       .setEndpoint("https://cloud.appwrite.io/v1")
//       .setProject("66af079400044fbb44a2");
//   }
//   start() {
//     this.account = new Account(this.client);
//     const promise = this.account.getPrefs();
//     promise
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
// }

// const service = new Service();
// service.start();

import { Client, Account, Databases, ID } from "appwrite";

const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("66af079400044fbb44a2"); // Your project ID

const account = new Account(client);
const databases = new Databases(client);

const user = await account.create(
    ID.unique(),
    "romesh@gmail.com",
    "12341234",
    "Romesh Tripathi"
);

console.log(user);
