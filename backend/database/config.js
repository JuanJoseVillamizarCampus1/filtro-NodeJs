import mongoose from "mongoose";

const connectionDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectarse a la base de datos')
    }
   
}
export default connectionDB