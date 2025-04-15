import express from "express";
import http from "http2";
import {Server} from "socket.io";
import cors from "cors";
import { route } from "./route.js";

const app = express();

app.use(route)

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

app.listen(5000, () => {
    console.log("Test in console");
})