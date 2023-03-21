import { MongoClient } from "mongodb";

const password = process.env.PASSWORD_DB || "m13m25m04"
// Replace the uri string with your connection string.
const uri = `mongodb+srv://giordani:${password}@cluster0.sarz5mr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

let documentosCollection

try {
    await client.connect()
    const db = client.db("websockets")
    documentosCollection = db.collection("documentos")
    console.log("banco conectado com sucesso")
} catch (error) {
    console.log(error)
}

export {documentosCollection}