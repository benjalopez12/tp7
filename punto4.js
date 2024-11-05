const empleado = {
    nombre: 'Juan Pérez',
    edad: 30,
    puesto: 'Desarrollador',
    salario: 2500,

    mostrarInfo: function() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Puesto: ${this.puesto}`);
        console.log(`Salario: $${this.salario}`);
    },

    aumentarSalario: function(porcentaje) {
        const incremento = this.salario * (porcentaje / 100);
        this.salario += incremento;
        console.log(`Nuevo salario de ${this.nombre}: $${this.salario.toFixed(2)}`);
    }
};
empleado.mostrarInfo(); 
empleado.aumentarSalario(10); 
empleado.mostrarInfo(); 
