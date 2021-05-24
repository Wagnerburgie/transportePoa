//[{"id":"5518","codigo":"250-1","nome":"1 DE MAIO"}
import axios from 'axios';

export default class Linhas {
    constructor() {
        this.linhas = [];
        this._inscritos = [];
        this.getLinhas();
    }

    getLinhas() {
        axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=o').then(res => {
            this.linhas = res.data;
            this.notificar();
        });
    }
    inscrever(func) {
        this._inscritos.push(func);
    }

    adicionarLinha(novaLinha) {
        this.linha.push(novaLinha);
        this.notificar();
    }

    desincrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.linhas));
    }
}