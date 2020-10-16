const router = require("express").Router();
const { Passenger } = require("../models");
const cors = require("cors");

router.post("/", cors(), (req, res) => {
  Passenger.findByPk(req.body.passengerId)
    .then(passenger => {
      passenger.countPackages().then(count => {
        if (count < 3) {
          passenger
            .createPackage(req.body)
            .then(() => res.status(201).send())
            .catch(() => res.status(400).send());
        } else res.status(400).send();
      });
    })
    .catch(() => res.status(400).send());
});

module.exports = router;
