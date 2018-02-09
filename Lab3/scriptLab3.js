//Exercice 1
function ajouterContenu(message)
{	
	document.getElementById("resultat").style.fontSize = "40px";
	document.getElementById("resultat").innerHTML += message + "<br/>";
}	
function viderContenu()
{
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("resultat").style.textAlign = "center";
}
function Exercice1()
{	
	viderContenu();	
	var nombre;
	var cpt;
	var multi;
	var message;
	nombre = parseInt(prompt("Entrez un nombre !"));
	viderContenu()
	for( cpt = 0; cpt <=12; cpt++)
	{
		multi = nombre *cpt;
		message = cpt + " X " +nombre+ " = " + multi;
		ajouterContenu(message);
	}	
}

//Exercice 2
function Calculer()
{
	var nbr1;
	var nbr2;
	var oper;
	var total;	
	Saisie();
	Addition();
	Soustraction();
	Multiplication();
	division();
	Continuer();	
}	
function Saisie()
{
	nbr1 =prompt("veuillez entrez un premier nombre");
	oper = prompt("veuillez entrez un opérateur : +, -, *, /");
	nbr2 = prompt("veuillez entrez deuxième nombre");
}
			
function Addition()
{		
	if (oper == "+")
	{
		nbr1 = parseInt(nbr1);
		nbr2 = parseInt(nbr2);
		total = nbr1 + nbr2;
		alert("Voici le resultat du calcul "+total);
	}
}
function Soustraction()
{
	 if (oper == "-")
	{
		nbr1 = parseInt(nbr1);
		nbr2 = parseInt(nbr2);
		total = nbr1 - nbr2;
		alert("Voici le resultat du calcul "+total);
	}	
}	
function Multiplication()
{
	if (oper == "*")
	{
		nbr1 = parseInt(nbr1);
		nbr2 = parseInt(nbr2);
		total = nbr1 * nbr2;
		alert("Voici le resultat du calcul "+total);
	}
}
function division()
{	 if (oper == "/")
	{
		nbr1 = parseInt(nbr1);
		nbr2 = parseInt(nbr2);
		total = nbr1 / nb2;
		alert("Voici le resultat du calcul "+total);
	}		
	else if (oper == "/" && nbr2 == 0)
	{
		nbr1 = parseInt(nbr1);
		nbr2 = parseInt(nbr2);
		alert("impossible de diviser par 0!");
	}
}

function Continuer()
{
	var confirmation;
	confirmation = confirm ("Voulez vous continuer le calcul?")
	
	if (confirmation == true)
	{
		Calculer();
	}
	else
	{
		alert("Fermeture");
	}
}
//Exercice 3
function Exercice3()
{
	//map
	var array = [30, 40, 50, 60];
	const map1 = array.map(x => x + 10);
	console.log(map1);
	//filter
	var mots = ['allo', 'salut', 'bonjour', 'bonsoir', 'adieu', 'present'];
	const result = mots.filter(mots => mots.length > 6);
	console.log(result);	
	alert("voici le tableau des chiffres : " +array+ " et voici le tableau avec plus 10 : " +map1);
	alert("voici le tableau des mots : " +mots+ " et voici le tableau avec six lettres et plus  : " +result);
}
//Exercice 4
function ajouterContenu1(message)
{
	document.getElementById("resultat").style.fontSize = "40px";
	document.getElementById("resultat").innerHTML += message + "<br/>";
}
function viderContenu1()
{
	document.getElementById("resultat").innerHTML = "";
	document.getElementById("resultat").style.textAlign = "center";
}
	
function triangledesbermudes()
{
	viderContenu1();
	var pyramide;
	var etoile;
	var cpt;
	etoile = prompt("Entrez le nombres de lignes d'étoiles : ");
	
	for(cpt = 0; cpt<=etoile; cpt++)
	{
		pyramide = etoile;
		String(pyramide);
		pyramide = "*";
		
		message = pyramide;
		ajouterContenu(message);
	}
}