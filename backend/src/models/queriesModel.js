const mongoose  = require( "mongoose")

const querySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    query: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true  
  }
);

const Query = mongoose.model("Query", querySchema);

module.exports = Query;
