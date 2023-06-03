const express = require("express");
const router = express.Router();

const region = require("./region")
const medicines = require("./medicines")
const medicinetype = require("./medicinetype")
const distirict = require("./distirict");
const pharmacy = require("./pharmacy");
const stock = require("./stock")

router.use("/region", region);
router.use("/medicines", medicines);
router.use("/medicinetype", medicinetype);
router.use("/distirict", distirict);
router.use("/pharmacy", pharmacy);
router.use("/stock", stock);

module.exports = router;