const projects = [
    {
        id: "card1",
        idModal: "modal1",
        idCloseModal: "closeModal1",
        title: "L'assemblée du web : la fin du Javascript ??",
        image: "images/images_projets/Screenshot_WebAssembly.png",
        descriptionModal: "Le but de ce projet est de créer un blog sur le fonctionnement de WebAssembly.",
        auteurs: "Lucas, Fanny, Frédérique",
        url: "https://github.com/lucas240/projet-1",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        id: "card2",
        idModal: "modal2",
        idCloseModal: "closeModal2",
        title: "Wild & Co. C’est le moment de trouver ton stage",
        image: "images/images_projets/Screenshot_wild&co.png",
        descriptionModal: "Ce site a pour but de référencer les entreprises tech du Pays Basque. L’objectif est de donner une vision sur l'écosystème tech du BAB et de ses alentours aux wilders et de leur permettre de trouver un stage et/ou un emploi.",
        auteurs: "Lorraine, Adrien, Monia, Jules",
        url: "https://lorrainedamiens.github.io/Projet-1_Wild-Co/",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        id: "card3",
        idModal: "modal3",
        idCloseModal: "closeModal3",
        title: "Le Book des Wilders : savoir tout sur tout le monde",
        image: "images/images_projets/Screenshot_book.png",

        descriptionModal: "",
        auteurs: "Christelle, Déborah, Sunny, Christine, Maxime",

        url: "https://sunnypritchard.github.io/Wild_Book_sept19/",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        id: "card4",
        idModal: "modal4",
        idCloseModal: "closeModal4",
        title: "Le complot Illuminati : sont-ils vraiment partout ?",
        image: "images/images_projets/Screenshot_Illuminati.png",

        descriptionModal: "",
        auteurs: "Pierre-Julien, Anne-Claire, Laëtitia, Aurélien",

        url: "https://lecomte-pj.github.io/projet-blog-2019-09-20-semaine-2/index.html",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        id: "card5",
        idModal: "modal5",
        idCloseModal: "closeModal5",
        title: "Portfolio du campus : pour présenter vos projets",
        image: "images/images_projets/Screenshot_portfolio.png",

        descriptionModal: "Portfolio des projets de la Session 2019 du campus Wild Code School de Biarritz.",
        auteurs: "Stéphane, Angélique, Fred, Dominic",

        url: "https://wcs-sept2019-portfolio.netlify.com/",
        type: "projet-1",
        idTarget: "containerProjects1"
    }, 
    {
        id: "card6",
        idModal: "modal6",
        idCloseModal: "closeModal6",
        title: "Battle Monsters",
        image: "images/images_projets/wildMonsters.jpg",
        descriptionModal: "Hackathon de 24h sur le thème de Halloween : création d'un jeu de combat de monstres à partir d'une API existante et modification de l'API. Travail collaboratif entre deux membres JS/React et 3 membres PHP",
        auteurs: "Equipe PHP : Pierre-Julien, Lorraine, Adrien ; équipe JS/React : Stéphane, Angélique",
        url: "http://wildmonstersbattle.herokuapp.com/",
        type: "hackathon",
        idTarget: "containerHackathon"
    },
    {
        id: "card7",
        idModal: "modal7",
        idCloseModal: "closeModal7",
        title: "Jeu de combat de monstres",
        image: "images/images_projets/Screenshot_hackathonLucas.png",
        descriptionModal: "Hackathon de 24h sur le thème de Halloween : création d'un jeu de combat de monstres à partir d'une API existante. Travail collaboratif entre deux membres JS/React.",
        auteurs: "Lucas, Monia",
        url: "https://battle-monsters.netlify.com/",
        type: "hackathon",
        idTarget: "containerHackathon"
    },
    {
        id: "card8",
        idModal: "modal8",
        idCloseModal: "closeModal8",
        title: "Treats or Movies",
        image: "images/images_projets/Screenshot_treat_or_movies.png",
        descriptionModal: "Hackathon de 24h sur le thème de Halloween : ",
        auteurs: "Jules, Clara, Frédérique, Dominique",
        url: "https://eager-bhaskara-c73af4.netlify.com/",
        type: "hackathon",
        idTarget: "containerHackathon"
    },
    {
        id: "card9",
        idModal: "modal9",
        idCloseModal: "closeModal9",
        title: "CrazyClickers",
        image: "images/images_projets/crazyclickers.png",
        descriptionModal: "Réalisation d'un jeu de navigateur, un clicker game avec classement des joueurs en temps réel.",
        auteurs: "Monia, Frédérique, Angélique",
        url: "https://crazyclicker.netlify.com/",
        type: "projet-2",
        idTarget: "containerProjects2"
    },
    {
        id: "card10",
        idModal: "modal10",
        idCloseModal: "closeModal10",
        title: "Git Wild",
        image: "images/images_projets/gitWild.png",
        descriptionModal: "Une interface simple qui permet de gérer ses dépôts hébergés sur Github.",
        auteurs: "Stéphane, Lucas, Dominique",
        url: "https://gitwild.netlify.com/",
        type: "projet-2",
        idTarget: "containerProjects2"
    }
]

const projects1 = projects.filter(project => project.type === "projet-1");
const hackathon = projects.filter(project => project.type === "hackathon");
const projects2 = projects.filter(project => project.type === "projet-2");

class Projet {
    constructor(id, idModal, idCloseModal, title, image, descriptionModal, auteurs, url, type, idTarget) {
        this.id = id;
        this.idModal = idModal;
        this.idCloseModal = idCloseModal;
        this.title = title;
        this.image = image;
        this.descriptionModal = descriptionModal;
        this.auteurs = auteurs;
        this.url = url;
        this.type = type;
        this.idTarget = idTarget;
    }

    displayProjects(projet) {
        const voirProjet = projet.url !== "" ? `<a href=${projet.url} target="_blank">Voir le projet</a>` : '';

        const cardProjet = 
        `<figure id=${projet.id}>
            <img class="img_projets" src=${projet.image} alt=${projet.title}>
            <figcaption class="figcaption_projet">${projet.title}</figcaption>
        </figure>
        <div id=${projet.idModal} class="modal">
            <div class="modal-content flex-column">
                <span id=${projet.idCloseModal} class="close">&times;</span>
                <div class="container-modal-content">
                    <div class="container-img-modal">
                        <img class="img-modal" src=${projet.image} alt=${projet.title} />
                    </div>
                    <div class="container-description-modal">
                        <h2>${projet.title}</h2>
                        <p>${projet.descriptionModal}</p>
                        <p>Equipe : ${projet.auteurs}</p>
                        <p>${voirProjet}</p>
                    </div>
                </div>
            </div>
        </div>`;

        document.getElementById(`${projet.idTarget}`).insertAdjacentHTML('beforeend', cardProjet);

        const modal = document.getElementById(`${projet.idModal}`);
        const card = document.getElementById(`${projet.id}`);
        const xclose = document.getElementById(`${projet.idCloseModal}`);
        card.onclick = () => {
            modal.style.display = "block";
        }
        xclose.onclick = () => {
            modal.style.display = "none";
        }
    }

}



projects1.forEach((projet) => {
    const newProjet = new Projet(`${projet.id}`, `${projet.idModal}`, `${projet.idCloseModal}`, `${projet.title}`, `${projet.image}`, `${projet.descriptionModal}`, `${projet.url}`, `${projet.type}, ${projet.idTarget}`);
    newProjet.displayProjects(projet);
})
hackathon.forEach((projet) => {
    const newProjet = new Projet(`${projet.id}`, `${projet.idModal}`, `${projet.idCloseModal}`, `${projet.title}`, `${projet.image}`, `${projet.descriptionModal}`, `${projet.url}`, `${projet.type}, ${projet.idTarget}`);
    newProjet.displayProjects(projet);
})
projects2.forEach((projet) => {
    const newProjet = new Projet(`${projet.id}`, `${projet.idModal}`, `${projet.idCloseModal}`, `${projet.title}`, `${projet.image}`, `${projet.descriptionModal}`, `${projet.url}`, `${projet.type}, ${projet.idTarget}`);
    newProjet.displayProjects(projet);
})