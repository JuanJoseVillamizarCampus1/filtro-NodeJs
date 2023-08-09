import { Schema,model } from "mongoose";

const RoleSchema = Schema({
    rol:{
        type:String,
        required:[true,'El Rol es necesario']
    }
})
const Role = model('role',RoleSchema)

export default Role