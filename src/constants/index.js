export const MARCAS = [
    {id: 1, nombre: 'Europeo'},
    {id: 2, nombre: 'Americano'},
    {id: 3, nombre: 'Asiatico'}
]

const YEARMAX = new Date().getFullYear();
// const YEARMAX = 2020;
export const YEARS = Array.from( new Array(20), (valor, index) => YEARMAX - index)

export const PLANES = [
    {id: 1, nombre: 'Basico'},
    {id: 2, nombre: 'Completo'},
]