console.log("Modelado POO")

const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: 12,
    color: "pink"

}

//Crear clase

class Ajolonauta {
    constructor(name, mission, age, color) {
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }
    sayHello() {
        return `Hey! Hello ${this.name} is saying hello!`
    }
}


class Pokemon {
    constructor(name) {
        this.name = name
    }
}
const pikachu = new Pokemon("Pikachu")
console.log(pikachu)

//console.log(Ajolonauta)

const woopa_obj_js = {

}
console.log(woopa_obj_js)

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "pink")
console.log(woopa)
console.log(woopa.sayHello())
const wooper = new Ajolonauta("Wooper", "java", 10, "Blue")
console.log(wooper)

const woopy = new Ajolonauta("Woopy", "java", 15, "Green")
console.log(woopy)



//
