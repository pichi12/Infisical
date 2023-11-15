const express = require("express");
const InfisicalClient = require("infisical-node");
const app = express();
const PORT = 3000;

const client = new InfisicalClient({
    token: "token de app generado en infisical"
});
// Suponinedo que la variable a consultar se llame SECRETOPRUEBA y que se quiere traer el valor que tiene esa variable en 
// el entorno dev (podria ser staging o prod tambien)
app.get("/", async (req,res) => {
    const secret = await client.getSecret("SECRETOPRUEBA", {
    environment: "dev",
   path: "/",    
  });
  const value = secret.secretValue;
  res.send(`Hola, ${value}`);
});


//app.get("/", async (req, res) => {
 //   const name = await client.getSecret("SECRETOPRUEBA");
 //   res.send(`Hola, ${name.secretValue}`);
//});

app.listen(PORT, () => {
    console.log(`Aplicación de ejemplo escuchando en el puerto ${PORT}`);
});
