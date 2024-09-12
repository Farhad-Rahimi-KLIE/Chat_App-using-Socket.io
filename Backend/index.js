// let http = require("http");
// let express = require("express");
// const {Server} = require("socket.io");

// let app = express()
// let server = http.createServer(app);
// const io = new Server(server);

// app.use(express.static("../Frontend"))

// app.get("/", (req, res)=>{
//     res.sendFile("index.html")
// })

// const users = {};

// io.on("connection", (socket)=>{
//     socket.on("new-user-joined", (name)=>{
//         users[socket.id] = name;
//         socket.broadcast.emit("user-joined", name);
//     })
//     socket.on("send-message", (message)=>{
//         socket.broadcast.emit("recieve", {message : message, name : users[socket.id]});
//     })
//     socket.on("disconnect", (message)=>{
//         socket.broadcast.emit("leave", users[socket.id]);
//         delete users[socket.id];
//     })
    
// })

// server.listen(3000, ()=> console.log("Server is Running on Port 3000"))





// import os Module
const path = require("path");
let jan =("C:\\temp\\myfile.html")
console.log(path.jan)