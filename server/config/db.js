import mongoose from 'mongoose';

async function connectDB() {
  try {
    if (!process.env.MONGODB_URI) {
      console.warn('MONGODB_URI is missing; starting API without MongoDB.');
      return false;
    }

    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB.');
    return true;
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    return false;
  }
}

export default connectDB;
