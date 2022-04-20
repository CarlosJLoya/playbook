//GitHub
console.log("clase GitHub")

class repo {
    // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
    constructor(name, author, language, numberOfCommits, stars, forks, issues_open, issues_close) {
        this.name = name
        this.author = author
        this.language = language
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    getTotalIssues() { // es una función que ejecutará cualquier objeto instanciado de esta clase
        return `${this.issues_open} + " " + ${this.issues_close}`
    }
    getGeneralInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}
const clsrepo = new repo("LaunchX", "CarlosJLoya", "JavaScript", 100, 199, 299, 10, 10)
console.log("Nombre del repo:" + clsrepo.name)
console.log("Issues totales:" + clsrepo.getTotalIssues())
console.log(clsrepo.getGeneralInfo())