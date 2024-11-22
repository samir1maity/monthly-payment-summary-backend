import mongoose, { Schema, model } from "mongoose";

const citySchema = new Schema({
    name: { type: String, required: true },
    state: { type: String, required: true }
})

export const cityModel = model('City', citySchema)