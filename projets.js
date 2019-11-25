const projects = [
    {
        id: "card1",
        idModal: "modal1",
        idCloseModal: "closeModal1",
        title: "L'assemblée du web : la fin du Javascript ??",
        image: "images/images_projets/Screenshot_WebAssembly.png",
        descriptionModal: "",
        url: "",
        type: "projet-1",
        idTarget: "containerProjects1"
    },
    {
        id: "card2",
        idModal: "modal2",
        idCloseModal: "closeModal2",
        title: "Wild & Co. C’est le moment de trouver ton stage",
        image: "images/images_projets/Screenshot_wild&co.png",
        descriptionModal: "",
        url: "",
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
        descriptionModal: "",
        url: "https://wcs-sept2019-portfolio.netlify.com/",
        type: "projet-1",
        idTarget: "containerProjects1"
    }
]

const projects1 = projects.filter(project => project.type === "projet-1");
const hackathon = projects.filter(project => project.type === "hackathon");
const projects2 = projects.filter(project => project.type === "projet-2");

class Projet {
    constructor(id, idModal, idCloseModal, title, image, descriptionModal, url, type, idTarget) {
        this.id = id;
        this.idModal = idModal;
        this.idCloseModal = idCloseModal;
        this.title = title;
        this.image = image;
        this.descriptionModal = descriptionModal;
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
                        ${voirProjet}
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
hackathon.forEach(displayProjects)
projects2.forEach(displayProjects)