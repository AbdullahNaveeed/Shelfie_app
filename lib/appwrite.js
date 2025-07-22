import { Client, Account, Avatars } from "react-native-appwrite";

export const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1") 
  .setProject("687f2d2c001097befba6");             

export const account = new Account(client);
export const avatars = new Avatars(client);
