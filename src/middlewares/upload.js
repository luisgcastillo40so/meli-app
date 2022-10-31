const multer = require("multer")

const storage = multer.diskStorage({
  destination: './temp',
  filename: function (req, file, callback) {
    callback(null, `${+ new Date()}${file.originalname}`);
  }
});

const upload = multer({ storage: storage })

module.exports = upload