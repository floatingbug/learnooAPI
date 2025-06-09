const express = require("express");
const router = express.Router();
const authRouter = require("./authRouter");
const userRouter = require("./userRouter");
const resourceRouter = require("./resourceRouter");


router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/resource", resourceRouter);


module.exports = router;
