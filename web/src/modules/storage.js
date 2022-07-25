const { diskStorage } = require("multer");
const { extname } = require("path");

let destination = (folder) =>
    function(req, file, cb) {
        cb(null, "./uploads/" + folder);
    };

let filename = function(req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + extname(file.originalname));
};

const storage = function(folder) {
    return diskStorage({
        destination: destination(folder),
        filename: filename,
    });
};

module.exports = storage;