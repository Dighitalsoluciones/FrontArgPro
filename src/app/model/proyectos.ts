export class Proyectos {
    id?: number;
    logoProyec: string;
    referenciaProyec: string;
    descripcionProyec: string;
    fechacreacionProyec: string;
    linkProyec: string;

    constructor(logoProyec: string, referenciaProyec: string, descripcionProyec: string, fechacreacionProyec: string, linkProyec: string){
        this.logoProyec = logoProyec;
        this.referenciaProyec = referenciaProyec;
        this.descripcionProyec = descripcionProyec;
        this.fechacreacionProyec = fechacreacionProyec;
        this.linkProyec = linkProyec;
    }

}
