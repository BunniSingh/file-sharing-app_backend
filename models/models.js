const mongoose = require('mongoose');

const fileSchemaObj = {
    originalName: {
        type: String
    },
    modifiedName: {
        type: String
    },
    user: {
        type: String
    },
    size: {
        type: Number
    },
    path: {
        type: String
    },
}

const fileSchema = new mongoose.Schema(fileSchemaObj, {timestamps: true});

const FileModol = mongoose.model("files", fileSchema);

module.exports = FileModol;