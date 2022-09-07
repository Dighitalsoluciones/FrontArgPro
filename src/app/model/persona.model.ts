export class persona{
    id?: number;
    nombre: string;
    titulo: string;
    ubicacion: string;
    img: string;
    fondo: string;

    constructor(nombre: string, titulo: string, ubicacion: string, img: string, fondo: string){
        this.nombre = nombre;
        this.titulo = titulo;
        this.ubicacion = ubicacion
        this.img = img;
        this.fondo = fondo;
    }
}