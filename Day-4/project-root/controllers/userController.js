import users from "../models/userModel.js";

export const getMe = (req, res) => {
  const user = users.find((u) => u.id === req.user.id);
  if (!user) return res.status(404).json({ message: "Utilisateur non trouvé" });
  res.json({ email: user.email });
};

export const getAllUsers = (req, res) => {
  const allUsers = users.map(({ password, ...rest }) => rest);
  res.json(allUsers);
};

export const deleteUser = (req, res) => {
  const index = users.findIndex((u) => u.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: "Utilisateur introuvable" });

  users.splice(index, 1);
  res.json({ message: "User deleted" });
};
