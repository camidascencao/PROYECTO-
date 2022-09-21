

const express = require('express');
const path = require('path');

const app = express();

/* Config public */
app.use(express.static(path.resolve(__dirname, './public')));


/* Routes */
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"src/views/home.html"));
})

app.get("/register", (req, res) => {
    res.sendFile(path.resolve(__dirname,"src/views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve(__dirname,"src/views/login.html")); 
})

app.listen(process.env.PORT || 3000, () => console.log('Servidor corriendo en el puerto 3000'));  