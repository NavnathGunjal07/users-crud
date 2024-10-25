import { Request, Response } from 'express';
import * as UserService from '../services/user.service';
import { validate } from '../middlerware/user.middleware';
import { createUserSchema, idSchema, updateUserSchema } from '../validations/user.schema';
import { authenticateJwt } from '../middlerware/auth.middleware';
import { IUser, IUserRes } from '../model/user.model';
import { isValidObjectId } from 'mongoose';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    authenticateJwt()
    const usersDb = await UserService.getUsers();
    const users:IUserRes[] = usersDb.map(user=>({
      name:user.name,
      email:user.email,
      age:user.age,
    }))
    res.json(users);
  } catch (error:any) {
    res.status(400).json({
      "error": error?.message ||"something went wrong"
    });
  }

};

export const getUser = async (req: Request, res: Response) => {
  try {
    authenticateJwt()
    if(!req.params.id){
      throw new Error("Id not found")
    }
    if(!isValidObjectId(req.params.id)){
      throw new Error("wrong user id passed")
    }
    const userDb = await UserService.getUserById(req.params.id);
    if(!userDb){
      throw new Error('User not found')
    }
    const user:IUserRes = {
      name:userDb.name,
      email:userDb.email,
      age:userDb.age,
    }
    res.json(user)
  } catch (error:any) {
    res.status(400).json({
      "error": error?.message ||"something went wrong"
    });
  }

};

export const createUser = async (req: Request, res: Response) => {
  try {
    authenticateJwt()
    validate(createUserSchema)
    const newUser = await UserService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error:any) {
    res.status(400).json({
      "error": error?.message ||"something went wrong"
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    authenticateJwt()
    if(!req.params.id){
      throw new Error("Id not found")
    }
    if(!isValidObjectId(req.params.id)){
      throw new Error("wrong user id passed")
    }
    validate(updateUserSchema)
    const updatedUser = await UserService.updateUser(req.params.id, req.body);
    updatedUser ? res.json(updatedUser) : res.status(404).json({ message: 'User not found' });
  } catch (error:any) {
    res.status(400).json({
      "error": error?.message ||"something went wrong"
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    authenticateJwt()
    if(!req.params.id){
      throw new Error("Id not found")
    }
    if(!isValidObjectId(req.params.id)){
      throw new Error("wrong user id passed")
    }
    validate(idSchema)
    const deletedUser = await UserService.deleteUser(req.params.id);
    deletedUser ? res.json(deletedUser) : res.status(404).json({ message: 'User not found' });
  } catch (error:any) {
    res.status(400).json({
      "error": error?.message ||"something went wrong"
    });
  }
};
