const express=require("express");
const app=express();
const cors=require("cors")
const port=5000;
const aiRoute =require("./routes/aiRoute")
app.use(express());
app.use(cors())
app.use('/api/ai',aiRoute);

app.get('/',((req,res)=>{
    res.send("hehehheheh")
}))



app.listen(port,(()=>{
    console.log(`server running peacfully at this port ${port}`)
}))