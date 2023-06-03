const db = require("../config/db");

exports.getAllMedicinetype = (req, res) => {
  db.query("select * from medicinetype", (err, result) => {
    if (err) {
      console.log("ERROR medicinetype", err);
      return req.status(500).json({ err: "interal server error" });
    }
    res.json(result);
  });
};

exports.getMedicinetypebyid = (req, res) => {
  const id = req.params.id;
  db.query("select * from medicinetype where id =?", [id], (err, result) => {
    if (err) {
      console.log("ERROR medicinetype", err);
      return req.status(500).json({ err: "interal server error" });
    }
    res.json(result);
  });
};

exports.createMedicinetype = (req, res) => {
  const { name } = req.body;
  db.query(
    "INSERT INTO medicinetype(name) VALUES (?)",
    [name],
    (err, results, fields) => {
      if (err) {
        console.log("ERROR medicinetype", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(results);
    }
  );
};

exports.updateMedicinetype = (req, res) => {
  const id = req.params.id;
  const { name } = req.body;
  db.query(
    "UPDATE medicinetype SET name =? WHERE id =?",
    [name, id],
    (err, results, fields) => {
      if (err) {
        console.log("ERROR medicinetype", err);
        return req.status(500).json({ err: "interal server error" });
      }
       if (results.affectedRows === 0) {
        return res.status(404).json({ err: "medicinetype not found" });
       }
      res.json(results);
    }
  );
};

exports.deleteMedicinetype = (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM medicinetype WHERE id =?",
    [id],
    (err, results, fields) => {
      if (err) {
        console.log("ERROR medicinetype", err);
        return req.status(500).json({ err: "interal server error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ err: "medicinetype not found" });
      }
      res.json(results);
    }
  );
};
