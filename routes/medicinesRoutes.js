const express = require("express");
const router = express.Router();
const MedicinesController = require('../controllers/MedicinesController');

router.get("/", MedicinesController.GetAlldata);
router.post("/", MedicinesController.Addmedicine);
router.put("/:id", MedicinesController.Updatemedicine);
router.delete("/:id", MedicinesController.deleteMedicine);

module.exports = router;