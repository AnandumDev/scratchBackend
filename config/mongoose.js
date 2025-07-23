const mongoose = require("mongoose")
const uri = "mongodb+srv://appumankunnummal:Frk6HNrMWeJ3aidM@cluster0.xyjnhtz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connection = async ()=>{
    try {
        const connect = await mongoose.connect(uri)
        console.log("database connected");
        
     
    
} catch (error) {
    console.log("database errorr",error);
    
    
}

}
module.exports = connection

 