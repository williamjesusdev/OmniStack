const multer = require("multer");
const path = require("path");

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads"),
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path
        .basename(file.originalname, ext)
        .normalize("NFD")
        .replace(/([\u0300-\u036f]|[^0-9a-zA-Z])/g, "")
        .toLowerCase();

      cb(null, `${name}-${Date.now()}${ext}`);
    }
  })
};
