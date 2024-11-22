import express from "express"
import mongoose from 'mongoose'
import 'dotenv/config'
import paymentRouter from "./routes/payment.routes.js"
import { jobModel } from "./schema/job.schema.js"

const app = express()
app.use(express.json())

app.use('/api/v1/payment', paymentRouter)

/*
*
   req -> 'GET : /jobs/count-by-location?location=kolkata'
   res -> {
   "msg": "Jobs found",
    "data": [
        {
            "_id": kolkata,
            "count": 4
        }
    ]
   }
*
*/
app.get('/jobs/count-by-location', async (req, res) => {

    const { location } = req.query

    console.log('location', location)

    if (!location || typeof location !== 'string') {
        return res.status(400).json({
            msg: "invalid input"
        })
    }

    try {

        const data = await jobModel.aggregate([
            { $match: { location: { $regex: new RegExp(`^${location}$`, 'i') } } },
            { $group: { _id: '$location', count: { $sum: 1 } } }
        ])

        if (data.length === 0) {
            return res.status(404).json({
                msg: "No jobs found for the specified location"
            });
        }

        return res.status(200).json({
            msg: "Jobs count retrieved successfully",
            data: data
        });

    } catch (error) {
        console.error("Error in /jobs/count-by-location:", error);
        res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }

})

// create job 
app.post('/job/create', async (req, res) => {
    const { jobRole, jobDescription, location } = req.body;

    // Validate inputs
    if (!jobRole || !jobDescription || !location) {
        return res.status(400).json({
            msg: "All fields (jobRole, jobDescription, location) are required."
        });
    }

    // Check if inputs are valid strings
    if (typeof jobRole !== 'string' || typeof jobDescription !== 'string' || typeof location !== 'string') {
        return res.status(400).json({
            msg: "All inputs must be valid strings."
        });
    }

    try {
        // Create job entry
        const data = await jobModel.create({ jobRole, jobDescription, location });

        return res.status(201).json({
            msg: "Job successfully created",
            data
        });

    } catch (error) {
        console.error("Error in /job/create:", error); // Log error for debugging
        return res.status(500).json({
            msg: "Internal server error",
            error: error.message
        });
    }
});


// find all cities with their job post counts, 
app.get('/jobs/filter/count', async (req, res) => {

    const { filterDate, location } = req.query

    console.log(typeof filterDate)

    if (!filterDate || !location || typeof location !== 'string') {
        return res.status(400).json({
            msg: "invalid inputs"
        })
    }

    const date = new Date(filterDate)
    try {

        const data = await jobModel.aggregate([

            {
                $match: {
                    $and: [
                        {
                            createdAt: {
                                $gt: date
                            }
                        },
                        { location: { $regex: new RegExp(`^${location}$`, 'i') } }
                    ]
                }
            },
            {
                $group: { _id: '$location', count: { $sum: 1 } }
            }
        ])

        console.log('data', data)

        const response = data.length !== 0 ? data[0].count : data

        if (data.length === 0) {
            return res.status(404).json({
                msg: "No jobs found ",
            });
        }

        return res.status(200).json({
            msg: "successfully fetched",
            data
        })

    } catch (error) {
        console.log('error at create job api ->', error)
        res.status(500).json({
            msg: "server error"
        })
    }

})

/**
 * (GET) /jobs/location-and-date-wise-count?filterDate=2024-11-23 
 *  
*/
app.get('/jobs/location-and-date-wise-count', async (req, res) => {

    const { filterDate } = req.query

    if (!filterDate) {
        return res.status(400).send({
            msg: "Invalid date format.Please provide a valid date."
        })
    }

    const date = new Date(filterDate)

    try {
        const data = await jobModel.aggregate([
            { $match: { createdAt: { $gt: date } } },
            { $group: { _id: '$location', jobCount: { $sum: 1 } } },
        ])

        if (data.length === 0) {
            return res.status(404).json({
                msg: "no job found",
            })
        }
        res.status(200).json({
            msg: "successfully fetched",
            data
        })

    } catch (error) {
        console.log('error', error)
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

