class RutValidador {
    //Obtener el rut con constructor para el ingreso del usuario
    constructor(rut){
        this.rut = rut;
        //obtenemos el ultimo número (digito verificador) ingresado
        this.dv = this.rut.substring(this.rut.length - 1);
        //Limpiar el rut, quitando otros caracteres innecesarios
        this.rut = this.rut.substring(0, this.rut.length - 1).replace(/\D/g, '')
        this.esValido = this.validar();

    }

    validar(){
        let numerosArray = this.rut.split('').reverse();
        let acumulador = 0;
        let multiplicador = 2;

        for (let numero of numerosArray){
            acumulador += parseInt(numero) * multiplicador;
            multiplicador ++;

            if (multiplicador == 8) {
                multiplicador = 2;
            }
        }

        let dv = 11 - (acumulador % 11 );

        if (dv == 11)
            dv = '0';
        
        if (dv == 10)
            dv = 'k';
        return dv == this.dv.toLowerCase()
        
    }

    formato(){
        if (!this.esValido) return '';

        return (this.rut.toString().replace(/\B(?=(\d{3})+(?!\d))/g,'.')) + '-' + this.dv;
    }

}

const Validador = new RutValidador(prompt("Ingresa tu rut con puntos y guion"))

console.log(Validador.esValido)








// console.log('Rut', Validador.rut);
// console.log('DIGITO VD', Validador.dv);
