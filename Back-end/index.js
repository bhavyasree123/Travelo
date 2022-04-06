const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoDb = require('./config/db');
const userRoute = require("./models/User");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/booked");
const { application } = require('express');

const app = express();

dotenv.config();
const  PORT  = process.env.PORT || 4000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
mongoDb();


dotenv.config();



app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.use('/', require('./routes/events'));
// app.use('/auth', require('./routes/auth'));
// app.use('/posts', require('./routes/posts'));

app.get('/',(req,res)=>{
  res.send("Welcome to the server");
});

app.listen(PORT, () => {
  console.log(`Backend server is running!  on port - ${PORT}`);
});
