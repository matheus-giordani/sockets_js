import io from "../server.js";
import { documentFind, refreshDocument,getAllDocuments, addDoc, deleteDoc } from "./documentosDb.js";

io.on("connection", (socket) => {
  socket.on("get_document", async (devolverDocumentos)=>{
    const documents = await getAllDocuments() 
    socket.emit("get_document", documents )

    devolverDocumentos(documents)
   
    
  })

  socket.on("add_doc",  async (nameDocumentToAdd)=>{
    const docNotCreated = (await documentFind(nameDocumentToAdd)) !== null
    if(docNotCreated){
      socket.emit("doc_has_been_created")
    }else{
      const res = await addDoc(nameDocumentToAdd)
  
      if(res.acknowledged){
        io.emit("add_doc_interface",nameDocumentToAdd )
      }

    }


  })

  socket.on("delete_doc",async  (documentNameToDelete) =>{
    const res = await deleteDoc(documentNameToDelete)
    if(res.deletedCount){
      io.emit("delete_doc_sucess", documentNameToDelete)
    }
  })

  socket.on("document_selection", async (documentName, refreshTextCallBack) => {
    // cria uma sala com o nome do documento aberto
    socket.join(documentName);

    const document = await documentFind(documentName);
    console.log(document);

    if (document) {
      refreshTextCallBack(document.text);
      // socket.emit("document_text", document.text)
    }
  });

  socket.on("text_editor", async ({ text, documentName }) => {
    // envia a informacao para todos conectados
    // socket.broadcast.emit("text_editor_client", textRecieve);
    const refresh = await refreshDocument(documentName, text);
    // console.log(refresh)
    if (refresh.modifiedCount) {
      socket.to(documentName).emit("text_editor_client", text);
    }
  });
});
