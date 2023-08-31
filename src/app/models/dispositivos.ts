export class Dispositivo {
    id: string;
    nome: string;
    estado: boolean;
    tipo: "Lampada" | "ArCondicionado";
    temperatura?: number;
    
    constructor(){
        this.id = "";
        this.nome = "";
        this.estado = false;
        this.tipo = "Lampada";
        this.temperatura = 0;
    }
}
