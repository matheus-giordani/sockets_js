import { documentosCollection } from "./config/dbConnect.js";

function documentFind(name) {
  const documentObj = documentosCollection.findOne(
    // {name:name} quando a chave tem o mesmo nome que o campo pode ser usada a sintaxe abaixo
    { name }
  );
  return documentObj;
}

async function getAllDocuments(){
    return documentosCollection.find().toArray()
    
}

function refreshDocument(name, text) {
  const refresh = documentosCollection.updateOne(
    { name },
    {
      $set: {
        text,
      },
    }
  );
  return refresh;
}

function addDoc(docToAdd){
  return documentosCollection.insertOne({
    name: docToAdd,
    text:""
  })

}

function deleteDoc(name){
  return documentosCollection.deleteOne({
    name: name
  })

}



export { documentFind, refreshDocument, getAllDocuments, addDoc,deleteDoc  };
