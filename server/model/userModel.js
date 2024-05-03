import mongoose from "mongoose";


let UserSchema = mongoose.Schema({
     fullname:{
        type:String,
        require:true
     },
     email:{
        type:String,
        unique: true,
        require:true
     },
     password:{
        type:String,
        require:true
     }

})

let User =mongoose.model('User',UserSchema)

export default User