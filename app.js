import express from "express";
import cors from "cors";
import fs from "fs";
const port = process.env.PORT || 800;
var app = express();
app.use(cors());// Active CORS pour toutes les routes
const data = JSON.parse(fs.readFileSync('./data/harry_potter_characters.json', 'utf8'));
const tracks = [
{ id: 1, title: 'Track1', albumId: 1 },
{ id: 2, title: 'Track2', albumId: 3 },
{ id: 2, title: 'Track3', albumId: 2 }
];
app.get("/tracks/:id",(req,res)=>{
  res.send(tracks.find(t => t.id === Number(req.params.id)).title);
})
app.get("/harry_potter",(req,res)=>{
  res.send(data);
})
app.get("/log",(req,res)=>{
  res.send({
    "transfersToValidate":0,
    "interMagasins":5,
    "directEnCours":0,
    "sensitiveProductReportsToValidate":0
  })
})
app.get("/log2",(req,res)=>{
  res.send({
    "transfersToValidate":0,
    "interMagasins":0,
    "directEnCours":0,
    "sensitiveProductReportsToValidate":2
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
app.listen(port,(err)=>{
  if(err){
    console.log("Le serveur n'a pas pu démarrer");
  } else{
    console.log("Le serveur est en écoute sur le port " + port);
  }
});