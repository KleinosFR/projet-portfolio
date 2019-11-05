const projects = [
    {
        title: "L'assemblée du web : la fin du Javascript ??",
        image: "images/images_projets/Screenshot_WebAssembly.png",
        link: "page-projet1_1.html",
        url: "",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        title: "Wild & Co. C’est le moment de trouver ton stage",
        image: "images/images_projets/Screenshot_wild&co.png",
        link: "page-projet1_2.html",
        url: "",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        title: "Le Book des Wilders : savoir tout sur tout le monde",
        image: "images/images_projets/Screenshot_book.png",
        link: "page-projet1_3.html",
        url: "",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        title: "Le complot Illuminati : sont-ils vraiment partout ?",
        image: "images/images_projets/Screenshot_Illuminati.png",
        link: "page-projet1_4.html",
        url: "",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        title: "Portfolio du campus : pour présenter vos projets",
        image: "images/images_projets/Screenshot_portfolio.png",
        link: "page-projet1_5.html",
        url: "",
        type: "projet-1",
        idTarget: "containerProjects1"
    }
]

const projects1 = projects.filter(project => project.type === "projet-1");
const hackathon = projects.filter(project => project.type === "hackathon");
const projects2 = projects.filter(project => project.type === "projet-2");

const displayProjects = (project) => {
    const cardProject = `<figure><a href=${project.link} title="En savoir plus"><img class="img_projets" src=${project.image} alt=${project.title}></a>
    <figcaption class="figcaption_projet">${project.title}</figcaption></figure>`;
    document.getElementById(`${project.idTarget}`).insertAdjacentHTML('beforeend', cardProject);
}

projects1.forEach(displayProjects)
hackathon.forEach(displayProjects)
projects2.forEach(displayProjects)