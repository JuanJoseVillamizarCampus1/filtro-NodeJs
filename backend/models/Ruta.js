import { Schema,model } from "mongoose";

const RutaSchema = Schema({
    nombreruta:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    nombre:{
        type:Schema.Types.ObjectId,
        ref: 'Centro',
        required: true   
    }

})
const Ruta = model('ruta',RutaSchema)

export default Ruta