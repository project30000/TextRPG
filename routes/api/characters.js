
const router = require("express").Router();
const characterController = require("../../controllers/characterController");

// Matches with "/api/books"
router.route("/")
    .get(characterController.findAll)
    .post(characterController.create);


// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(characterController.findById)
    .put(characterController.update)
    .delete(characterController.remove);


router
    .route("/:id/:name/:killCount")
    .get(characterController.findByName);


module.exports = router;
