const express = require("express");
const router = express.Router();

const { getPage, login, homePage, storedData, clearData, logout, searchData }  = require("../controller/userController");

// Routes-------------
router.get("/",getPage);
router.post("/login",login);
router.get("/home",homePage);
router.post("/submit",storedData);
router.post("/search",searchData);
router.get("/clear",clearData);
router.get("/logout",logout);

module.exports=router;