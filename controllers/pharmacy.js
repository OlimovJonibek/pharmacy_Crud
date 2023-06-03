const db = require("../config/db");

exports.getAllPharmacy =(req, res)=>{
    db.query("SELECT * FROM pharmacy", (err, result) => {
      if (err) {
        console.log("ERROR pharmacy", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(result);
    });
}

exports.getPharmacyById =(req, res)=>{
    db.query("SELECT * FROM pharmacy WHERE id =?", [req.params.id], (err, result) => {
      if (err) {
        console.log("ERROR pharmacy", err);
        return req.status(500).json({ err: "interal server error" });
      }
      res.json(result);
    });
}

exports.createPharmacy =(req, res)=>{
    db.query(
      "INSERT INTO pharmacy SET(name, email, phone, address, location,region_id, district_id) VALUES(?,?,?,?,?,?,?)",
      req.body,
      (err, result) => {
        if (err) {
          console.log("ERROR pharmacy", err);
          return req.status(500).json({ err: "interal server error" });
        }
        res.json(result);
      }
    );
}

exports.updatePharmacy =(req, res)=>{
    db.query(
      "UPDATE pharmacy SET name =?, email =?, phone =?, address =?, location =?, region_id =?, district_id =? WHERE id =?",
      [req.body.name, req.body.email, req.body.phone, req.body.address, req.body.location, req.body.region_id, req.body.district_id, req.params.id],
      (err, result) => {
        if (err) {
          console.log("ERROR pharmacy", err);
          return req.status(500).json({ err: "interal server error" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ err: "medicinetype not found" });
        }
        res.json(result);
      }
    );
}

exports.deletePharmacy =(req, res)=>{
    db.query(
      "DELETE FROM pharmacy WHERE id =?",
      [req.params.id],
      (err, result) => {
        if (err) {
          console.log("ERROR pharmacy", err);
          return req.status(500).json({ err: "interal server error" });
        }
        if (result.affectedRows === 0) {
          return res.status(404).json({ err: "medicinetype not found" });
        }
        res.json(result);
      }
    );
}


