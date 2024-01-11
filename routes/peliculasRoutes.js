const express=require('express')
const route=express.Router();
const{mostrarPelis,cargarNuevaPelicula,eliminarPelicula,modificarPelicula}=require('../controllers/peliculasControllers')
const update=require('../cargaDeImagen/multer')



route.get("/todasLasPeliculas",mostrarPelis);

route.post("/cargarPelicula",update.single("imagen"),cargarNuevaPelicula);

route.put("/cargarPelicula/:id",modificarPelicula);

route.delete("/eliminarPelicula",eliminarPelicula);

module.exports=route;