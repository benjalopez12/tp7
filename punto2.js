const coche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    año: 2020,

    imprimirInfo: function() {
        console.log(`Coche: ${this.marca} ${this.modelo}, Año: ${this.año}`);
    },

    actualizarPropiedades: function(marca, modelo, año) {
        if (marca) this.marca = marca;
        if (modelo) this.modelo = modelo;
        if (año) this.año = año;
    }
};

coche.imprimirInfo();

coche.actualizarPropiedades('Honda', 'Civic', 2022);
coche.imprimirInfo();
