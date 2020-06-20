class Carta{
    //valores dados desde su inicio
    constructor(palo,valor=[],texto){
      this.palo=palo;
      this.valor=valor;
      this.texto=texto;
      
    }
}
class Palo{
    // tenemos la clase con la figura ya en su constructor
    constructor(figura){
      this.figura=figura;
    }
}
  //declaramos los array para crear las cartas con sus simbolos 
let palos = [new Palo("♥"), new Palo("♦"), new Palo("♣"), new Palo("♠")];
let letras=['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
let  valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
   //clase padre 
class FabricaCarta {
        mazo=[];
        mazoMezclado=[];
        
    crearBarajas() {
      //recore los elementos de palos letras y valor para crear las cartas 
      palos.forEach(function (elementPalo) {
      letras.forEach(function (elementLetra, element) {
          if (element == 0) {
            this.mazo.push(new Carta(elementPalo, [1,11], elementLetra));
            
        } else if (element > 9) {
            this.mazo.push(new Carta(elementPalo, [10], elementLetra));
        } else {
            this.mazo.push(new Carta(elementPalo, valor[element], elementLetra));
        }
    },this)
  },this)
   
  }
   //mezclador de cartas  si para no repetir las cartas 
  mezclar(){
      //siclo para no repetir 
      //math.floor devuele el maximo entre menor o  igual a un numero 
        while (this.mazoMezclado.length < 52) {
          let valor = Math.floor(Math.random() * (52));//math.randon retorna numer aleatorio dentro de un rango
          this.elemento = this.mazoMezclado.find(element => element == valor) //find encontrar el elemento 
          let numer = (this.elemento == undefined) ? this.mazoMezclado.push(valor) : valor; //indefinido
      }
          //recoremos el mazo para que no nos de las mismas barajas siempre que se juegue 
      for (let i = 0; i < this.mazo.length - 1; i++) {
          this.elemento = this.mazo[this.mazoMezclado[i]]
          this.mazo[this.mazoMezclado[i]] = this.mazo[i]
          this.mazo[i] = this.elemento;
      }
      return this.mazo   
      }
}
// clase  que hereda de la super clase 
class Juego extends FabricaCarta { 
    nuevaBaraja=[]
    contador=0;
    pedir(){
      this.nuevaBaraja.push(this.mazo[this.contador].valor+this.mazo[this.contador].palo.figura);
          this.contador++;
          return this.nuevaBaraja;
    }
    validar() {
      //filtra las cartas duracte el juego 
      let filtro = this.nuevaBaraja.reduce(// reduce aplica una función a un acumulador y a cada valor de una array
        function(ant, aho) {
            // typeof de vuelve una cadena de text que desribe  el tipo del operador que estamos comprobando
            if (typeof(ant) == '') {
                if (ant > 10) {
                    return ant[0] + aho;
                } else {
                    return ant[1] + aho;
                }
            } else {
                return ant + aho;
            }
  
        })
        //mensajes por consola  solo se veran asiendo f12 
    if (filtro == 21) {
        console.log("ganas");
    } else if (filtro > 21) {
        console.log("llega a 21 y ganas");
    } else if (filtro < 21) {
        console.log("no ganaste te pasate de 21");
    }
    console.log('gana'+filtro);
    document.getElementById("suma").innerHTML=filtro;
    }
  }
  
  
  