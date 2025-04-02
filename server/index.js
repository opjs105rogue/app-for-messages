import express from "express";
import http from "http2";
import {Server} from "socket.io";
import cors from "cors";

const app = express();

app.listen(5000, () => {
    console.log("Test in console");
})