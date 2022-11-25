const mongoose = require('mongoose');

// const Rdetails = new mongoose.Schema({
//     SNo:{
//         type:String
//     },
//     DocumentNo:{
//         type:String
//     },
//     Decription:{
//         type:String
//     },
//     SerialNo:{
//         type:String
//     },
//     DueAmount:{
//         type:String
//     },
//     Amount:{
//         type:String
//     },
// })

const client = new mongoose.Schema({
    Companyname:{
        type:String
    },
    Companyaddress1:{
        type:String
    },
    Companyaddress2:{
        type:String
    },
    Companyaddress3:{
        type:String
    },
    Gst:{
        type:String
    },
    InvoiceDate:{
        type:String
    },
    InvoiceNo:{
        type:String
    },
    InvoiceGst:{
        type:String
    },
    DueDate:{
        type:String
    },
    counter:{
        type:Number
    },
    Month:{
        type:String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    // ToDate:{
    //     type:String
    // },
    // RendelDetails:[Rdetails]
    // SNo:{
    //     type:String
    // },
    // DocumentNo:{
    //     type:String
    // },
    // Decription:{
    //     type:String
    // },
    // SerialNo:{
    //     type:String
    // },
    // DueAmount:{
    //     type:Number
    // },
    // Amount:{
    //     type:Number
    // },
   

    // Contactperson:{
    //     type:String
    // },
    // Contactpersonname:{
    //     type:String
    // },
    // Active:{
    //     type:String
    // },
    // Amount:{
    //     type:String
    // },
    // EmailID:{
    //     type:String
    // }
});

module.exports = User = mongoose.model('client', client);