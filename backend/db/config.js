const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/e-commerce")
.then(()=>{
    console.log("mongo connected");
})
.catch((err)=>{
    console.log(err);
})

