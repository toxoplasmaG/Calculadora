class Pantalla {
    constructor (pantallaValorEntrada, pantallaValorSalida) {
        this.pantallaValorSalida = pantallaValorSalida;
        this.pantallaValorEntrada = pantallaValorEntrada;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined
        this.valorSalida = '';
        this.valorEntrada = '';
        this.signos = {
            sumar: '+',
            dividir:'%',
            multiplicar:'X',
            restar:'-',
        }
    }

    borrar() {
        this.valorSalida = this.valorSalida.toString().slice(0,-1);
        this.imprimirValores();
    }
    

    borrarTodo() {
        this.valorSalida = '';
        this.valorEntrada = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorEntrada = this.valorSalida || this.valorEntrada;
        this.valor = '';
        this.imprimirValores();
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorSalida.includes('.')) return
        this.valorSalida = this.valorSalida.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.pantallaValorSalida.textContent = this.valorSalida;
        this.pantallaValorEntrada.textContent = `${this.valorEntrada} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorEntrada = parseFloat(this.valorEntrada);
        const valorSalida = parseFloat(this.valorSalida);

        if( isNaN(valorSalida)  || isNaN(valorEntrada) ) return
        this.valorSalida = this.calculador[this.tipoOperacion](valorEntrada, valorSalida);
    }
}