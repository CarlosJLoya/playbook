const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log(explorers)
console.log("Ejercicio 2.1")
explorers.forEach(explorers => console.log(explorers.name))
console.log("Ejercicio 2.2")
explorers.forEach(item => console.log(item.stack))
console.log("Ejercicio 2.3")
const explorers_stack = explorers.map(listaNew => listaNew.stack)
console.log(explorers_stack)
console.log("Ejercicio 2.4")
const explorers_stack_js = explorers.filter(listaNew => listaNew.stack.includes("js"))
console.log(explorers_stack_js)
console.log("Ejercicio 2.5")
const explorers_cdmx = explorers.find(listaNew => listaNew.city === "CDMX")
console.log(explorers_cdmx)
console.log("Ejercicio 2.6")
const explorers_sum = explorers.reduce((acc, listaNew) => acc + listaNew.exercises_completed, 0)
console.log(explorers_sum)
console.log("Ejercicio 2.7")
const explorers_some = explorers.some(listaNew => listaNew.missions.frontend.exercisesFinished === true)
console.log(explorers_some)
console.log("Ejercicio 2.8")
const explorers_every = explorers.every(listaNew => listaNew.missions.onboarding.isFinished === true)
console.log(explorers_every)