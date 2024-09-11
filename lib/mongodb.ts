import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI: string = process.env.MONGODB_URI || '';

if(!MONGODB_URI || MONGODB_URI === '') {
    throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

interface MongooseCache {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
}

let cached: MongooseCache = (global as { mongoose?: MongooseCache }).mongoose!;

if(!cached) {
    cached = (global as { mongoose?: MongooseCache }).mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Mongoose> {
    if(cached.conn) {
        return cached.conn;
    }

    if(!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => {
            return mongooseInstance;
        });    
    }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;