//[{"id":"5518","codigo":"250-1","nome":"1 DE MAIO"}
import axios from 'axios';

export default class Markers {
    constructor() {
        this.markers = [];
        this._inscritos = [];
        this.id = '';
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    getMarkers(id) {
        if (!(id === this.id)) {
            this.clearMarkers();
            this.getMark(id);
        }
    }

    async getMark(id) {
        try {
            axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=il&p=' + id).then(res => {
                let data = res.data;
                for (let a in res.data) {
                    if (a > 0 && a < 99999) {
                        this.markers.push(data[a])
                    }
                }
                this.id = id;
                this.notificar();
            });
        }
        catch {
            console.log('Erro');
        }
    }

    clearMarkers() {
        this.markers = [];
    }

    desincrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar() {
        this._inscritos.forEach(func => func(this.markers));
    }
}