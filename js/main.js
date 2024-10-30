const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const generateMemberCard = (member) => {
  const memberCard = `<div class="col">
        <div class="card h-100">
        <img src="./${member.img}" class="card-img-top" alt="..." />
        <div class="card-body">
        <h5 class="card-title">${member.name}</h5>
        <h6 class="card-subtitle fw-light">${member.role}</h6>
        <a class="card-text" href="#">${member.email}</a>
        </div>
        </div>
        </div>`;

  return memberCard;
};

const printMemberCards = (grid, members) => {
  let cardsHtml = ``;
  members.forEach((member) => {
    cardsHtml += generateMemberCard(member);
  });

  grid.innerHTML = cardsHtml;
};

const addMemberHandler = (e) => {
  e.preventDefault();
  const name = document.getElementById("input-name").value.trim();
  const role = document.getElementById("input-role").value.trim();
  const email = document.getElementById("input-email").value.trim();
  const img = document.getElementById("input-img").value.trim();

  teamMembers.push({ name, role, email, img });

  printMemberCards(cardsContainer, teamMembers);
};

// Recupero il container in cui stampare le cards
const cardsContainer = document.getElementById("grid-container");

// Recupero il form
const addMemberForm = document.getElementById("add-member-form");

// Invoco la funzione che stampa le cards
printMemberCards(cardsContainer, teamMembers);

// All'invio del form creo la nuova card
addMemberForm.addEventListener("submit", addMemberHandler);
