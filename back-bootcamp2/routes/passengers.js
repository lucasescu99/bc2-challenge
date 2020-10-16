const router = require("express").Router();
const { Passenger, Package } = require("../models");
const cors = require("cors");

router.get("/", cors(), (req, res) => {
  Passenger.findAll().then(passengers => {
    res.send(passengers);
  });
});

router.get("/:id", cors(), (req, res) => {
  Passenger.findByPk(req.params.id, { include: Package })
    .then(passenger => {
      res.send(passenger);
    })
    .catch(err => {
      res.status(404).send();
    });
});

router.post("/", cors(), (req, res) => {
  Passenger.create(req.body)
    .then(() => res.status(201).send())
    .catch(() => res.status(400).send());
});

router.delete("/:id", cors(), (req, res) => {
  Passenger.findByPk(req.params.id)
    .then(passenger => {
      passenger
        .setPackages([])
        .then(() => res.status(200).send())
        .catch(() => res.status(404).send());
    })
    .catch(() => res.status(404).send());
});

module.exports = router;
