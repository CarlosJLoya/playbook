

//GitHub
console.log("Modelado GitHub")
const repo = {
    name: "LaunchX",
    author: "CarlosJLoya",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }

}
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales:" + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const Issue = {
    title: "Week2",
    repositoryNameAssociated: "LaunchX",
    status: "Activo",
    numberOfComments: 5,
    labels: 5,
    author: "CarlosJLoya",
    dateCreated: 2022 / 04 / 19,
    lastUpdate: 2022 / 04 / 19,
    getTitleAndAuthor: function () {
        return this.title + " " + this.author
    },
    getGeneralInfo: function () {
        return `Repository Associated ${this.repositoryNameAssociated} status ${this.status} comments ${this.numberOfComments}`
    }

}
console.log("Nombre del repo:" + Issue.title)
console.log("Titulo y Autor::" + Issue.getTitleAndAuthor())
console.log(Issue.getGeneralInfo())

const PullRequest = {
    title: "pullRequest",
    branchName: "master",
    dateCreated: 2022 / 04 / 19,
    status: "Activo",
    repositoryNameAssociated: "PlayBook",
    getStatus: function () {
        return this.status
    },
    getTitleAndAutor: function () {
        return this.title + " " + this.author
    }
}

console.log("Nombre del repo:" + PullRequest.title)
console.log("Titulo y Autor::" + PullRequest.getTitleAndAutor())
console.log(PullRequest.getStatus())

//Twitter
console.log("Modelado Twitter")
const user = {
    user: "Carlos",
    userName: "CarlosLoya",
    bio: "....",
    age: 43,
    trending_topic: function () {
        //day: "Marte 19 de Abril",
        //   noticia: "LaunchX Week 3",
        return "Marte 19 de Abril " + this.user
    },
    hashtag: function () {
        return "#" + this.userName
    }
}
console.log("Nombre del user:" + user.user)
console.log("Tendencia:" + user.trending_topic())
console.log(user.hashtag())

//Facebook
console.log("Modelado Facebook")
const facebook = {
    user: "Carlos",
    userName: "CarlosLoya",
    bio: "....",
    age: 43,
    estadoCivil: "Casado",
    estudios: "Universidad",
    post: function () {
        //day: "Marte 19 de Abril",
        //   noticia: "LaunchX Week 3",
        return "Marte 19 de Abril " + this.user + " Modelados extras Node JS"
    },
    biography: function () {
        return "Biografia " + this.user + " " + this.age + " " + this.estadoCivil + " " + this.estudios
    }
}
console.log("Nombre del user:" + facebook.user)
console.log("post:" + facebook.post())
console.log(facebook.biography())

//Uber
console.log("Modelado Uber")
const uber = {
    profile: "Carlos",
    numViajes: 5,
    km: 13,
    travel: function () {
        return "Ultimo viaje " + this.km + " Inicio Colonia Colinas del Sol a las Palmas"
    },
}
console.log("Nombre del perfil: " + uber.profile)
console.log("viajes: " + uber.viajes)
console.log(uber.travel()) 