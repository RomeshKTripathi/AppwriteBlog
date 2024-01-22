import { configuration as conf } from "../configuration/configuration";
import { Client, Account, ID } from "appwrite";

export class Authentication {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  /**
   * Creates New users
   * @param {email, password, name}
   * @returns Users Session
   */
  async createAccount({ email, password, name }) {
    try {
      console.log("AuthService :: createAccount");
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        // Login if user Account exist.
        console.log("User Account Created Successfully");
        console.log("Logging in with credentials");
        return this.appwriteLogin({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async appwriteLogin({ email, password }) {
    try {
      console.log("Trying Server Log in");
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return this.account.get();
    } catch (error) {
      console.log("Appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async appwriteLogout() {
    console.log("Trying Server Logout");
    try {
      await this.account.deleteSessions();
      console.log("Server Logout Successful");
    } catch (error) {
      console.log("AppwriteService :: logout :: error", error);
    }
  }
}

export const authentication = new Authentication();
export default Authentication;
