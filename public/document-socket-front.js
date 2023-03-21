import { alertAndRedirect, refreshText } from "./documento.js";

const socket = io();

function documentSelect(documentName) {
  socket.emit("document_selection", documentName, (text) => {
    refreshText(text);
  });
}

function textEmmit(dados) {
  socket.emit("text_editor", dados);
}

socket.on("text_editor_client", (text) => {
  refreshText(text);
});

function emitDocumentDeleted(name) {
  socket.emit("delete_doc", name);
}
socket.on("delete_doc_sucess", (name) => {
  alertAndRedirect(name);
});



export { textEmmit, documentSelect, emitDocumentDeleted };
