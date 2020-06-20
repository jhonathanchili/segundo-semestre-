class Bombero{
    constructor(nombre, edad){
        this.nombre=nombre;
        this.edad=edad;
    }
}
//clase motobomba
class Motobomba{
    constructor(codigo, nombre){
        this.codigo=codigo;
        this.nombre=nombre;
    }
}

function PersonaArrayInput(){
    var arrayInput =new Array();
    var inputsValues = document.getElementsByClassName('datoInput'),
    namesValues = [].map.call(inputsValues,function(datoInput){
        arrayInput.push(datoInput.values);
    });
    arrayInput.forEach(function(inputsValuesData){
        console.log("el datos:"+inputsValuesData);
    });
}