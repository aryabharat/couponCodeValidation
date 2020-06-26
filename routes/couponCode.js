const express = require('express');
const router = express.Router();
const moment = require('moment');
const Coupon = require('./../models/couponModel');


router.post('/validate', (req, res) => {
    Coupon.findOne({ coupon: req.body.coupon }, (err, data) => {
        if (err)
            return res.status(400).send(err)
        if (!data)
            return res.status(404).send("Invalid Coupon");
        if (moment(data.expDate).isBefore(Date.now()))
            return res.status(404).send("coupon expired")
        if (req.body.amount < data.minAmount)
            return res.status(404).send("Not aplicable on this amount");
        try {
            console.log(data.amountOff);
            let discount = (data.type === 'FLAT') ? data.amountOff :
                Math.min(((req.body.amount) * (data.percentageOff / 100)), data.percentageMaxAmount);
            return res.status(200).json({ discount })
        } catch (err) {
            return res.status(400).send(err)
        }
    })
})

router.post('/', (req, res) => {

    coupon = new Coupon({
        coupon: req.body.coupon,
        type: req.body.type,
        expDate: req.body.expDate,
        minAmount: req.body.minAmount,
        amountOff: req.body.amountOff,
        percentageOff: req.body.percentageOff,
        percentageMaxAmount: req.body.percentageMaxAmount
    })
    coupon.save()
        .then(result => res.status(200).send(result))
        .catch(err => res.status(400).send(err))
})
module.exports = router;