const express = require("express");
const router = express.Router();
const medicinetypetroller = require("../controllers/medicinetype");

router.get("/", medicinetypetroller.getAllMedicinetype);
router.get("/:id", medicinetypetroller.getMedicinetypebyid);
router.post("/", medicinetypetroller.createMedicinetype);
router.put("/:id", medicinetypetroller.updateMedicinetype);
router.delete("/:id", medicinetypetroller.deleteMedicinetype);

module.exports = router;

