import { Schema,model } from "mongoose";

const CamperSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    tipoIdentificacion:{
        type:String,
        required:[true,'Ne necesito tipo de identificacion es necesario']
    },
    NroIdentificacion:{
         type:Number,
         rerequired:[true,'Es necesario el numero de identificacion']
    },
    email:{
        type:String,
        required:[true,'El email es requerido']
    },
    password:{
        type:String,
        required:[true,'La contraseña es requerida']
    },
    level:{
        type:Schema.Types.ObjectId,
        ref: 'level',
        required: true   
    },
    imagen:{
    type:String
    },
    rol:{
        type:String,
        require:[true,'El rol es requerido']
    },
    promedio:{
        type:Number,
        require:[true,'El promedio es requerido']
    }
})
const Camper = model('level',CamperSchema)

export default Camper