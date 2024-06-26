import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteconfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECTID,    
    url: import.meta.env.VITE_APPWRITE_URL,    
}

export const client = new Client();

client.setProject(appwriteconfig.projectId);
client.setEndpoint(appwriteconfig.url)

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
 