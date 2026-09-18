const express=require("express");
const app=express();
const cors=require("cors")
const aiRoute =require("./routes/aiRoute")
require("dotenv").config()
const port=process.env.API_URL ;
app.use(express());
app.use(cors())
app.use('/api/ai',aiRoute);

app.get('/',((req,res)=>{
    res.send("hehehheheh")
}))



app.listen(port,(()=>{
    console.log(`server running peacfully at this port ${port}`)
}))