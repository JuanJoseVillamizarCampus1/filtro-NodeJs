import Camper from "../models/Camper.js";
import Level from "../models/Levels.js";
const postCamper = async(req,res)=>{
    const {nombre,tipoIdentificacion,NroIdentificacion,email,password,promedio,rol,level}=req.body
    const  camper = new Camper({nombre,tipoIdentificacion,NroIdentificacion,email,password,promedio,rol,level})
    const levels = await Level.findById({level})
   
    try {
        if (levels) {
            await camper.save()
            res.json({
            camper
        })
        }
    } catch (error) {
        console.log(error);
        res.json(error)
    }
   
} 



export default postCamper