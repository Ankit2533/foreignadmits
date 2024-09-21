import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

// Extending the global object to include the mongoose property
declare global {
  var mongoose: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Mongoose> | null;
  };
}

// Check if the global object already has mongoose cached, otherwise initialize it
let cached = global.mongoose || { conn: null, promise: null };

if (!cached) {
  cached = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => mongoose);
  }

  //cached.conn = await cached.promise;
  global.mongoose = cached; // Cache the connection globally
  return cached.conn;
}

export default dbConnect;
