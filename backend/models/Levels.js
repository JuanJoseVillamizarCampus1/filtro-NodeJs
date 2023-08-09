import { Schema,model } from "mongoose";

const LevelSchema = Schema({
    nombre:{
        type:String,
        required:[true,'El nombre es necesario']
    },
    ruta:{
        type:Schema.Types.ObjectId,
        ref: 'Ruta',
        required: true   
    }

})
const Level = model('levels',LevelSchema)

export default Level