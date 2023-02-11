const db = require("../database");

module.exports = {
    marcas: (req, res) => {
        let marcas = [];

        db.forEach(sucursal => {
            sucursal.autos.forEach((auto) => {
                marcas.push(auto.marca)
            })
        });
        let marcasUnicas = new Set(marcas);
        let result = [...marcasUnicas];
        res.send(result)
    },
    detalle: (req, res) => {
        let marca = req.params.marca;

        let autos = [];

        db.forEach(sucursal => {
            sucursal.autos.forEach(auto => autos.push(auto))
        })

        let autosFiltradosPorMarca = autos.filter(auto => auto.marca === marca);
        let autosParaLaVista = autosFiltradosPorMarca.map(auto => {
            return {
                marca: auto.marca,
                modelo: auto.modelo,
                anio: auto.anio
            }
        });
        res.send(autosParaLaVista)
    }
}