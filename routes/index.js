var express = require('express');
var csv = require("fast-csv");
// var router = express.Router();
var fs = require('fs');

var router=require('./../app');
var mongoose = require('mongoose');

var Trade  = mongoose.model('Trades');

var csvfile = __dirname + "/../public/files/jaypee.csv";
var stream = fs.createReadStream(csvfile);
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Import CSV using NodeJS' });

}).get('/import', function(req, res, next) {

    var  trades  = []
    var csvStream = csv()
        .on("data", function(data){

         var item ={
              Strategy_Trade: data[0]   ,
              uniqueID: data[2],
              Quantity: data[3],
              C4:data[4],
              Symbol_of_contract:data[5],
              C7:data[6],
              soldOrBought:data[7],
              C9:data[8],
              C10:data[9],
              C11:data[10],
              C12:data[11],
              C13:data[12],
              C14:data[13],
              C15:data[14],
              UID:data[15],
              C17:data[16],
              C18:data[17],
              C19:data[18],
              C20:data[19],
              TraderID:data[21],
              RealPrice:data[22],
              expectedPrice:data[23],
              NoOfContracts:data[24],
              C26:data[25],
              C27:data[26],
              C28:data[27],
              C29:data[28],
              C30:data[29],
              C31:data[30],
              C32:data[31],
              C33:data[32],
              C34:data[33],
              C35:data[34],
              C36:data[35],
              C37:data[36],
              C38:data[37],
              C39:data[38],
              C40:data[39],
              C41:data[40],
              C42:data[41],
              C43:data[42],
              C44:data[43],
              C45:data[44],
              C46:data[45],
              C47:data[46],
              C48:data[47],
              C49:data[48],

         };
//Send trade via post request 
        //   item.save(function(error){
        //     console.log(item);
        //       if(error){
        //            throw error;
        //       }
        //   });
        axios
        .post('http://localhost:6000/data', {
            trade:item
        })
        .then(res => {
          console.log(`statusCode: ${res.status}`)
          console.log(res)
        })
        .catch(error => {
          console.error(error)
        })
    }).on("end", function(){

    });

    stream.pipe(csvStream);
    res.json({success : "Data imported successfully.", status : 200});

  }).get('/fetchdata', function(req, res, next) {

    Trade.find({}, function(err, docs) {
        if (!err){
            res.json({success : "Updated Successfully", status : 200, data: docs});
        } else {
            throw err;
        }
    });

}).post('/data',(req,res)=>{
    var item=new Trade(req.body.trade);
    item.save(function(error){
        console.log(item);
          if(error){
               throw error;
          }
      });
});
module.exports = router;
