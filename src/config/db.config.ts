import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1); // Exit with failure
  }

  mongoose.connection.on('disconnected', () => {
    console.warn('⚠️ MongoDB disconnected. Attempting to reconnect...');
    // connectDB(); // Reconnect on disconnection
  });

  mongoose.connection.on('error', (err) => {
    console.error('❌ MongoDB error:', err);
  });
};

export default connectDB;
