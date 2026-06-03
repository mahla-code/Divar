const {default:mongoose} = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.mongoDB_URL).then(()=>{
    console.log('connected to DB');
}).catch(error=>{
    console.log(error?.message ?? 'error connecting to DB');
    
})

