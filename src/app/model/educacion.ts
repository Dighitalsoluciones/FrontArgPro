export class Educacion {
    id?: number;
    logo: string;
    titulo: string;
    centroeduc: string;
    desde: string;
    hasta: string;
    ubicacion: string;

    constructor(logo: string, titulo: string,  centroeduc: string, desde: string, hasta: string, ubicacion: string){
        this.logo = logo;
        this.titulo = titulo;
        this.centroeduc = centroeduc;
        this.desde = desde;
        this.hasta = hasta;
        this.ubicacion = ubicacion;

    }
}
