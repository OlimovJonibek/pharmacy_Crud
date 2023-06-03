const db = require("../config/db");

exports.getAllDistrict = (req, res) => {
  db.query("SELECT * FROM distirict", (err, results, fields) => {
    if (err) {
      console.log("ERROR distirict", err);
      return req.status(500).json({ err: "interal server error" });
    }
    res.json(results);
  });
};
exports.getDistirictById = (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT * FROM distirict WHERE id =?",
    [id],
    (err, results, fields) => {
      if (err) {
        console.log("ERROR distirict", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(results);
    }
  );
};

exports.createDistrict = (req, res) => {
    db.query(
      "INSERT INTO distirict SET(name, region_id) VALUES(?, ?)",
      req.body,
      (err, results, fields) => {
        if (err) {
          console.log("ERROR distirict", err);
          return req.status(500).json({ err: "interal server error" });
        }
        res.json(results);
      }
    );
};

exports.updateDistrict = (req, res) => {
    const id = req.params.id;
    db.query(
      "UPDATE distirict SET name =?, region_id =? WHERE id =?",
      [req.body.name, req.body.region_id, id],
      (err, results, fields) => {
        if (err) {
          console.log("ERROR distirict", err);
          return req.status(500).json({ err: "interal server error" });
        }
        if (results.affectedRows === 0) {
          return res.status(404).json({ err: "medicinetype not found" });
        }
        res.json(results);
      }
    );
};

exports.deleteDistrict = (req, res) => {
    const id = req.params.id;
    db.query(
      "DELETE FROM distirict WHERE id =?",
      [id],
      (err, results, fields) => {
        if (err) {
          console.log("ERROR distirict", err);
          return req.status(500).json({ err: "interal server error" });
        }
        if (results.affectedRows === 0) {
          return res.status(404).json({ err: "medicinetype not found" });
        }
        res.json(results);
      }
    );
};

