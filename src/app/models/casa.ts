import { Comodo } from './comodo';

export class Casa {
    id: string;
    nomeDono: string;
    comodos: Comodo[];
    portaoEstado?: boolean;
    temperaturaGeral?: number;
    gas?:number;

    constructor(){
        this.id = "";
        this.nomeDono = "";
        this.comodos = [];
        this.portaoEstado = false;
        this.temperaturaGeral = 0;
        this.gas = 0;
    }
}
