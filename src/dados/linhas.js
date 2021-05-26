//[{"id":"5518","codigo":"250-1","nome":"1 DE MAIO"}
import axios from 'axios';

export default class Linhas {
    constructor() {
        this.linhas = [];
        this.tipoBus = 'o';
        this._inscritos = [];
        this.getLinhas();
    }

    getLinhas() {
        axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%&t=' + this.tipoBus).then(res => {
            let sort = res.data.sort(function (a, b) { return a.id - b.id });
            this.linhas = sort;
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

    alteraTipoBus(tipoBus) {
        this.tipoBus = tipoBus;
        this.getLinhas();
    }

    notificar() {
        this._inscritos.forEach(func => func(this.linhas));
    }
}