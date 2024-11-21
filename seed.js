import mongoose from "mongoose";
import { paymentModel } from "./schema/payment.schema.js";

// Sample Data
const seedData = [
    { "userId": "u123", "amount": 100, "date": new Date("2024-11-01T10:00:00Z"), "method": "UPI", "status": "paid" },
    { "userId": "u123", "amount": 50, "date": new Date("2024-11-15T14:00:00Z"), "method": "Card", "status": "paid" },
    { "userId": "u123", "amount": 75, "date": new Date("2024-11-20T10:00:00Z"), "method": "UPI", "status": "paid" },
    { "userId": "u456", "amount": 200, "date": new Date("2024-10-05T11:00:00Z"), "method": "UPI", "status": "paid" },
    { "userId": "u456", "amount": 150, "date": new Date("2024-11-10T12:00:00Z"), "method": "Card", "status": "paid" },
    { "userId": "u789", "amount": 300, "date": new Date("2024-11-18T09:00:00Z"), "method": "Netbanking", "status": "paid" },
    { "userId": "u789", "amount": 400, "date": new Date("2024-10-25T08:00:00Z"), "method": "Netbanking", "status": "paid" }
];

// Seed Function
const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://s879maity:nl7YunJWvg5aOknj@cluster0.qln5x.mongodb.net/test-aggregation', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // Clear Existing Data
        await paymentModel.deleteMany({});
        console.log('Cleared existing data');

        // Insert Seed Data
        await paymentModel.insertMany(seedData);
        console.log('Sample data inserted successfully');

        // Close Connection
        mongoose.connection.close();
        console.log('Connection closed');
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
};

// Execute Seed Function
seedDatabase();
