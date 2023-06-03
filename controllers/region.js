const db = require("../config/db");

exports.getAllRegions = (req, res) => {
  db.query("SELECT * FROM region", (err, results, fields) => {
    if (err) {
      console.log("ERROR region", err);
      return req.status(500).json({ err: "interal server error" });
    }
    res.json(results);
  });
};
exports.getRegionById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM region WHERE id =?", [id], (err, results, fields) => {
    if (err) {
      console.log("ERROR region", err);
      return req.status(500).json({ err: "interal server error" });
    }
    res.json(results);
  });
};
exports.createRegion = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO region (name) VALUES (?)",
    [name],
    (err, results, fields) => {
      if (err) {
        console.log("ERROR region", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(results);
    }
  );
};
exports.updateRegion = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  db.query(
    "UPDATE region SET name =? WHERE id =?",
    [name, id],
    (err, results, fields) => {
      if (err) {
        console.log("ERROR region", err);
        return req.status(500).json({ err: "interal server error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ err: "medicinetype not found" });
      }
      res.json(results);
    }
  );
};
exports.deleteRegion = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM region WHERE id =?", [id], (err, results, fields) => {
    if (err) {
      console.log("ERROR region", err);
      return req.status(500).json({ err: "interal server error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ err: "medicinetype not found" });
    }
    res.json(results);
  });
};
