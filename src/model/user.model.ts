import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the IUser interface extending Mongoose Document
export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  password: string;
}

export interface IUserBody {
  name: string;
  email: string;
  age: number;
  password: string;
}

export interface IUserRes {
  name: string;
  email: string;
  age: number;
}

// Define the schema for the User model
const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  password: { type: String, required: true }
});

// Pre-save hook to hash the password before saving to the database
userSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password') || this.isNew) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Create the Mongoose User model
export const User = mongoose.model<IUser>('User', userSchema);

// Function to find a user by email
export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  return await User.findOne({ email });
};
