import express from "express"
import mongoose from 'mongoose'

const app = express()
app.use(express.json())

async function main() {

    await mongoose.connect('mongodb+srv://s879maity:nl7YunJWvg5aOknj@cluster0.qln5x.mongodb.net')

    app.listen('3000', () => {
        console.log('connected port 3000')
    })

}

main()

