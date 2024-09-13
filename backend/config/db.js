import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://sananawaz8176:<mjNSz2D6Zy3lakNq>@cluster0.qhlfx.mongodb.net//res-find').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.