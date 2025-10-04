const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
 res.send('¡Hola, Mundo con Docker y GitHub Actions!');
});
const server = app.listen(port, () => {
 console.log(`App escuchando en el puerto ${port}`);
});
module.exports = { app, server };