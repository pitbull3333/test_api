const express=require("express");
const cors = require("cors");
const port=process.env.PORT || 800;
var app=express();
app.use(cors());// Active CORS pour toutes les routes
app.listen(port,(err)=>{
  if(err){
    console.log("Le serveur n'a pas pu démarrer");
  } else{
    console.log("Le serveur est en écoute sur le port " + port);
  }
});
app.get("/log",(req,res)=>{
  res.send({
    "transfersToValidate":0,
    "interMagasins":5,
    "directEnCours":0,
    "sensitiveProductReportsToValidate":0
  })
})
app.get("/dev",(req,res)=>{
  res.send([
    { id: 0, sousTitreKey: "common:transfert", valeur: 1 },
    { id: 1, sousTitreKey: "common:interMag", valeur: 2 },
    { id: 2, sousTitreKey: "common:directCours", valeur: 3 },
  ]);
})
app.get("/prod",(req,res)=>{
  res.send([
    {
      name:"François",
      age:35,
      taille:180,
    },
    {
      name:"Anne",
      age:50,
      taille:160,
    },
  ]);
})