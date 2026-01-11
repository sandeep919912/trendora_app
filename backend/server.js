const express = require("express");
const connectDB = require("./src/db/db");
const router = require("./src/routes/routers");
const dotenv = require("dotenv");
const cors = require("cors");
const productsDb = require("./src/db/productDB");
const productRouter = require("./src/routes/productRouter");
const cartRouter = require("./src/routes/cartRoute");
const queryrouter = require("./src/routes/queryRoute");
const adminAuthRouter = require("./src/routes/adminAuthRoute");
const adminProtectedRouter = require("./src/routes/adminProtectedRoutes");
const Orderrouter = require("./src/routes/order");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();



app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: "https://trendoraapp.vercel.app/",
    methods: ["GET", "POST", "PUT", "DELETE" , "PATCH"],
    credentials: true,
  })
);


app.get("/", (req, res) => {
  res.send("server is running successfully");
});


app.use(router); //use router for server
app.use(productRouter)
app.use(cartRouter)
app.use(queryrouter)
app.use(adminAuthRouter)
app.use(adminProtectedRouter)
app.use(Orderrouter)



productsDb()
connectDB(); //connected to database

const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_URI;

app.listen(
  port,
  console.log(`server is running in port ${port}`),
  console.log(`database connection is in ${dbUrl}`)
);
