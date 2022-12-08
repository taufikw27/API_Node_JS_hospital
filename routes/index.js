const express = require("express");
const router = express.Router();
const medicines = require("./medicinesRoutes")

router.use("/medicines", medicines);
module.exports=router;