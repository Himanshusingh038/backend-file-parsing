var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var tradeSchema = new Schema({

  // name: { type: String},
  //
  // price:    { type: String},
  //
  // category: { type: String},
  //
  // description: { type: String },
  //
  // manufacturer: { type: String },

  Strategy_Trade:{type:String},
  uniqueID:{type:String},
  Quantity:{type:String},
    C4:{
        type:String
    },
    Symbol_of_contract:{
        type:String
    },
    C7:{
        type:String
    },
    soldOrBought:{
        type:String
    },
    C9:{
        type:String
    },
    C10:{
        type:String
    },
    C11:{
        type:String
    },
    C12:{
        type:String
    },
    C13:{
        type:String
    },
    C14:{
        type:String
    },
    C15:{
        type:String
    },
    UID:{
        type:String
    },
    C17:{
        type:String
    },
    C18:{
        type:String
    },
    C19:{
        type:String
    },
    C20:{
        type:String
    },
    C21:{
        type:String
    },
    TraderID:{
        type:String
    },
    RealPrice:{
        type:String
    },
    expectedPrice:{
        type:String
    },
    NoOfContracts:{
        type:String
    },
    C26:{
        type:String
    },
    C27:{
        type:String
    },
    C28:{
        type:String
    },
    C29:{
        type:String
    },
    C30:{
        type:String
    },
    C31:{
        type:String
    },
    C32:{
        type:String
    },
    C33:{
        type:String
    },
    C34:{
        type:String
    },
    C35:{
        type:String
    },
    C36:{
        type:String
    },
    C37:{
        type:String
    },
    C38:{
        type:String
    },
    C39:{
        type:String
    },
    C40:{
        type:String
    },
    C41:{
        type:String
    },
    C42:{
        type:String
    },
    C43:{
        type:String
    },
    C44:{
        type:String
    },
    C45:{
        type:String
    },
    C46:{
        type:String
    },
    C47:{
        type:String
    },
    C48:{
        type:String
    },
    C49:{
        type:String
    }

});

module.exports = mongoose.model('Trades', tradeSchema);
