import Levels from "../models/Levels.js";
import Ruta from "../models/Ruta.js";
const postLevel = async(req,res)=>{
    const {nombre,ruta}=req.body
    const level = new Levels({nombre,ruta})
    const rutas = await Ruta.findById({ruta})
    try {
        if (rutas) {
            await level.save()
            res.json(level)
        }
    } catch (error) {
        console.log(error);
        res.json(error)
    }
   
}

export default postLevel