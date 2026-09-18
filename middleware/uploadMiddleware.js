const multer=require('multer');

const upload=multer({
    storage:multer.memoryStorage(),//  store the file into the ram memory 
    limits:{fileSize:5*1024*1024}, // use limit attribute to make sure the file size is 5mb or less
    fileFilter:(req,file,cb)=>{
        if(file.mimetype==='application/pdf'){
            cb(null,true);
        }
        else{
            cb( new Error("only pdf files are allowed !")  ,false)
        }
    }

})
module.exports=upload