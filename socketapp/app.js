const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = 3001;
const index = require("./routes/index");

var logger = require('morgan');
const app = express();


const server = http.createServer(app);
app.use(logger("My custom logging :status :method :url :res[content-length] - and it took :response-time ms"))

app.use("/new", index);

server.listen(port, () => console.log(`Listening on port ${port}`));

const io = socketIo(server, { cors: { origin: "*" } });

let interval;


io.on("connection", (socket) => {
    console.log("New socket client connected");
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getApiAndEmit(socket), 2000);
    interval = setInterval(() => getApiAndEmitTwo(socket), 1500);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    })
});

const getApiAndEmit = (socket) => {
    var quotes = [
        ["Stay Hungry. Stay Foolish.", "Steve Jobs"],
        ["Good Artists Copy, Great Artists Steal.", "Pablo Picasso"],
        ["Argue with idiots, and you become an idiot.", "Paul Graham"],
        ["Be yourself; everyone else is already taken.", "Oscar Wilde"],
        ["Simplicity is the ultimate sophistication.", "Leonardo Da Vinci"],];

    const response = Math.floor(Math.random() * (5 - 0) + 0);
    socket.emit("GetQuote", quotes[response]);
}

const getApiAndEmitTwo = (socket) => {
    const response = Math.floor(Math.random() * (6 - 1) + 1);
    socket.emit("GetNumber", response);
}