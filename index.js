const pantallavalorEntrada = document.getElementById('valorEntrada');
const pantallaValorSalida = document.getElementById('valorSalida');
const bontonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const pantalla = new Pantalla(pantallavalorEntrada,pantallaValorSalida);

bontonesNumeros.forEach(boton => {
    boton.addEventListener('click', ()  => pantalla.agregarNumero(boton.innerHTML) )
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});