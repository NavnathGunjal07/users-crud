import mongoose from 'mongoose';

const isValidObjectId = (id: string) => {
  return mongoose.Types.ObjectId.isValid(id);
};