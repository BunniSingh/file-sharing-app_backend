const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
require('dotenv').config();

const fileRoute = require('./route/file.route');

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api/v1/file", fileRoute)
mongoose
    .connect(`${process.env.DB_CONNECTION_STRING}/file_sharing_app`)
    .then(() => console.log("DB Connected Successfully"))
    .catch(err => console.log("Error while connection DB", err));



app.listen(port , () => console.log("Server started on port:", port));
    