// Aquí arrancamos el servidor
import app from "./app.js"
import "./database.js"
app.listen(app.get('port'), () => console.log(`Servidor escuchando en el puerto :  ${app.get('port')}`))
