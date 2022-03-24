const db = require('../models')

// Create main model
const Product = db.products
const Review = db.reviews

// 1. Create Product
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }

  const product = await Product.create(info)
  res.status(200).send(product)
  console.log(product);
}

// 2. Get All Products
const getAllProducts = async (req, res) => {
  let products = await Product.findAll({})
  res.status(200).send(products)
}

// 3. Get 1 Product
const getOneProduct = async (req, res) => {
  let product = await Product.findOne({ where: { id: req.params.id } })
  res.status(200).send(product)
}

// 4. Update Product
const updateProduct = async (req, res) => {
  let product = await Product.update(req.body, { where: { id: req.params.id } })
  res.status(200).send(product)
}

// 5. Delete Product
const deleteProduct = async (req, res) => {
  await Product.destroy({ where: { id: req.params.id } })
  res.status(200).send("Product is deleted")
}

// 6. Get Published Product
const getPublishedProducts = async (req, res) => {
  let products = await Product.findAll({ where: { published: true } })
  res.status(200).send(products)
}

module.exports = {
  addProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
  getPublishedProducts
}
