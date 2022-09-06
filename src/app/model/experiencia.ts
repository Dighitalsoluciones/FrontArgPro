export class Experiencia {
    id?: number;
    nombreExp: string;
    descripcionExp: string;
    logoExp: string;
    desdeExp: string;
    hastaExp: string;

    constructor(nombreExp: string, descripcionExp: string, logoExp: string, desdeExp: string, hastaExp: string){
        this.nombreExp = nombreExp;
        this.descripcionExp = descripcionExp;
        this.logoExp = logoExp;
        this.desdeExp = desdeExp;
        this.hastaExp = hastaExp;
    }
}
