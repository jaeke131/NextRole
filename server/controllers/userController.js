import {
  createUser as insertUser,
  ensureUsersTable,
  findUserByEmail,
} from "../models/userSchema.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required",
      });
    }

    await ensureUsersTable();

    const existingUser = await findUserByEmail(email);

    if (existingUser) {
      return res.status(409).json({
        message: "A user with this email already exists",
      });
    }

    const user = await insertUser({ name, email, password });

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "A user with this email already exists",
      });
    }

    console.error("Create user error:", error);

    return res.status(500).json({
      message: "Failed to create user",
    });
  }
};
