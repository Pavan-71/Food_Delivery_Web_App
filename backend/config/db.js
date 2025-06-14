import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://PavanSaketh:PavanSaketh123@cluster0.3dwfdln.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}


