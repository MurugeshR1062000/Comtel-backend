const express = require('express');
const mongoose = require('mongoose');
const User = require('../DB/user');
const Client = require('../DB/client');
const Invoice = require('../DB/invoice');
const Clientdetails = require('../DB/clienddetails')
const route = express.Router();


route.post('/signUp', async(req,res)=>{
    const{firstName,lastname} = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastname = lastname;
    // let userModel= new User(user);
    // await userModel.save();
    // res.json(userModel);

    // if(userModel)


    let userModel = new User(user)
    await userModel.save(function (err, userStatus) {
        console.log("err",err)
        if (err) {
            
            res.json({ StatusCode:201,body:{status: false,message: "Data Not Saved"}  })
         
           
        } else {
            res.json({StatusCode:200,body:{
               
                status: true,data: userStatus, message: "Details created sucessfully" 
            } });
        }
    })

})

route.post('/Addclient', async(req,res)=>{
    const{
      Companyname,Companyaddress1,Companyaddress2,Companyaddress3,Gst,
      InvoiceDate,InvoiceNo,InvoiceGst,DueDate,counter,Month,createdDate
      // ,FromDate,ToDate,
      // SNo,DocumentNo,Decription,
      // SerialNo,DueAmount,Amount,
      // RendelDetails
      // Contactperson,Contactpersonname,Active,Amount,EmailID
    } = req.body;
    let client = {};
    
    client.Companyname = Companyname;
    client.Companyaddress1 = Companyaddress1;
    client.Companyaddress2 = Companyaddress2;
    client.Companyaddress3 = Companyaddress3;
    client.Gst = Gst;
    client.InvoiceDate = InvoiceDate;
    client.InvoiceNo = InvoiceNo;
    client.InvoiceGst = InvoiceGst;
    client.DueDate = DueDate;
    client.counter = counter;
    client.Month = Month;
    client.createdDate = createdDate;
    // client.SNo = SNo;
    // client.DocumentNo = DocumentNo;
    // client.Decription = Decription;
    // client.SerialNo = SerialNo;
    // client.DueAmount = DueAmount;
    // client.Amount = Amount;
    
    // client.Contactperson = Contactperson;
    // client.Contactpersonname = Contactpersonname;
    // client.Active = Active;
    // client.Amount = Amount;
    // client.EmailID = EmailID;


    // let userModel= new User(client);
    // await userModel.save();
    // res.json(userModel);
    let clientModel= new Client(client);
    // await clientModel.save();
    // res.json(clientModel);



    // let userModel = new User(client)
    await clientModel.save(function   (err, userStatus) {
        console.log("err",err)
        if (userStatus) {
          res.json({StatusCode:200,body:{
               
            status: true, data: userStatus, message: "Details created sucessfully"

        } });
          
           
        }  else if(err) {
          res.json({ StatusCode:201,body:{status: false,message: "client details is Not Saved"}  })
         
           
        }
    })
})

route.post('/ClientDetails', async(req,res)=>{
  const{
    // Companyname,Companyaddress1,Companyaddress2,Companyaddress3,Gst,
    // InvoiceDate,InvoiceNo,InvoiceGst,DueDate,
    CompanyID,
    FromDate,ToDate,
    MonthlyRent,DocumentNo,Decription,
    SerialNo,DueAmount,Amount,
    // RendelDetails
    // Contactperson,Contactpersonname,Active,Amount,EmailID
  } = req.body;
  let clientdetails = {};
  // clientdetails.Companyname = Companyname;
  // clientdetails.Companyaddress1 = Companyaddress1;
  // clientdetails.Companyaddress2 = Companyaddress2;
  // clientdetails.Companyaddress3 = Companyaddress3;
  // clientdetails.Gst = Gst;
  // clientdetails.InvoiceDate = InvoiceDate;
  // clientdetails.InvoiceNo = InvoiceNo;
  // clientdetails.InvoiceGst = InvoiceGst;
 
  clientdetails.CompanyID = CompanyID;
  clientdetails.FromDate = FromDate;
  clientdetails.ToDate = ToDate;
  // clientdetails.RendelDetails = RendelDetails;
  clientdetails.MonthlyRent = MonthlyRent;
  clientdetails.DocumentNo = DocumentNo;
  clientdetails.Decription = Decription;
  clientdetails.SerialNo = SerialNo;
  clientdetails.DueAmount = DueAmount;
  clientdetails.Amount = Amount;
  // clientdetails.Month = Month;
  // client.Contactperson = Contactperson;
  // client.Contactpersonname = Contactpersonname;
  // client.Active = Active;
  // client.Amount = Amount;
  // client.EmailID = EmailID;


  // let userModel= new User(client);
  // await userModel.save();
  // res.json(userModel);
  let clientdetailsModel= new Clientdetails(clientdetails);
  // await clientModel.save();
  // res.json(clientModel);



  // let userModel = new User(client)
  await clientdetailsModel.save(function (err, userStatus) {
      console.log("err",err)
      if (userStatus) {
          
          
          res.json({StatusCode:200,body:{
             
            status: true, data: userStatus, message: "Details created sucessfully"

        } });
      } else if(err) {
        res.json({ StatusCode:201,body:{status: false,message: "client details is Not Saved"}  })
       
      }
  })
})

route.post('/Addinvoice', async(req,res)=>{
    const{Clientname,invoicedate,invoiceamount,paymentstatus} = req.body;
    let invoice = {};
    invoice.Clientname = Clientname;
    invoice.invoicedate = invoicedate;
    invoice.invoiceamount = invoiceamount;
    invoice.paymentstatus = paymentstatus;
    
    // let userModel= new User(invoice);
    // await userModel.save();
    // res.json(userModel);
    let invoiceModel= new Invoice(invoice);
    // await clientModel.save();
    // res.json(clientModel);
    // let userModel = new User(client)


    await invoiceModel.save(function (err, userStatus) {
        console.log("err",err)
        if (err) {
            
            res.json({ StatusCode:201,body:{status: false,message: "invoice details is Not Saved"}  })
         
           
        } else {
            res.json({StatusCode:200,body:{
               
                status: true, data: userStatus, message: "Details created sucessfully"

            } });
        }
    })
})

route.get('/getClient', async(req,res)=>{
    try {
        const User = await Client.find();
    
        return res.status(200).json({
          success: true,
          count: User.length,
          data: User
        });
      } catch (err) {
        return res.status(500).json({
          success: false,
          error: 'Server Error'
        });
      }
})

route.get('/getClientDetails', async(req,res)=>{
  try {
      const User = await Clientdetails.find();
  
      return res.status(200).json({
        success: true,
        count: User.length,
        data: User
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        error: 'Server Error'
      });
    }
})

route.get('/getInvoice', async(req,res)=>{
    try {
        const User = await Invoice.find({invoicedate:{$gte:req.query.fromdate,$lt:req.query.todate}});
    
        return res.status(200).json({
          success: true,
          count: User.length,
          data: User
        });
      } catch (err) {
        console.log("error",err)
        return res.status(500).json({
    
          success: false,
          error: 'Server Error'
        });
      }
})

route.post('/editClient', async(req,res,next)=>{
    // console.log("inside the edit Validation")
  
  let {
    _id,
    Companyname,Companyaddress1,Companyaddress2,Companyaddress3,Gst,
    InvoiceDate,InvoiceNo,InvoiceGst,DueDate,counter,Month,createdDate
  
} = req.body

  var temp_dic = {}

  if (Companyname != '' && Companyname != null && Companyname != 'undefined') {
      temp_dic['Companyname'] = Companyname;

  }
  if (Companyaddress1 != '' && Companyaddress1 != null && Companyaddress1 != 'undefined') {
      temp_dic['Companyaddress1'] = Companyaddress1;

  }
  if (Companyaddress2 != '' && Companyaddress2 != null && Companyaddress2 != 'undefined') {
      temp_dic['Companyaddress2'] = Companyaddress2;

  }
  if (Companyaddress3 != '' && Companyaddress3 != null && Companyaddress3 != 'undefined') {
    temp_dic['Companyaddress3'] = Companyaddress3;


  }
  if (Gst != '' && Gst != null && Gst != 'undefined') {
    temp_dic['Gst'] = Gst;

}
if (InvoiceDate != '' && InvoiceDate != null && InvoiceDate != 'undefined') {
    temp_dic['InvoiceDate'] = InvoiceDate;

}
if (InvoiceNo != '' && InvoiceNo != null && InvoiceNo != 'undefined') {
    temp_dic['InvoiceNo'] = InvoiceNo;

}
if (InvoiceGst != '' && InvoiceGst != null && InvoiceGst != 'undefined') {
  temp_dic['InvoiceGst'] = InvoiceGst;

}
if (DueDate != '' && DueDate != null && DueDate != 'undefined') {
  temp_dic['DueDate'] = DueDate;

}
if (counter != '' && counter != null && counter != 'undefined') {
  temp_dic['counter'] = counter;

}
if (Month != '' && Month != null && Month != 'undefined') {
  temp_dic['Month'] = Month;

}
if (createdDate != '' && createdDate != null && createdDate != 'undefined') {
  temp_dic['createdDate'] = createdDate;

}

  const Viewprofile = await Client.findByIdAndUpdate({ _id: _id },
      {
          '$set': temp_dic
      },
      { new: true });


  if (Viewprofile) {
      var updateUserResult = {}
      updateUserResult['Companyname'] = Viewprofile['Companyname']
      updateUserResult['Companyaddress1'] = Viewprofile['Companyaddress1']
      updateUserResult['Companyaddress2'] = Viewprofile['Companyaddress2']
      updateUserResult['Companyaddress3'] = Viewprofile['Companyaddress3']
      updateUserResult['Gst'] = Viewprofile['Gst']
      updateUserResult['InvoiceDate'] = Viewprofile['InvoiceDate']
      updateUserResult['InvoiceNo'] = Viewprofile['InvoiceNo']
      updateUserResult['InvoiceGst'] = Viewprofile['InvoiceGst']
      updateUserResult['DueDate'] = Viewprofile['DueDate']
      updateUserResult['counter'] = Viewprofile['counter']
      updateUserResult['Month'] = Viewprofile['Month']
      updateUserResult['createdDate'] = Viewprofile['createdDate']
      res.json({ StatusCode:200,body:{status: true,message: " Updated Successfully"}  })
         

   
  } else {
      res.json({ StatusCode:201,body:{status: false,message: " something went wrong"}  })
         
  }
})

route.post('/editClientDetails', async(req,res,next)=>{
  // console.log("inside the edit Validation")

let {
  _id,
  CompanyID,
    FromDate,ToDate,
    MonthlyRent,DocumentNo,Decription,
    SerialNo,DueAmount,Amount,

} = req.body

var temp_dic = {}

if (CompanyID != '' && CompanyID != null && CompanyID != 'undefined') {
    temp_dic['CompanyID'] = CompanyID;

}
if (FromDate != '' && FromDate != null && FromDate != 'undefined') {
    temp_dic['FromDate'] = FromDate;

}
if (ToDate != '' && ToDate != null && ToDate != 'undefined') {
    temp_dic['ToDate'] = ToDate;

}
if (MonthlyRent != '' && MonthlyRent != null && MonthlyRent != 'undefined') {
  temp_dic['MonthlyRent'] = MonthlyRent;


}
if (DocumentNo != '' && DocumentNo != null && DocumentNo != 'undefined') {
  temp_dic['DocumentNo'] = DocumentNo;

}
if (Decription != '' && Decription != null && Decription != 'undefined') {
  temp_dic['Decription'] = Decription;

}
if (SerialNo != '' && SerialNo != null && SerialNo != 'undefined') {
  temp_dic['SerialNo'] = SerialNo;

}
if (DueAmount != '' && DueAmount != null && DueAmount != 'undefined') {
temp_dic['DueAmount'] = DueAmount;

}
if (Amount != '' && Amount != null && Amount != 'undefined') {
temp_dic['Amount'] = Amount;

}


const Viewprofile = await Clientdetails.findByIdAndUpdate({ _id: _id },
    {
        '$set': temp_dic
    },
    { new: true });


if (Viewprofile) {
    var updateUserResult = {}
    updateUserResult['CompanyID'] = Viewprofile['CompanyID']
    updateUserResult['FromDate'] = Viewprofile['FromDate']
    updateUserResult['ToDate'] = Viewprofile['ToDate']
    updateUserResult['MonthlyRent'] = Viewprofile['MonthlyRent']
    updateUserResult['DocumentNo'] = Viewprofile['DocumentNo']
    updateUserResult['Decription'] = Viewprofile['Decription']
    updateUserResult['SerialNo'] = Viewprofile['SerialNo']
    updateUserResult['DueAmount'] = Viewprofile['DueAmount']
    updateUserResult['Amount'] = Viewprofile['Amount']
   
    res.json({ StatusCode:200,body:{status: true,message: " Updated Successfully"}  })
       

 
} else {
    res.json({ StatusCode:201,body:{status: false,message: " something went wrong"}  })
       
}
})

route.post('/deleteclient', async(req,res)=>{
    const Viewprofile = await Client.findByIdAndUpdate({ _id: req.body._id })

  console.log("Viewprofile",Viewprofile)

  Client.findByIdAndDelete(req.body._id).then((post) => {
    console.log("post",post)

    if(post){
      res.json({ StatusCode:200,body:{status: true,message: "Deleted Successfully"}  })
    }
    else{
      res.json({ StatusCode:201,body:{status: true,message: "Something went wrong"}  })
    }
})


});

route.post('/deleteclientdetails', async(req,res)=>{
  const Viewprofile = await Clientdetails.findByIdAndUpdate({ _id: req.body._id })

console.log("Viewprofile",Viewprofile)

Clientdetails.findByIdAndDelete(req.body._id).then((post) => {
  console.log("post",post)

  if(post){
    res.json({ StatusCode:200,body:{status: true,message: "Deleted Successfully"}  })
  }
  else{
    res.json({ StatusCode:201,body:{status: true,message: "Something went wrong"}  })
  }
})


});
route.post('/editinvoice', async(req,res,next)=>{
    // console.log("inside the edit Validation")
  
  let {
    _id,
    Clientname,
    invoicedate,
    invoiceamount,
    paymentstatus

} = req.body

  var temp_dic = {}

  if (Clientname != '' && Clientname != null && Clientname != 'undefined') {
      temp_dic['Clientname'] = Clientname;

  }
  if (invoicedate != '' && invoicedate != null && invoicedate != 'undefined') {
      temp_dic['invoicedate'] = invoicedate;

  }
  if (invoiceamount != '' && invoiceamount != null && invoiceamount != 'undefined') {
      temp_dic['invoiceamount'] = invoiceamount;

  }
  if (paymentstatus != '' && paymentstatus != null && paymentstatus != 'undefined') {
    temp_dic['paymentstatus'] = paymentstatus;

}

  const Viewprofile = await Invoice.findByIdAndUpdate({ _id: _id },
      {
          '$set': temp_dic
      },
      { new: true });


  if (Viewprofile) {
      var updateUserResult = {}
      updateUserResult['Clientname'] = Viewprofile['Clientname']
      updateUserResult['invoicedate'] = Viewprofile['invoicedate']
      updateUserResult['invoiceamount'] = Viewprofile['invoiceamount']
      updateUserResult['paymentstatus'] = Viewprofile['paymentstatus']
      res.json({ StatusCode:200,body:{status: true,message: " Updated Successfully"}  })
         
 } else {
      res.json({ StatusCode:201,body:{status: false,message: " something went wrong"}  })
         
  }
})

route.post('/deleteinvoice', async(req,res)=>{
    const Viewprofile = await Invoice.findByIdAndUpdate({ _id: req.body._id })

  console.log("Viewprofile",Viewprofile)

  Invoice.findByIdAndDelete(req.body._id).then((post) => {
    if(post){
      res.json({ StatusCode:200,body:{status: true,message: "Deleted Successfully"}  })
    }
    else{
      res.json({ StatusCode:201,body:{status: true,message: "Something went wrong"}  })
    }
})


});


module.exports = route;