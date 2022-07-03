module.exports = {
    port: process.env.PORT || 3002,
    callback : function() {
        console.log("Servidor corriendo en el puerto " + this.port);
    }
}