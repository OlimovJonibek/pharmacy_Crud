const express = require("express");
const router = express.Router();
const pharmacyController = require("../controllers/pharmacy");



router.get("/", pharmacyController.getAllPharmacy);
router.get("/:id", pharmacyController.getPharmacyById);
router.post("/", pharmacyController.createPharmacy);
router.put("/:id", pharmacyController.updatePharmacy);
router.delete("/:id", pharmacyController.deletePharmacy);

module.exports = router;

