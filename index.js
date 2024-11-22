import express from "express"
import mongoose from 'mongoose'
import 'dotenv/config'
import paymentRouter from "./routes/payment.routes.js"
import { jobModel } from "./schema/job.schema.js"

const app = express()
app.use(express.json())

app.use('/api/v1/payment', paymentRouter)

// find job count
app.get('/job/count', async (req, res) => {

    const { location } = req.query

    if (location !== "") {
        res.status(403).json({
            msg: "location input is not there"
        })
    }

    try {

        const data = await jobModel.aggregate([
            { $match: { location: 'kolkata' } },
            // { $group: { _id: null, count: { $sum: 1 } } },
        ])

        if (!data) {
            return res.status(404).json({
                msg: "not found",
            })
        }

        res.status(201).json({
            msg: "found",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            msg: "server error"
        })
    }

})


// create job 
app.post('/job/create', async (req, res) => {

    const { jobRole, jobDescription, location } = req.body

    if (jobRole !== "" || jobDescription !== "" || location !== "") {
        return res.status(403).json({
            msg: "somthing went wrong in inputs",
        })
    }
    try {
        const data = await jobModel.create({
            jobRole: jobRole,
            jobDescription: jobDescription,
            location: location
        })

        if (!data) {
            return res.status(404).json({
                msg: "not found",
            })
        }

        res.status(201).json({
            msg: "job is created",
            data: data
        })

    } catch (error) {
        res.status(500).json({
            msg: "server error"
        })
    }

})

async function main() {

    await mongoose.connect(process.env.DATABASE_URL)
    console.log('database connected')

    app.listen('3000', () => {
        console.log('connected port 3000')
    })

}

main()

