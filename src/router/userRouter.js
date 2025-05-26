const router = require("express").Router();
const authUser = require("@middleware/authUser");
const userController = require("@controller/user");


router.get("/", userController.getUser);
router.post("/change-master-data", authUser, userController.changeMasterData);


module.exports = router;
