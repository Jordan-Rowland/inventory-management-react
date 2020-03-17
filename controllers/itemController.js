const Item = require("../models/Item");
require("dotenv").config();


exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.getItem = async (req, res) => {
  const itemId = req.params.id;
  const item = await Item.findById(itemId);
  res.json(item);
};

exports.addItem = async (req, res) => {
  try {
    const newItem = new Item({
      name: req.body.name,
      description: req.body.description,
      category: req.body.category,
      price: req.body.price,
      inStock: req.body.inStock ? req.body.inStock : 25
    });
    const newItemResponse = await newItem.save();
    res.json(newItemResponse);
  } catch (err) {
    console.log(err);
    res.json({ success: false, error: err });
  }

};

exports.editItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    item.name = req.body.name || item.name;
    item.description = req.body.description || item.description;
    item.category = req.body.category || item.category;
    item.price = req.body.price || item.price;
    item.inStock = req.body.inStock || item.inStock;
    const newItemResponse = await item.save();
    res.json(newItemResponse);
  } catch(err) {
    console.log(err);
    res.json({ success: false, error: err });
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id)
    await item.remove()
    res.json({ success: true, message: "item successfully deleted" })
  } catch(err) {
    console.log(err)
    res.status(404).json({ success: false, error: err })
  }
};