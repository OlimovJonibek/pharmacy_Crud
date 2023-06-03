const express = require("express");
const router = express.Router();
const districitController = require("../controllers/distirict");



router.get("/", districitController.getAllDistrict);
router.get("/:id", districitController.getDistirictById);
router.post("/", districitController.createDistrict);
router.put("/:id", districitController.updateDistrict);
router.delete("/:id", districitController.deleteDistrict);




module.exports = router;


