import { Schema, model } from "mongoose";

const UserSchema = new Schema({
   email: {
      type: String,
      required: true,
      // unique: true,
   },
   password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
   },
});

const UserModel = model("users", UserSchema);
export default UserModel;
