export class Dispositivos {
    id: string;
    nome: string;
    estado: boolean;
    tipo: "Lampada" | "ArCondicionado" | "Portao" | "Gas";
    temperatura?: number;
    porcentagem?: number;
    
    constructor(){
        this.id = "";
        this.nome = "";
        this.estado = false;
        this.tipo = "Lampada";
        this.temperatura = 0;
        this.porcentagem = 0;
    }
}
