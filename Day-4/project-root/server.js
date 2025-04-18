import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";  // <-- Ajoute cette ligne
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";

dotenv.config();  // <-- Ajoute cette ligne pour charger les variables d'environnement

const app = express();
app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.send("API is running");
});

// Routes pour l'authentification et les utilisateurs
app.use("/", authRoutes);
app.use("/", userRoutes);

// Connexion à MongoDB
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/monapp";  // Utilise la variable d'environnement MONGO_URI
const PORT = process.env.PORT || 3000;  // Utilise la variable d'environnement PORT si définie

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connexion à MongoDB réussie");
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("Erreur MongoDB :", err.message);
  });


