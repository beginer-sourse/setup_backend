import multer from "multer";

const storage = multer.diskStorage({
// cb is a callback function that takes two arguments: an error and the destination path

  destination: function (req, file, cb) {
    cb(null, './public/temp')
  },
  filename: function (req, file, cb) {
     
    cb(null, file.orginalname)
  }
})

const upload = multer({ storage, })