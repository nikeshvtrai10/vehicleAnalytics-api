const express = require("express");

const router = new express.Router();

const loginController = require("../../../controllers/v1/admin/login");

router.post("/login", loginController.login);

module.exports = router;
