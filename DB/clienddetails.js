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

const clientdetails = new mongoose.Schema({
    // Companyname:{
    //     type:String
    // },
    // Companyaddress1:{
    //     type:String
    // },
    // Companyaddress2:{
    //     type:String
    // },
    // Companyaddress3:{
    //     type:String
    // },
    // Gst:{
    //     type:String
    // },
    // InvoiceDate:{
    //     type:String
    // },
    // InvoiceNo:{
    //     type:String
    // },
    // InvoiceGst:{
    //     type:String
    // },
    // DueDate:{
    //     type:String
    // },
    CompanyID:{
        type:String
    },
    FromDate:{
        type:String
    },
    ToDate:{
        type:String
    },
    // RendelDetails:[Rdetails]
    MonthlyRent:{
        type:Number
    },
    DocumentNo:{
        type:String
    },
    Decription:{
        type:String
    },
    SerialNo:{
        type:String
    },
    DueAmount:{
        type:Number
    },
    Amount:{
        type:Number
    },
   

   
});

module.exports = User = mongoose.model('clientdetails', clientdetails);