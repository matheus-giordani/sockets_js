import express from "express";
import url from "url";
import path from "path";
import http from "http";
import {Server} from "socket.io";
import EventEmitter from "events";
import "./src/config/dbConnect.js"



const event = new EventEmitter()
const app = express();
const PORT = process.env.PORT || 8080;

const currentPath = url.fileURLToPath(import.meta.url);
const publicDir = path.join(currentPath, "../", "public");


app.use(express.static(publicDir));

const serverHttp = http.createServer(app);
app.use;
serverHttp.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

const io = new Server(serverHttp);


export default io


 