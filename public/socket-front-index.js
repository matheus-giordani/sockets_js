import { docHasBeenCreated, insertLinkDocument, removeLInkDocs } from "./index.js"


const socket = io()
let listDocuments = []

socket.emit("get_document",(documentList) =>{
    documentList.forEach((document) => {

        insertLinkDocument(document.name)
        
    });
} )


function registerDocument(nameDocumentToAdd){
    socket.emit("add_doc",nameDocumentToAdd )

}


socket.on("get_document", (documents)=>{

    listDocuments = documents
})

socket.on("add_doc_interface", (nome)=>{
    insertLinkDocument(nome)
})

socket.on("delete_doc_sucess", (name)=>{
    console.log("doc excluido")
    removeLInkDocs(name)
} )

socket.on("doc_has_been_created", ()=>{
    console.log("teste")
    docHasBeenCreated()
})
export {registerDocument,listDocuments }