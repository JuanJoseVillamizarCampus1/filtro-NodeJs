import { Schema,model } from "mongoose";

const CentroSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    descripcion:{
        type:String,
        required:[true,'La descripcion es necesaria']
    },
    estado:{
        type:Boolean,
        default:true
    },
    ciudad:{
        type:String,
        required:[true,'La ciudad es requeridad']
    }

})
const Centro = model('centro',CentroSchema)

export default Centro