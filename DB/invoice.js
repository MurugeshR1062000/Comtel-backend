const mongoose = require('mongoose');

const invoice = new mongoose.Schema({
    Clientname:{
        type:String
    },
    invoicedate:{
        type:String
    },
    invoiceamount:{
        type:String
    },
    paymentstatus:{
        type:String
    }
});

module.exports = User = mongoose.model('invoice', invoice);