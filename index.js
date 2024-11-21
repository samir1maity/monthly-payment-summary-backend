import express from "express"
import mongoose from 'mongoose'
import 'dotenv/config'
import paymentRouter from "./routes/payment.routes"

const app = express()
app.use(express.json())

app.use('/api/v1/payment', paymentRouter)

async function main() {

    await mongoose.connect(process.env.DATABASE_URL)
    console.log('database connected')

    app.listen('3000', () => {
        console.log('connected port 3000')
    })

}

main()

