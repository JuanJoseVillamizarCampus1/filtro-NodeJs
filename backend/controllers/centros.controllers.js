import Centro from "../models/Centro.js";

const postCentro= async(req,res)=>{
    try {
        const {nombre,descripcion,ciudad}=req.body
        const centro = new Centro({nombre,descripcion,ciudad})
        await centro.save()
        res.json({
        centro
        })
} catch (error) {
        console.log(error);
        res.status(400).json({
            msg:'error al post centro'
        })
    }
}
export default postCentro