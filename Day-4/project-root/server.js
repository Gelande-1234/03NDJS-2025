
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import connectDB from "./db.js"; 

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
});


app.use("/auth", authRoutes);
app.use("/users", userRoutes);


const PORT = process.env.PORT || 3000;

connectDB(); 

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


