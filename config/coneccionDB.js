const mysql2=require('mysql2');
const dbInfo={
    host:"localhost",
    user:"root",
    database:"peliculas-db"
};

const dbConnection=mysql2.createConnection(dbInfo);

dbConnection.connect((error)=>{
    if(error){
        if(error.code ==='ER_BAD_DB_ERROR' ){
                    console.log("error con la coneccion con la DB: "+ error.sqlMessage)
                }else{
                    console.log(error)
                }
    }else{
        console.log("Coneccion con DB MySQL exitosa")
    }
});

module.exports=dbConnection;