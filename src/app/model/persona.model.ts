export class persona{
    id?: number;
    nombre: String;
    titulo: String;
    ubicacion: String;
    img: String;

    constructor(nombre: String, titulo: String, ubicacion: String, img: String){
        this.nombre = nombre;
        this.titulo = titulo;
        this.ubicacion = ubicacion
        this.img = img;
    }
}