import { Request, Response } from "express";
import { loginUser, signUpUser } from "../services/auth.service";
import { validate } from "../middlerware/user.middleware";
import { loginUserSchema, signUpUserSchema } from "../validations/user.schema";
import { IUser, IUserBody } from "../model/user.model";

export const login = async (req: Request, res: Response) => {
  try {
    validate(loginUserSchema);
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    try {
      const token = await loginUser(email, password);
      res.json({ token });
    } catch (err: any) {
      throw new Error(err)
    }
  } catch (error:any) {
    res.status(400).json({ message: error?.message || "something went wrong" });
  }
};

export const signup = async (req: Request, res: Response) => {
  try {
    validate(signUpUserSchema);
    const { name, email, age, password } = req.body;

    const user: IUserBody = {
      name,
      email,
      age,
      password,
    };
    if (!name || !email || !age || !password) {
      throw new Error("All fields are required");
    }
    await signUpUser(user);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error:any) {
    res.status(400).json({ message: error?.message || "something went wrong" });
  }
};
