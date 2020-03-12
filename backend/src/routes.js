const express = require("express");
const multer = require("multer");
const uploadConfig = require("./config/upload");

const routes = express.Router();
const upload = multer(uploadConfig);

const SpotController = require("./controllers/SpotController");
const SessionController = require("./controllers/SessionController");
const BookingController = require("./controllers/BookingController");
const ApprovalController = require("./controllers/ApprovalController");
const RejectionController = require("./controllers/RejectionController");
const DashboardController = require("./controllers/DashboardController");

routes.post("/sessions", SessionController.store);

routes.get("/dashboard", DashboardController.show);

routes.get("/spots", SpotController.index);
routes.post("/spots", upload.single("thumbnail"), SpotController.store);

routes.post("/spots/:spot_id/bookings", BookingController.store);

routes.get("/bookings", BookingController.index);

routes.post("/bookings/:booking_id/approvals", ApprovalController.store);
routes.post("/bookings/:booking_id/rejections", RejectionController.store);

module.exports = routes;
