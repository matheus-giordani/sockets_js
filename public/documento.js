import { documentSelect, emitDocumentDeleted, textEmmit } from "./document-socket-front.js";

const params = new URLSearchParams(window.location.search);
const documentName = params.get("nome");

const textEditor = document.getElementById("editor-texto");
const documentTitle = document.getElementById("titulo-documento");
const btnDelete = document.getElementById("excluir-documento");

documentTitle.textContent = documentName || "DOCUMENTO SEM TITULO";

documentSelect(documentName);

textEditor.addEventListener("keyup", () => {
  textEmmit({
    text: textEditor.value,
    documentName,
  });
});

function refreshText(text) {
    console.log("refresh")
  textEditor.value = text;
}

btnDelete.addEventListener("click",() =>{
  console.log("teste")
  emitDocumentDeleted(documentName)
})


function alertAndRedirect(name){
  if(documentName === name){
    alert(`Documento:${name} foi excluido com sucesso`)
    window.location.href = "/"

  }

  

}

export { refreshText,alertAndRedirect };
