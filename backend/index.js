var app = require('./app');
var port = 3700; 

app.listen(port,()=>{
    console.log(`Servidor corriendo correctamente. URL:localhost:${port}`);
});