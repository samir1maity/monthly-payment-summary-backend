import mongoose from "mongoose";
import { jobModel } from "./schema/job.schema.js";

const seedData = [
    {
        jobRole: "data Analyst",
        jobDescription: "Evaluates IT systems and processes for optimization.",
        location: "Delhi"
    },
    {
        jobRole: "Systems Engineer",
        jobDescription: "Evaluates IT systems and processes for optimization.",
        location: "Delhi"
    },
    {
        jobRole: "Systems Analyst",
        jobDescription: "Evaluates IT systems and processes for optimization.",
        location: "Delhi"
    },
    {
        jobRole: "AI Engineer",
        jobDescription: "Develops AI algorithms and integrates them into applications.",
        location: "Bengaluru"
    },
    {
        jobRole: "Technical Support Engineer",
        jobDescription: "Resolves technical issues and ensures customer satisfaction.",
        location: "Bengaluru"
    },
    {
        jobRole: "Financial Analyst",
        jobDescription: "Analyzes financial data to support business decisions.",
        location: "kolkata"
    },
    {
        jobRole: " Analyst",
        jobDescription: "Analyzes financial data to support business decisions.",
        location: "kolkata"
    },
    {
        jobRole: "SDE-II",
        jobDescription: "Analyzes financial data to support business decisions.",
        location: "kolkata"
    }

];

// Seed Function
const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect('mongodb+srv://s879maity:nl7YunJWvg5aOknj@cluster0.qln5x.mongodb.net/test-aggregation', { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        // Clear Existing Data
        await jobModel.deleteMany({});
        console.log('Cleared existing data');

        await jobModel.insertMany(seedData)
        console.log('data seeded')

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
