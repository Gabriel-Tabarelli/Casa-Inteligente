import { Dispositivo } from "./dispositivos";

export class Comodo {
    id: string;
    nome: string;
    tipo: "Quarto" | "Cozinha" | "Sala" | "Garagem";
    dispositivos: Dispositivo[];

    constructor(){
        this.id = "";
        this.nome = "";
        this.tipo = "Quarto";
        this.dispositivos = [];
    }
}
