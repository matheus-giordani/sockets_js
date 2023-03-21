import { listDocuments, registerDocument } from "./socket-front-index.js";
const documentList = document.getElementById("lista-documentos");
const formDocument = document.getElementById("form-adiciona-documento");
const inputDocument = document.getElementById("input-documento");

formDocument.addEventListener("submit", (SubmitEvent) => {
  const documentName = inputDocument.value;
  SubmitEvent.preventDefault();
  registerDocument(documentName);
  inputDocument.value = "";
});

function insertLinkDocument(name) {
  documentList.innerHTML += `
    <a href="documento.html?nome=${name}" class="list-group-item list-group-item-action" id="documento-${name}">
    ${name}
  </a>    
    `;
}

function removeLInkDocs(name) {
  console.log(name)
  const documentfinded = document.getElementById(`documento-${name}`);
  console.log(documentfinded instanceof Node)
  
  console.log(documentfinded);

  documentList.removeChild(documentfinded);
}
function docHasBeenCreated(){
  alert("documento já existe!")
}

export { insertLinkDocument, removeLInkDocs,docHasBeenCreated };
