import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { findUserByEmail, IUser, IUserBody, User } from "../model/user.model";

export const loginUser = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  if (!user) throw new Error("Invalid credentials");

  const isMatch = bcrypt.compareSync(password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    { email: user.email },
    process.env.JWT_SECRET || "secrete",
    {
      expiresIn: "1h",
    }
  );

  return token;
};

export const signUpUser = async (user: IUserBody) => {
  try {
    const existingUser = await User.findOne({ email: user.email });
    if (existingUser) {
      throw new Error("User already exists");
    }

    // Create and save new user
    const newUser = new User({
      name: user.name,
      email: user.email,
      age: user.age,
      password: user.password,
    });
    await newUser.save();
  } catch (error) {
    throw error;
  }
};
