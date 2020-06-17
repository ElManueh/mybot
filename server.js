// ------------------- SCRIPT DE ARRANQUE -------------------

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);


// ------------------- CODIGO DEL BOT -------------------

const Discord = require('discord.js');
const client = new Discord.Client();

let { readdirSync } = require('fs'); 
client.config = require('./config.js');
client.comandos = new Discord.Collection();  


// ------------------- COMANDOS -------------------

for(const file of readdirSync('./comandos/')) { 

  if(file.endsWith(".js")) { 
    
    let fileName = file.substring(0, file.length - 3); 
    let fileContents = require(`./comandos/${file}`); 
    
    client.comandos.set(fileName, fileContents);
  }
}


// ------------------- EVENTOS -------------------  

for(const file of readdirSync('./eventos/')) { 

  if(file.endsWith(".js")){

    let fileName = file.substring(0, file.length - 3); 
    let fileContents = require(`./eventos/${file}`); 
  
    client.on(fileName, fileContents.bind(null, client)); 
    
    delete require.cache[require.resolve(`./eventos/${file}`)]; 
  }
} 
  
// ------------------- LOGIN -------------------  

client.login(client.config.token)
  .then(() => { 
    console.log(`Estoy listo, soy ${client.user.tag}`);

  })
  .catch((err) => { console.error("Error al iniciar sesión: " + err);

  });


client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
