const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongoDb = require('./config/db');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/booked");


const app = express();

dotenv.config();
const  PORT  = process.env.PORT || 4000;

app.use(express.json()); //express.json() is a built-in middleware function in Express. This method is used to parse the incoming requests with JSON payloads and is based upon the bodyparser.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoDb();
dotenv.config();


//Routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.use('/', require('./routes/events'));
// app.use('/auth', require('./routes/auth'));
// app.use('/posts', require('./routes/posts'));

app.get('/',(req,res)=>{
  res.send("Welcome to the G2G");
});

app.get('/1',(req,res)=>{
  res.send("Welcome to Food Floor");
});

app.listen(PORT, () => {
  console.log(`Backend server is running!  on port - ${PORT}`);
});
