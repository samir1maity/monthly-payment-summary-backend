import mongoose, { Schema, model, Types } from "mongoose";

const jobScehma = new Schema({
    jobRole: { type: String, required: true },
    jobDescription: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
})

export const jobModel = model('Job', jobScehma)