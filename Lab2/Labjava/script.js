function Exercice1()
{
	//Écrivez ici le code pour l'exercice 1
	var chocolat;
	chocolat = confirm ("Aimez-vous le chocolat?")
	
	if (chocolat == true)
	{
		chocolat = prompt ("Quel est votre marque préféré?")
	}
	else
	{
		alert("Je suis surpris!");
	}
	 	
}

function Exercice2()
{
	//Écrivez ici le code pour l'exercice 2
	var annee
	annee = prompt("En quel année êtes-vous née?")
	if (annee < 1930)
	{
		alert ("Non spécifiée!");
	}
	else if (annee >1929 && annee <1946)
	{
		alert("Vétérans");
	}
	else if (annee >1945 && annee <1965)
	{
		alert("Baby-boomers");
	}
	else if (annee >1964 && annee <1977)
	{
		alert("Génération X");
	}
	else if (annee >1976 && annee <1992)
	{
		alert("Génération Y");
	}
	else 
	{
		alert("Génération Z");
	}		
}

function Exercice3()
{
	//Écrivez ici le code pour l'exercice 3
	var TabFilm = new Array(3);
	TabFilm[0] ="Furious 3";
	TabFilm[1] ="Furious 2";
	TabFilm[2] ="It";
	var choix;
	choix = prompt("Faites votre choix entre les chiffres\n1- Furious 3\n2- Furious 2\n3- It");
	switch(choix)
	{
		case "1": 		    
			alert("Vous avez choisi le film "+TabFilm[0]);
			break;
		case "2":
			alert("Vous avez choisi le film"+ TabFilm[1]);
			break;
		case "3":
			alert("Vous avez choisi le film"+ TabFilm[2]);
			break;
		default:
		    alert("Saisie invalide");
			break;		
	}
}

function Exercice4()
{
	//Code à corriger de l'exercice 4
	
	var nom;
	var age;
	var majeur;
	var choix;
	
	nom = prompt("Quel est votre nom?");
	majeur = confirm("Êtes-vous majeur(e)?");
	age = prompt("Quel est votre âge?");
	
	if((majeur == true) && (age > 17))
	{
		alert("Vous dites la vérité!");
	}
	else
	{
		alert("Vous mentez!");
		majeur = false;
	}
	
	choix = prompt("Que préférez-vous (entrez le chiffre)? \n 1 - Les RPG \n 2 - Les shooters" + 
					"\n 3 - Les RTS \n 4 - Les MOBA")
	
	switch(choix)
	{
		case "1": 
			alert(nom + " a " + age + "ans et préfère les jeux de rôles!");
			break;
		case "2":
			alert(nom + " a " + age + "ans et préfère les jeux de tirs!");
			break;
		case "3":
			alert(nom + " a " + age + "ans et préfère les jeux de stratégies!");
			break;
		case "4":
			alert(nom + " a " + age + "ans et préfère les jeux d'arènes de combat!");
			break;
		default:
			alert(nom + " a " + age + "ans et ne sait pas entrer un chiffre entre 1 et 4!");
			break;
	}
}

function Exercice5()
{
	//Écrivez ici le code pour l'exercice 5
	alert("Salut, comment ça va?");
	var choix;
	choix = prompt("Faites votre choix entre les chiffres\n1- Bien\n2- Mentir\n3- Mal");
	switch(choix)
	{
		case "1": 
		var suite;
			suite = prompt("Très bien maintenant veuillez me dire qu'est-ce que vous faites? Faites votre choix entre les chiffres\n1- Je joues\n2- J'écoute la TV\n3- Je ne vais plus à l'école");
			switch(suite)
			{
				
				case "1":
				alert("Vous mentez!");
				break;
				case "2":
				alert("Wow votre vie est passionnante!");
				break;
				case "3":
				alert("Vous vendez tous?");
				var SamV = confirm("Si oui appuyer sur ok, sinon annuler.");			
				if (SamV == true)
				{
				alert("Bonjour Samuel!");
				}
				else
				{
				alert("Vous devriez le faire et partir à la recherche de votre raison d'être espèce de minable!");
			}				
			break;
			}
            break;			
		case "2":
			alert("Vous mentez!");
			var confirmation = confirm("Si vous mentez pour de vrai veuillez appuyer sur ok");
			if (confirmation == true)
			{
             alert("Vous dites enfin la vérité!");
			}
			else
			{
		     alert("Vous persister à mentir aller au diable!");
			}
			break;				
		case "3":
			alert("Vous devriez consulter quelqu'un.");
			var consulter;
			consulter = confirm ("consulter quelqu'un?");	
			if (consulter == true)
			{
			alert("Bravo!, voici le numéro : 418-557-2243.");
			}
			else
			{
			alert("Bonne chance avec votre vie merdique!");
			}
			break;
		default:
			alert("Veuillez entrez un chiffre entre 1 et 3!");
			break;
	}
	
}