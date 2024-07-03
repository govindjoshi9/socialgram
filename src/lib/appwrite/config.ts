import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteconfig = {
    projectId: import.meta.env.VITE_APPWRITE_PROJECTID,    
    url: import.meta.env.VITE_APPWRITE_URL,    
    database: import.meta.env.VITE_APPWRITE_DATABASE_ID,    
    storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,    
    userCollactionId: import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,    
    postCollactionId: import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,    
    saveCollactionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,    
}

export const client = new Client();

client.setProject(appwriteconfig.projectId);
client.setEndpoint(appwriteconfig.url)

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
 