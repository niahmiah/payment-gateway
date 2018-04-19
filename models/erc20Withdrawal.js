var mongoose = require('mongoose');
var uuid = require('uuid/v4');

var erc20WithdrawalSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid
    },
    Amount: {
        type: String,
        required: true
    },
    Timestamp: Number,
    WithdrawalAddress: {
        type: String,
        required: true
    },
    WithdrawalSuccess: {
        type: Boolean,
        default: false
    },
    WithdrawalConfirmation: {
        type: Boolean,
        default: false
    },
    Extra: []
});


module.exports = mongoose.model('Erc20Withdrawal', erc20WithdrawalSchema);