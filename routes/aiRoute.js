const express=require("express");
const route=express.Router();
const analyze_resume=require("../controllers/aiController");
const upload=require("../middleware/uploadMiddleware")

route.post("/analyze-resume", upload.single("resume"),analyze_resume)


module.exports=route;