
function ViderContenu()
{
	var contenu = document.getElementById("changertext");
	while (contenu.firstChild)
	{
		contenu.removeChild(contenu.firstChild);
	}
}
function AjouterContenu()
{
	var contenu = document.getElementById("changertext");
	var divprenom = document.createElement("div");
	var divnom = document.createElement("div");
	var divnom_hero = document.createElement("div");
	var divpouvoir = document.createElement("div");
	var divennemis = document.createElement("div");
	var divAllies = document.createElement("div");
	divprenom.id = "prenom";
	divnom.id = "nom";
	divnom_hero.id = "nom_héro";
	divpouvoir.id = "pouvoir";
	divennemis.id = "ennemis";
	divAllies.id = "Alliés";
	contenu.appendChild(divprenom);
	contenu.appendChild(divnom);
	contenu.appendChild(divnom_hero);
	contenu.appendChild(divpouvoir);
	contenu.appendChild(divennemis);
	contenu.appendChild(divAllies);
}
function AjouterInfo()
{
	document.getElementById("prenom").innerHTML+=heros.prenom+"<br/>";
	document.getElementById("nom").innerHTML+=heros.nom+"<br/>";
	document.getElementById("nom_héro").innerHTML+=heros.nom_héro+"<br/>";
	document.getElementById("pouvoir").innerHTML+=heros.pouvoir+"<br/>";
	document.getElementById("ennemis").innerHTML+=heros.ennemis+"<br/>";
	document.getElementById("Alliés").innerHTML+=heros.Alliés+"<br/>";
}
var heros=
{
	prenom : '',
	nom : '',
	nom_héro : '',
	pouvoir : '',
	ennemis : '',
	Alliés : '', 
	img : ''
};
function SpiderMan()
{	
	ViderContenu();
	heros.prenom = "Son prénom : Peter",
	heros.nom = "Son nom : Parker",
	heros.nom_héro = "Nom du super-héro : Spider-Man",
	heros.pouvoir = "Ses pouvoirs : Homme-araigné, il est très agile et peux lancer des toiles d'araigné très solides.",
	heros.ennemis = "Ses ennemis : Ses ennemis jurés sont Venom et le Bouffon Vert.",
	heros.Alliés = "Ses alliés : il est plutôt solitaire ,mais comme membre important pour lui il y a Marie-Jane, Gwen et bien sûr les Avengers"
	AjouterContenu();
	AjouterInfo();
}
function BlackPanther()
{		
		ViderContenu();
		heros.prenom = "Son prénom : T'Challa",
		heros.nom = "Son nom : ?",
		heros.nom_héro = "Nom du super-héro : Black-Panther",
		heros.pouvoir = "Ses pouvoirs : Les sens et les attributs physiques de T'Challa ont été améliorés à des niveaux surhumains par l'herbe en forme de coeur.",
		heros.ennemis = "Ses ennemis : Ses ennemis jurés sont Killmonger et Man-Ape",
		heros.Alliés = "Ses alliés : Les Avengers" 
		AjouterContenu();
		AjouterInfo();
}
function IronMan()
{		
		ViderContenu();
		heros.prenom = "Son prénom : Tony",
		heros.nom = "Son nom : Stark",
		heros.nom_héro = "Nom du super-héro : Iron Man",
		heros.pouvoir = "Ses pouvoirs : Aucun, le corps de Tony avait été amélioré par le virus techno-organique modifié, Extremis, mais il est actuellement inaccessible et inopérable.",
		heros.ennemis = "Ses ennemis : Ses ennemis jurés sont Iron Monger et Ultron",
		heros.Alliés = "Ses alliés : Les Avengers, SHIELD"
		AjouterContenu();
		AjouterInfo();
}
function Wolverine()
{
		ViderContenu();
		heros.prenom = "Son prénom : James",
		heros.nom = "Son nom : Howlett",
		heros.nom_héro = "Nom du super-héro : Wolverine",
		heros.pouvoir = "Ses pouvoirs : C'est un mutant qui possède la capacité de régénérer des zones endommagées ou détruites de sa structure cellulaire à un taux beaucoup plus élevé que celui d'un humain ordinaire. Il possède aussi des griffes en os qui sortent a l'extrèmité de ses jointures.",
		heros.ennemis = "Ses ennemis : Ses ennemis jurés sont Ogun  et Vipère",
		heros.Alliés = "Ses alliés :X-Men, et les Avengers." 
		AjouterContenu();
		AjouterInfo();	
}
function Daredevil()
{
		ViderContenu();
		heros.prenom = "Son prénom :Matthew",
		heros.nom = "Son nom : Murdoc",
		heros.nom_héro = "Nom du super-héro : Daredevil",
		heros.pouvoir = "Ses pouvoirs : Il possède le sens de l'ouï amélioré à défaut de sa vue qui est absente et il est très agile du à l'entrainement qu'il a eu.",
		heros.ennemis = "Ses ennemis : Ses ennemis jurés sont Wilson fisk et Bullseye",
		heros.Alliés = "Ses alliés : Franklin Percy Nelson alias Foggy et Karen Page" 
		AjouterContenu();
		AjouterInfo();
}
window.addEventListener("copy", function(){
document.getElementById("changertext").innerHTML =
alert("Ne pas oublier de citer vos sources");
});