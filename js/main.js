/*
Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

/* 1.creo un arrey con sei membri del team
   1.2 ogni elemento del team sarà un oggetto dell'array
   1.2 scrivere le proprietà di ogni memmro ovvero: nome, ruolo e foto
   2.creare le relative schede prendendo le info dall'array
   3.tramite il form aggiungere all'array un nuovo membro del team
   3.1 visualizzare il nuovo elemento del team in pagina
*/

let container = document.querySelector("team-container");

var team = [

    {
        "img" : "img/angela-caroll-chief-editor.jpg",
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor"
    },

    {
        "img" : "img/angela-lopez-social-media-manager",
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager"
    },

    {
        "img" : "img/barbara-ramos-graphic-designer.jpg",
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer"
    },

    {
        "img" : "img/scott-estrada-developer.jpg",
        "nome" : "Scott Estrada",
        "ruolo" : "Developer"
    },

    {
        "img" : "img/walter-gordon-office-manager.jpg",
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager"
    },

    {
        "img" : "img/wayne-barnett-founder-ceo.jpg",
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder Ceo"
    },

];


let elementiTeam = "";

for (let i = 0; i < team.length; i++){

    elementiTeam +=`
    <div class"team-card">
        <div class="card-image">
            <img src="${foto}"
            />
        </div>
        <div class="card-text">
            <h3>${ruolo}</h3>
            <p>${nome}</p>
        </div>
    </div>`;
}

container.innerHTML += elementiTeam;

