const path = require("path");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

//middleware for video upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./server/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      //unique file name for each video
      uuidv4() + path.extname(file.originalname)
    );
  },
});

const uploader = multer({
  storage: storage,
  limits: { fileSize: 99000000 }, //99mb
  fileFilter: (req, file, cb) => {
    const fileTypes = /mp4|mkv/; //allowed file types
    const mimeType = fileTypes.test(file.mimetype); //check file type
    const extname = fileTypes.test(path.extname(file.originalname)); //check extension

    //check mime and extension
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Error: Videos Only!");
  },
});

module.exports = uploader;
