const db = require("../config/db");

exports.getAllStock=(req, res)=>{
    db.query("SELECT * FROM stock", (err, result) => {
      if (err) {
        console.log("ERROR region", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(result);
    });
}

exports.getStockById=(req, res)=>{
    db.query("SELECT * FROM stock WHERE id =?", [req.params.id], (err, result) => {
      if (err) {
        console.log("ERROR region", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(result);
    });
}

exports.addStock=(req, res)=>{
    db.query(
      "INSERT INTO stock SET(pharmacy_id, medicine_id, quantity) VALUES(?, ?, ?)",
      req.body,
      (err, result) => {
        if (err) {
          console.log("ERROR region", err);
          return req.status(500).json({ err: "interal server error" });
        }
        res.json(result);
      }
    );
}

exports.updateStock=(req, res)=>{
    db.query(
      "UPDATE stock SET quantity =? WHERE id =?",
      [req.body.quantity, req.params.id],
      (err, result) => {
        if (err) {
          console.log("ERROR region", err);
          return req.status(500).json({ err: "interal server error" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ err: "medicinetype not found" });
        }
        res.json(result);
      }
    );
}

exports.deleteStock=(req, res)=>{
    db.query(
      "DELETE FROM stock WHERE id =?",
      [req.params.id],
      (err, result) => {
        if (err) {
          console.log("ERROR region", err);
          return req.status(500).json({ err: "interal server error" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ err: "medicinetype not found" });
        }
        res.json(result);
      }
    );
}

