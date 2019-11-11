const router = require("express").Router();
const characterRoutes = require("./characters");

// Book routes
router.use("/characters", characterRoutes);

module.exports = router;
// "/api/students"