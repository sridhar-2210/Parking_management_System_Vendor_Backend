const express=require("express");
const connectDb=require("./config/dbConnection");
const cors = require('cors');
const rateLimit = require("express-rate-limit");


const dotenv=require("dotenv").config();
connectDb();
const app=express();
app.use(cors());
app.use(express.json({ limit: "10mb" })); // Increase to 10MB
app.use(express.urlencoded({ limit: "10mb", extended: true }));
app.use(rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 100
}));


const port= process.env.PORT||5000;
app.use(express.json());
app.use("/api/users",require("./routes/userRoutes"));
app.use("/api/tasks",require("./routes/taskRoutes"));
// app.use(errorHandler);
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
}
);
