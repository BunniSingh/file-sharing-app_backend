const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const fileRoute = require('./route/file.route');

const app = express();
const port = 5500;

app.use(express.json());
app.use(cors());

app.use("/api/v1/file", fileRoute)
mongoose
    .connect('mongodb+srv://bantikumarsingh97:lJ2dl5u8N6gVw1hg@cluster0.t9ati.mongodb.net/file_sharing_app')
    .then(() => console.log("DB Connected Successfully"))
    .catch(err => console.log("Error while connection DB", err));



app.listen(port , () => console.log("Server started on port:", port));
    