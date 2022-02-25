class Ninja {
    constructor (nombre,){
        this.velocidad = 3;
        this.fuerza = 3;
        this.nombre = nombre;
        this.salud = 100;
        
    }
    sayName(){
        console.log(`El ninja se llama ${this.nombre}`);
    }
    showStats(){
        console.log(`${this.nombre}, tiene una fuerza de ${this.fuerza}, una velocidad de ${this.velocidad} y su salud es de ${this.salud}`);
    }
    eatRice(){
        this.salud += 10;
    }
    drinkSake(){
        this.fuerza +=10;
        this.velocidad +=10;
        console.log (`La fuerza incremento a ${this.fuerza} y la velocidad incremento a ${this.velocidad}`);
    }
}

class Sensei extends Ninja {
    constructor (nombre, Wisdom){
        super(nombre);
        this.Wisdom = Wisdom = 10;
        this.velocidad = 10;
        this.fuerza = 10;
        this.salud = 200;
    }
    speakWisdom(){
        super.eatRice();
        super.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
    showStats(){
        console.table(`Nombre ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza}, Velocidad: ${this.fuerza}, Sabíduria: ${this.Wisdom}`);
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();

