const dbConnection=require('../config/coneccionDB')

//traer todas las peliculas
const mostrarPelis=(req,res)=>{
  dbConnection.query("SELECT * FROM peliculas",(err,data)=>{
    if(data){
       res.status(200).send(data)
    }else{
        console.log(err)
    }
    
  });
  
};

//cargar pelicula
const cargarNuevaPelicula=(req,res)=>{
  const{titulo,director,genero,duracion}=req.body
  const imagen="http://localhost:4500/imagen"+ req.file;

    dbConnection.query("INSERT INTO peliculas(titulo, director, genero, duracion, imagen)VALUES(?,?,?,?,?)",[titulo, director, genero, duracion, imagen],(err,data)=>{
      if(data){
        res.status(201).json({"message":"pelicula cargada"}) 
      }else{
        res.status(500).json({"message":"error en carga"})
      }
    })
};


//editar pelicula

const modificarPelicula=(req,res)=>{
  const id=req.params.id;
  const{titulo,director,genero,duracion}=req.body;

    dbConnection.query("UPDATE peliculas SET titulo=?,director=?,genero=?,duracion=? WHERE id=?",[titulo,director,genero,duracion,id],(err,data)=>{
      if(data){
        res.status(201).json({"message":"pelicula modificada con exito"}) 
      }else{
        res.status(500).json({"message":"error en la modificacion"})
      }
    })
}

//eliminar pelicula

const eliminarPelicula=(req,res)=>{
  const {id}=req.body;
  dbConnection.query("DELETE FROM peliculas WHERE id=?",[id],(err,data)=>{
    if(data){
      res.status(200).json({"message":"Pelicula eliminada"})
    }else{
      res.status(500).json({"message":"error en server"})
    }
  })
    res.status(200).json({"message":"pelicula eliminada"})
}



module.exports={mostrarPelis,cargarNuevaPelicula,eliminarPelicula,modificarPelicula}