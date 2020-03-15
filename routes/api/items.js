const express = require("express");
const router = express.Router();
const itemController = require("../../controllers/itemController");

router.get("/", itemController.getItems);
router.post("/", itemController.addItem);
router.post("/:id", itemController.editItem);
router.delete("/:id", itemController.deleteItem);

module.exports = router;