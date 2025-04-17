import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import users from "../models/userModel.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email et mot de passe requis" });
  if (users.find((u) => u.email === email)) return res.status(409).json({ message: "Email déjà utilisé" });

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now().toString(), email, password: hashedPassword };
  users.push(newUser);

  const { password: _, ...userWithoutPassword } = newUser;
  res.status(201).json(userWithoutPassword);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ message: "Identifiants invalides" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Identifiants invalides" });

  const token = jwt.sign({ id: user.id, email: user.email }, "secretKey", { expiresIn: "1h" });
  res.json({ token });
};
