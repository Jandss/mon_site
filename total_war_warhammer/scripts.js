//races / seigneurs
const races = document.querySelectorAll('.race');

//drafts (phases)
const b1 = document.querySelector(".ban1");
const b2 = document.querySelector(".b2");
const b3 = document.querySelector(".b3");
const b4 = document.querySelector(".b4");
const r1 = document.querySelector(".r1");
const r2 = document.querySelector(".r2");
const r3 = document.querySelector(".r3");
const r4 = document.querySelector(".r4");

//variables
let draft_en_cour = true;
let toutes_phase = ["","","","","","","","","","","",""];
let tour = "Votre tour";
let phase_actuelle = b1;

// à qui le tour ?
const statut = document.querySelector(".turn_draft");
statut.innerHTML = tour;

//Affichage des classes
let dernier_choix
races.forEach((race) => {
	race.addEventListener("click", (e) =>{
		console.log(phase_actuelle);
		let laClass = e.target.className;
		laClass = laClass.slice(0, laClass.length -5);
		if (typeof dernier_choix === 'undefined') {
			phase_actuelle.classList.add(laClass);
		} else{
			phase_actuelle.classList.replace(dernier_choix, laClass);
		};
		dernier_choix = laClass;
	});
});