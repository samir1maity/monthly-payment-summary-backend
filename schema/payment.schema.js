import mongoose, { Schema, model } from 'mongoose'

const paymentSchema = new Schema({
    userId: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    method: { type: String, required: true },
    status: { type: String, required: true, enum: ['paid', 'pending', 'failed'] }
})

export const paymentModel = model('Payment', paymentSchema)  