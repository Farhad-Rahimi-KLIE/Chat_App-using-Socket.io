const socket = io("http://localhost:3000");
const form = document.getElementById("send-container");
const messageInp = document.getElementById("messageInp");
const MessageContainer = document.querySelector(".container");
let audio = new Audio("../Songs/ting.mp3")

const append = (message, position)=>{
    let MessageElement = document.createElement("div");
    MessageElement.innerText = message;MessageElement.classList.add("message");
    MessageElement.classList.add(position)
    MessageContainer.append(MessageElement);
    if (position == "left") {
        audio.play()
    }
}

let jan = prompt("Enter your name to join");
socket.emit("new-user-joined", jan)

socket.on("user-joined", (name)=>{
    append(`${name} : Joined the Chat`, 'right')
})

socket.on("recieve", (data)=>{
    append(`${data.name} : ${data.message}`, 'left')
})

socket.on("leave", (name)=>{
    append(`${name} : Left the Chat`, 'right')
})

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    const message = messageInp.value;
    append(`YOu : ${message}`, 'right');
    socket.emit("send-message",message);
    messageInp.value = ""
})