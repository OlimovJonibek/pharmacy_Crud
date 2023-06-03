const express = require('express');

const router = express.Router();
const medicinesController = require("../controllers/medicines");

router.get('/', medicinesController.getAllMedicines);
router.get('/:id', medicinesController.getMedicinesByID);
router.post('/', medicinesController.createMedicine);
router.put('/:id', medicinesController.updateMedicine);
router.delete('/:id', medicinesController.deleteMedicine);


module.exports = router;
