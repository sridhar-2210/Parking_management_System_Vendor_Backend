const express=require("express");
const router=express.Router();
const {gettask,createtask,updatetask,deletetask,getTaskById}=require("../controllers/taskcontrollers");
router.route("/").get(gettask).post(createtask);
router.route("/:id").get( getTaskById);


router.route("/:id").put(updatetask).delete(deletetask);

module.exports =router;