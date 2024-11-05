const persona = {
    nombre: 'Juan',
    edad: 30,
    profesion: 'Ingeniero',
    saludar: function() {
        console.log(`¡Hola! Soy ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`);
    }
};
persona.saludar();
