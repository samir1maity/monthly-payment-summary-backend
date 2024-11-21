import { Router } from 'express'
import { paymentModel } from '../schema/payment.schema'

paymentRouter = Router()

paymentRouter.get('/monthly-summery', async (req, res) => {
    console.log('reached code')

    const { userId, startDate, endDate } = req.body

    const data = paymentModel.aggregate([
        { $match: { status: paid } },
        { $group: { _id: userId, totalAmount: { $sum: $amount } } },
        { $sort: { totalAmount: -1 } },
    ])

    console.log('Total payments per user:', results);
    res.status(200).json({
        data
    })
})

export default paymentRouter