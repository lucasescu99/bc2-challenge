const router = require("express").Router();
const passengersRoutes = require("./passengers");
const packagesRoutes = require("./packages");

router.use("/passengers", passengersRoutes);
router.use("/packages", packagesRoutes);

module.exports = router;
