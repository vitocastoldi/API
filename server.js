const express=require("express");
const server=express();
const port=4500;
const cors=require('cors');
const routes=require('./routes/peliculasRoutes')


require('./config/coneccionDB')

//middlewares
server.use(cors());

server.use(express.json());

server.use(express.urlencoded({extended:true}));

server.use("/imagen",express.static("./imagenes"));

//vincular los rutes
server.use('',routes)


server.listen(port,()=>{
    console.log("Server corrriendo en el puerto "+ port)
}); 