const router = require("express").Router();
const authController = require("@controller/auth");


router.post("/sign-in", authController.signIn);


module.exports = router;
