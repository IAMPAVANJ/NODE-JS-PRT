const express = require("express")
const router = express.Router();
const {create,update,deleteUser,getUser,getOneUser} = require("../controller/controller")
//create
router.post("/POST/v1/events",create)
//update
router.put("/UPDATE/v1/events/:id",update)
//delete
router.delete("/DELETE/v1/events/:id",deleteUser)
//get
router.get("/GET/v1/events/:id",getOneUser)
//get all
router.get("/GET/v1/events",getUser)

module.exports = router;