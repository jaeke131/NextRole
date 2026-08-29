<<<<<<< HEAD
import {
  createUser as insertUser,
  ensureUsersTable,
  findUserByEmail,
} from "../models/userSchema.js";
=======
// server/controllers/userController.js
import User from "../models/userSchema.js";
>>>>>>> origin/main

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, and password are required",
      });
    }

<<<<<<< HEAD
    await ensureUsersTable();

    const existingUser = await findUserByEmail(email);
=======
    const existingUser = await User.findOne({ email });
>>>>>>> origin/main

    if (existingUser) {
      return res.status(409).json({
        message: "A user with this email already exists",
      });
    }

<<<<<<< HEAD
    const user = await insertUser({ name, email, password });
=======
    const user = await User.create({
      name,
      email,
      password,
    });
>>>>>>> origin/main

    return res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error) {
<<<<<<< HEAD
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
=======
    return res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};
>>>>>>> origin/main
