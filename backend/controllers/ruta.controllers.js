import Ruta from "../models/Ruta.js";
import Centro from'../models/Centro.js'

const postRuta = async(req,res)=>{
try {
    const centros = await Centro()
    const {nombre,centro}=req.body
    const centroExiste = await Centro.findOne({centro})
    const ruta = new Ruta({nombre,centro})
    if(centroExiste) {
        await ruta.save()
    res.json({
    ruta
    })
    }
    else{
        console.log(centros);
        console.log(centroExiste);
        console.log('Centro no encontrado');
        res.json(ruta)
    }
} catch (error) {
    
    console.log(error);
    res.status(400).json({
        msg:'registro no valido'
    })
}
}

export default postRuta