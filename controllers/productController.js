const User = require("../models/user")
const Product = require("../models/product")


// Login Route

const getlogin = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ success: false });
    }
  };
  
  // Signup Route

  const getSignup = async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }
      const newUser = new User({ email, password });
      await newUser.save();
      res.status(201).json({ success: true });
    } catch (err) {
      res.status(500).json({ message: 'Error creating user' });
    }
  };
  
  // Products Route

  const getProducts =  async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error fetching products' });
    }
  };

  module.exports = {getlogin,getSignup,getProducts}