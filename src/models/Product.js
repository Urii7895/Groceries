import { name } from "ejs";
import{model , Schema} from "mongoose";
const productSchema = new Schema({//defien la esyructura de la base de datos con Schema 
    bardcode:{
     require : true ,
     unique : true,
    type : String
    },
    description : String,
    brand : String,
    price : Number,
    cost : Number,
    expired_date : String,
    stock : String
},{
    versionKey:false,
    timestamps:true
    })


export default model('product',productSchema)