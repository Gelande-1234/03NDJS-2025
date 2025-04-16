import express from "express";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/auth.js";

// connect db
connectDB();

//init express
const app = express();

//any middleware

//api route
app.use("/api/v1/", authRoutes);

const port = process.env.PORT || 5000; // .env PORT or HARD coded

app.listen(port, () => {
  console.log('server running on port ${port}');
});
