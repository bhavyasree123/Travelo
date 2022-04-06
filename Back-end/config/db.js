const mongoose = require('mongoose');

const mongoConnect = async () => {
  const connection = await mongoose.connect(process.env.MONGO_URL, {
      dbName: 'TRAVELO',
      useNewUrlParser : true,
      useUnifiedTopology: true
  }).then(()=> {
      console.log("connnected to MongoDB Successfully")
  });
  //console.log('Connected to Travelo Database.');
};

module.exports = mongoConnect;
