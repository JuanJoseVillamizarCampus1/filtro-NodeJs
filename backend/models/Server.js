import  express  from "express";
import cors from "cors";
import connectionDB from '../database/config.js'
import routerCentro from '../routes/centro.routes.js'
import routerCampers from "../routes/camper.routes.js";
import routerRuta from '../routes/ruta.routes.js';
import routerLevel from '../routes/level.routes.js'
class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.connectDB()
        this.paths={
            centro:'/api/centros',
            ruta:'/api/rutas',
            levels:'/api/level',
            camper:'/api/campers'
        }
        this.middlewares()
        this.routes()
    }
    async connectDB(){
        await connectionDB()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json())
    }
    routes(){
        this.app.use(this.paths.centro,routerCentro)
        this.app.use(this.paths.camper,routerCampers)
        this.app.use(this.paths.ruta,routerRuta)
        this.app.use(this.paths.levels,routerLevel)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`El servidor esta corriendo en el puerto ${this.port}`);
        })
    }
}
export default Server