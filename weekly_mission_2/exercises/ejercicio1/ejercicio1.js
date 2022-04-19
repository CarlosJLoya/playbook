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