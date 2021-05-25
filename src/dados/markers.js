//[{"id":"5518","codigo":"250-1","nome":"1 DE MAIO"}
import axios from 'axios';

export default class Markers {
    constructor() {
        this.markers = [];
        this._inscritos = [];
    }

    inscrever(func) {
        this._inscritos.push(func);
    }

    getMarkers(id) {
        console.log('teste do ',id);
        axios.get('http://www.poatransporte.com.br/php/facades/process.php?a=il&p=' + id).then(res => {
            let data = res.data;
            this.markers = [];
            for (let a in res.data) {
                if (a > 0 && a < 99999) {
                    this.markers.push(data[a])
                }
            }
            this.notificar();
        });
    }

    desincrever(func) {
        this._inscritos = this._inscritos.filter(f => f !== func);
    }

    notificar() {
        //console.log(this.markers);
        this._inscritos.forEach(func => func(this.markers));
    }
}