import User from "../models/UserModel.js";

// @desc    Fetch all users
// @route   GET /api/users
export const getUsers = async (req, res, next) => {
   try {
      const response = await User.find({});
      res.json(response);
   } catch (error) {
      next(error);
   }
};

// @desc    add user
// @route   POST /api/users
export const addUser = async (req, res, next) => {
   try {
      const request = req.body;
      const createdUser = await User.create(request);
      res.status(201).json(createdUser);
   } catch (error) {
      next(error);
   }
};

// @desc    delete user
// @route   DELETE /api/users/:id
export const deleteUser = async (req, res, next) => {
   try {
      const id = req.params.id;
      const deletedUser = await User.findByIdAndDelete(id);
      res.status(201).json(deletedUser);
   } catch (error) {
      next(error);
   }
};
