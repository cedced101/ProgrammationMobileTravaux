//Exercice 1
var tablettre = new Array();
function Exercice1()
{
	var accent;
	var saccent;
	accent = prompt("veuillez entrer une lettre à accent");
	if (accent == "à")
	{
		accent = "a";
		saccent = accent;
	}
	if (accent == "è")
	{
		accent = "e";
		saccent = accent;
	}	
	if (accent == "ù")
	{
		accent = "u";
		saccent = accent;
	}
	if (accent == "é")
	{
		accent = "e";
		saccent = accent;
	}
	if (accent == "ü")
	{
		accent = "u";
		saccent = accent;
	}
	if (accent == "ï")
	{
		accent = "i";
		saccent = accent;
	}
	tablettre = [saccent];
	alert("Voici la phrase sans accents : "+ tablettre);
}
//Exercice2
function Quelquun()
{
	var personne =
	{
		prenom : "Cedric",	
		nom : "Lesperance",
		naissance : "12/08/1998",
		chiffre : "01",
		Codepermanent : function()
		{
			return this.nom.substring(0,3) + this.prenom.substring(0,2) + this.naissance.substring(0,2) + this.naissance.substring(3,5) + this.naissance.substring(6,10) + this.chiffre;			
		}
	}
	
		alert("Le prenom : " +personne.prenom);
		alert("Le nom : " +personne.nom);
		alert("La date de naissance : " +personne.naissance);
		alert("Le code permanent : " +personne.Codepermanent());
}
//Exercice3
function auto()
{
	var voiture =
		{
			marque : "honda",
			annee : 2000,
			kilo : 190000,
			autocollant : function()
			{
				return this.autocollant;
		}
		tablettre = voiture.autocollant;
		
		alert("La marque : " +voiture.marque);
		alert("L'année : " +voiture.annee);
		alert("Les kilomètres : " +voiture.kilo);
		alert("Une lettre aléatoire : " + Math.random());
}
//Exercice4
function annuaire()
{
	var Contact = new Array(4);
		
	var Contact1 =
	{
		prenom : "Jimmy", 
		nom : "Maltais",
		noTel : "(418-555-2525)",
		adresse: "2454 rue de Lilas",
	}
	var Contact2 =
	{
		prenom : "Matt", 
		nom : "Murdoc",
		noTel : "(418-547-2525)",
		adresse: "2400 rue des superheros",
	}
	var Contact3 =
	{
		prenom : "Niko", 
		nom : "Bellic",
		noTel : "(418-500-2020)",
		adresse: "5532 rue Macdonald",
	}
	var Contact4 =
	{
		prenom : "Samuel", 
		nom : "Morency",
		noTel : "(418-485-2222)",
		adresse: "5000 rue des CollegeDroppers",
	}
	var Contact5 =
	{
		prenom : "Shiny", 
		nom : "West",
		noTel : "(418-589-2548)",
		adresse: "3321 rue des Chintok",
	}
	for(var key in Contact1)
	{
		Contact.push(Contact1[key]+"\n");
	}
	
	for(var key in Contact2)
	{
		Contact.push(Contact2[key]+"\n");
	}
	
	for(var key in Contact3)
	{
		Contact.push(Contact3[key]+"\n");
	}
	
	for(var key in Contact4)
	{
		Contact.push(Contact4[key]+"\n");
	}
	
	for(var key in Contact5)
	{
		Contact.push(Contact5[key]+"\n");
	}
	
	alert(Contact);
	
}
//Exercice5
function Calculatrice()
{
	tabpersonne = new Array(,);
	var nomC1;
	var nomC2;
	nomC1 = prompt("Entrez le prenom et le nom de la première personne");
	nomC2 = prompt("Entrez le prenom et le nom de la deuxième personne");
	alert(nomC1+ " et " +nomC2+ "on eu  : " + Math.random(0,100));
	tabpersonne = [nomC1 , nomC2];
	if (Math.random(0,100) > 95);
	{
		alert("Ils sont des vétérans du memes !");
	}	

	else if (Math.random(0,100) > 80);
	{
		alert("un des deux n’apprécie pas tout le temps le bon contenu.");
	}	

	else
	{
		alert("Loser!");
	}	
	
