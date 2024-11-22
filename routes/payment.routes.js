import { Router } from 'express'
import { paymentModel } from '../schema/payment.schema.js'

const paymentRouter = Router()

paymentRouter.get('/monthly-summery', async (req, res) => {
    console.log('reached code')

    // const { userId, startDate, endDate } = req.body
    const userId = "u123"

    const data = await paymentModel.aggregate([
        { $match: { status: 'paid' } },
        { $group: { _id: 'userId', totalAmount: { $sum: '$amount' } } },
        { $sort: { totalAmount: -1 } },
    ])

    console.log('Total payments per user:', data);
    res.status(200).json({
        data
    })
})

export default paymentRouter