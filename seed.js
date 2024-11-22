import mongoose from "mongoose";
import { paymentModel } from "./schema/payment.schema.js";
import { cityModel } from "./schema/city.schema.js"
import { jobModel } from "./schema/job.schema.js";

// Sample Data
// const seedData = [
//     { "userId": "u123", "amount": 100, "date": new Date("2024-11-01T10:00:00Z"), "method": "UPI", "status": "paid" },
//     { "userId": "u123", "amount": 50, "date": new Date("2024-11-15T14:00:00Z"), "method": "Card", "status": "paid" },
//     { "userId": "u123", "amount": 75, "date": new Date("2024-11-20T10:00:00Z"), "method": "UPI", "status": "paid" },
//     { "userId": "u456", "amount": 200, "date": new Date("2024-10-05T11:00:00Z"), "method": "UPI", "status": "paid" },
//     { "userId": "u456", "amount": 150, "date": new Date("2024-11-10T12:00:00Z"), "method": "Card", "status": "paid" },
//     { "userId": "u789", "amount": 300, "date": new Date("2024-11-18T09:00:00Z"), "method": "Netbanking", "status": "paid" },
//     { "userId": "u789", "amount": 400, "date": new Date("2024-10-25T08:00:00Z"), "method": "Netbanking", "status": "paid" }
// ];

const seedData = [
    {
        jobRole: "Software Engineer",
        jobDescription: "Responsible for developing and maintaining web applications.",
        location: "Mumbai"
    },
    {
        jobRole: "Data Scientist",
        jobDescription: "Analyzes and interprets complex data to provide business insights.",
        location: "Bengaluru"
    },
    {
        jobRole: "Product Manager",
        jobDescription: "Oversees the development lifecycle of products and ensures customer satisfaction.",
        location: "Delhi"
    },
    {
        jobRole: "UX Designer",
        jobDescription: "Designs user-friendly interfaces and improves user experiences.",
        location: "Pune"
    },
    {
        jobRole: "Digital Marketer",
        jobDescription: "Creates and manages digital marketing campaigns across platforms.",
        location: "Hyderabad"
    },
    {
        jobRole: "DevOps Engineer",
        jobDescription: "Manages infrastructure and automates deployment pipelines.",
        location: "Chennai"
    },
    {
        jobRole: "Business Analyst",
        jobDescription: "Identifies business needs and recommends solutions.",
        location: "Ahmedabad"
    },
    {
        jobRole: "Sales Manager",
        jobDescription: "Leads sales teams to achieve revenue targets.",
        location: "Jaipur"
    },
    {
        jobRole: "Graphic Designer",
        jobDescription: "Creates visual concepts and designs for digital and print media.",
        location: "Kolkata"
    },
    {
        jobRole: "HR Manager",
        jobDescription: "Handles recruitment, employee relations, and company policies.",
        location: "Lucknow"
    },
    {
        jobRole: "Content Writer",
        jobDescription: "Writes and edits content for blogs, websites, and social media.",
        location: "Indore"
    },
    {
        jobRole: "IT Support Specialist",
        jobDescription: "Provides technical assistance and resolves system issues.",
        location: "Nagpur"
    },
    {
        jobRole: "Cloud Architect",
        jobDescription: "Designs and implements cloud infrastructure solutions.",
        location: "Thane"
    },
    {
        jobRole: "Operations Manager",
        jobDescription: "Oversees daily operations and ensures organizational efficiency.",
        location: "Bhopal"
    },
    {
        jobRole: "Financial Analyst",
        jobDescription: "Analyzes financial data to support business decisions.",
        location: "Patna"
    },
    {
        jobRole: "SEO Specialist",
        jobDescription: "Optimizes website content to improve search engine rankings.",
        location: "Vadodara"
    },
    {
        jobRole: "Mobile App Developer",
        jobDescription: "Builds and maintains mobile applications for various platforms.",
        location: "Varanasi"
    },
    {
        jobRole: "Backend Developer",
        jobDescription: "Develops server-side logic and APIs for web applications.",
        location: "Rajkot"
    },
    {
        jobRole: "Machine Learning Engineer",
        jobDescription: "Builds and deploys machine learning models.",
        location: "Surat"
    },
    {
        jobRole: "Technical Writer",
        jobDescription: "Writes technical documents and user manuals.",
        location: "Agra"
    },
    {
        jobRole: "Full Stack Developer",
        jobDescription: "Develops both frontend and backend of web applications.",
        location: "Vasai-Virar"
    },
    {
        jobRole: "QA Engineer",
        jobDescription: "Tests software to identify and fix bugs.",
        location: "Ludhiana"
    },
    {
        jobRole: "Database Administrator",
        jobDescription: "Manages and maintains database systems.",
        location: "Faridabad"
    },
    {
        jobRole: "Game Developer",
        jobDescription: "Designs and develops video games for various platforms.",
        location: "Kanpur"
    },
    {
        jobRole: "Cybersecurity Analyst",
        jobDescription: "Monitors and protects systems from cyber threats.",
        location: "Ghaziabad"
    },
    {
        jobRole: "Project Manager",
        jobDescription: "Plans and executes projects within budget and deadlines.",
        location: "Meerut"
    },
    {
        jobRole: "E-commerce Manager",
        jobDescription: "Manages online store operations and sales strategies.",
        location: "Srinagar"
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
        location: "Hyderabad"
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
