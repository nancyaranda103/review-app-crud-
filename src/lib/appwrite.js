import { Client, Databases,Account, ID } from 'appwrite';

const DB_ID = "67a44e400000d369ee06" ;
const COLLECTION_ID = "67a44e6f0039ed7711d2" ;



const client = new Client();
client.setProject('67a44c55002eecf23ab6');

export const databases = new Databases (client);
export const account = new Account (client);
export {DB_ID, COLLECTION_ID, ID } ;