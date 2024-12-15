const express = require("express");
const mongoose = require("mongoose");
const ProductRouter = require('./routers/productRouter')
const cors = require('cors')
require('dotenv').config()
const bodyParser = require('body-parser');

const app = express();
app.use(express.json())  
app.use(cors())




app.use('/store',ProductRouter)

async function main() {
    await mongoose.connect(
      process.env.MONGO_URI
    );
  }
  
  main()
    .then(() => console.log("DB connected"))
    .catch((err) => console.log(err));
  
    
  
  app.listen(3000, () => {
    console.log("server running");
  });
  