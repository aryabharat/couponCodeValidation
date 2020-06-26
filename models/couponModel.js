const mongoose = require('mongoose');


const Coupon = mongoose.Schema({
    coupon: {
        type: String,
        require: true,
        unique: true
    },
    expDate: {
        type: Date,
        require: true
    },
    type: {
        type: String,
        enum: ["FLAT", "PERCENTAGE"],
        require: true
    },
    amountOff: {
        type: Number,
        min: 0,
    },
    percentageOff: {
        type: Number,
        min: 0
    },
    percentageMaxAmount: {
        type: Number,
        min: 0
    },
    minAmount: {
        type: Number,
        require: true,
        min: 0
    },
}, { timestamps: true });

module.exports = mongoose.model('coupon', Coupon);


