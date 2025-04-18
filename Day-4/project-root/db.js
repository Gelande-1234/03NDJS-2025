
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/myapp";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("MongoDB connecté");
  } catch (err) {
    console.error(" Erreur de connexion à MongoDB :", err.message);
    process.exit(1); 
  }
};

export default connectDB;

