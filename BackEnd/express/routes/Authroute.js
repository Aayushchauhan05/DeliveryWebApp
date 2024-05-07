const express = require("express");
const router = express.Router();
const { registeruser,login } = require("../controller/user");
const {cartitemset, send_cart_item} = require("../controller/Cart");
const authmid = require("../Middleware/authmid");

router.post("/register", registeruser);
router.post("/login",login)
router.post("/cart-item",authmid,cartitemset)
router.get("/showitem",authmid,send_cart_item)
module.exports = router;
