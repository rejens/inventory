import UserModel from "../models/UserModel.js";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// @desc    login user
// @route   POST /api/auth/login
export async function loginUser(req, res, next) {
   const { email, password } = req.body;

   try {
      //fetch user data form database
      const user = await UserModel.findOne({ email }).select("+password");

      // Check if user exists
      if (!user) {
         return res.status(400).json({ message: "Invalid credentials" });
      }
      // Check if password is correct
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(400).json({ message: "Invalid credentials" });
      }

      // Create and sign JWT token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

      res.json({ token, ...user });
   } catch (error) {
      console.error(error);
      next(error);
   }
}

// @desc    register user
// @route   POST /api/auth/register
export async function registerUser(req, res, next) {
   try {
      let data = req.body;
      data.password = await bcrypt.hash(data.password, 10);
      const users = await UserModel.create(data);

      const { email } = users;
      res.status(201).json({ email });
   } catch (error) {
      next(error);
   }
}

// @desc logout user
// @route GET /api/auth/logout
export async function logoutUser(req, res, next) {
   try {
      res.clearCookie("token");
      res.json({ message: "You have been logged out" });
   } catch (error) {
      next(error);
   }
}
