const db = require("../config/db");

exports.getAllMedicines = (req, res)=>{
    db.query("SELECT * FROM medicines", (err, results) => {
      if (err) {
        console.log("ERROR medicines", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(results);
    });
}

exports.getMedicinesByID = (req, res)=>{
    const id = req.params.id;
    db.query("SELECT * FROM medicines WHERE id =?", [id], (err, results) => {
      if (err) {
        console.log("ERROR medicines", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(results);
    });
}

exports.createMedicine = (req, res)=>{
    const medicines = req.body;
    db.query(
      "INSERT INTO medicines(name, manufacturer, medicine_type_id, price, expiry_date, info) VALUES(?,?,?,?,?,?)",
      medicines,
      (err, results) => {
        if (err) {
          console.log("ERROR medicines", err);
          return req.status(500).json({ err: "interal server error" });
        }
        res.json(results);
      }
    );
}

exports.updateMedicine = (req, res)=>{
  const id = req.params.id;
  const medicines = req.body;
  db.query(
    "UPDATE medicines SET name =?, manufacturer =?, medicine_type_id =?, price =?, expiry_date =?, info =? WHERE id =?",
    [medicines.name, medicines.manufacturer, medicines.medicine_type_id, medicines.price, medicines.expiry_date, medicines.info, id],
    (err, results) => {
      if (err) {
        console.log("ERROR medicines", err);
        return req.status(500).json({ err: "interal server error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ err: "medicinetype not found" });
      }
      res.json(results);
    }
  );
}

exports.deleteMedicine = (req, res)=>{
  const id = req.params.id;
  db.query("DELETE FROM medicines WHERE id =?", [id], (err, results) => {
    if (err) {
      console.log("ERROR medicines", err);
      return req.status(500).json({ err: "interal server error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ err: "medicinetype not found" });
    }
    res.json(results);
  });
}


