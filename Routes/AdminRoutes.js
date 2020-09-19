const express = require("express");
const Admin = require("../model/Admin");

const router = express.Router();

const {
    registerAdmin,
    loginAdmin,
} = require("../controller/Api Controllers/AdminAPiController");
router.post("/admin/register", registerAdmin);
router.post("/admin/login", loginAdmin);

module.exports = router;
