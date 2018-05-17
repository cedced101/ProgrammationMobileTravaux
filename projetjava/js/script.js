//ajout des select par la fakeDB
remplirListeDeroulantes();

function remplirListeDeroulantes()
{
	//Remplir liste des divinitées
	remplirListe(document.getElementById("lstDiv"), fakeDB.listerDivinites());
	remplirListe(document.getElementById("lstRace"), fakeDB.listerRaces());
	remplirListe(document.getElementById("lstClass"), fakeDB.listerClasses());
}
// Maximum de 3 check
function MaxChck() 
{
	var a = document.getElementsByName("chk");
	var newvar = 0;
	var count;
	for(count = 0; count<a.length; count++){
		if(a[count].checked == true){
			newvar = newvar+1;
		}
	}
	if(newvar>=4){
		alert("maximum de 3 cases à cocher!");
		return false;
	}
}
//mdp caché
var changertest;
var hash;
function creationperso()
{
	var nomduj = document.getElementById("nomj").value;
	var pwdj = document.getElementById("pwdj").value;
	hash = fakeDB.hash(pwdj);
	fakeDB.creerJoueur(nomduj, pwdj);
	changertest = document.getElementById("submit").onclick = function(){
					location.href = "Consultation.html";};
					alert ("valide");	
}
//select alignement
var optalign;
var changalign;
var cpt;
function appel()
{
	changalign =document.getElementById("lstDiv").value;
	for(cpt = 0; cpt<= 36; cpt++)
	{
		if(changalign == fakeDB.listerDivinites()[cpt].Nom)
		{
			optalign= fakeDB.listerDivinites()[cpt].Alignement;
			var db =JSON.parse(localStorage.getItem("DB"));
			document.getElementById("align").value = db.tblAlignement[optalign].Morale;
		}		
	}
}
//select armes
var optarmes;
var changarmes;
var cpta;
function appelarmes()
{
	changarmes =document.getElementById("lstarmes").value;
	for(cpta = 0; cpta<= 34; cpta++)
	{
		if(changarmes == db.tblArme()[cpta].Nom)
		{
			optarmes= db.tblArme()[cpta].Nom;
			var db =JSON.parse(localStorage.getItem("DB"));
			document.getElementById("armes").value = db.tblAlignement[optarmes].Nom;
		}		
	}
}
//fonction pour taille max et min
function detTaille()
{
	for( var cptt = 0; cptt<=3; cptt++)
	{
		var cpt;
		var taillemax;
		var taillemin;
		var categtaille= document.getElementById("categtaille").value;
		var taille= document.getElementById("taille").value;
		var db = JSON.parse(localStorage.getItem("DB"));
		for(cpt=0; cpt<=2;cpt++)
		{
			if (categtaille==db.tblCategorieTaille[cpt].Nom)
			{
				taillemax= db.tblCategorieTaille[cpt].TailleMaxCm;
				taillemin= db.tblCategorieTaille[cpt].TailleMinCm;	
			}	
		}		
	}
	if (taille< taillemin || taille > taillemax)
		{
			alert("la taille doit etre en accord avec la categorie taille");
		}
}
//fonction pour poids max et min
function determinerpoid()
{
	var cpt;
	var poidsmin;
	var poidsmax;
	var categtaille= document.getElementById("categtaille").value;
	var poids= document.getElementById("poids").value;
	var db = JSON.parse(localStorage.getItem("DB"));
	for(cpt=0; cpt<=2;cpt++)
	{
		if (categtaille==db.tblCategorieTaille[cpt].Nom)
		{
			poidsmax= db.tblCategorieTaille[cpt].PoidsMaxKg;
			poidsmin= db.tblCategorieTaille[cpt].PoidsMinKg;	
		}	
	}
	if (poids< poidsmin || poids > poidsmax)
	{
		alert("le poids doit etre en accord avec la categorie taille");
	}
	
}
//select race
var race;
var cptr;
var optrace;
function appel2()
{
	race =document.getElementById("lstRace").value;
	for(cptr = 0; cptr<= 7; cptr++)
	{
		if(race == fakeDB.listerRaces()[cptr].Nom)
		{	
			optrace = fakeDB.listerRaces()[cptr].CategorieTaille;
			var db =JSON.parse(localStorage.getItem("DB"));		
			document.getElementById("categtaille").value = db.tblCategorieTaille[optrace].Nom;
		}
	}
}
//remplir les select
function remplirListe(idSelected, list)
{
	idSelected.innerHTML = "";
	

	for (var j = 0; j < list.length; j++)
    {
    	  var objetDivinite = list[j];
    	  var nom = objetDivinite.Nom;
    	  idSelected.options.length = list.length;

    	  idSelected.options[j].value = nom;
    	  idSelected.options[j].text = nom;
    }
}
//age max et min pour chaque race
function determinerage()
{
	var age = document.getElementById("age").value;
	var agemax;
	var agemin;
	var race = document.getElementById("lstRace").value;
	if(race == "Humain")
	{
		agemin = 15;
		agemax = 53;
	}
	if( age > agemin && age < agemax)
	{
		alert("Impossible, âge max pour race depassée");
	}
	
	
}
function AjouterInfo()
{
	document.getElementById("divinite").innerHTML+=divin.nom+"<br/>";
}
var divin=
{
	nom : '',

};
//regex pour creation
var utilisateur;
var passw;
            var	mail ;
			var uti;
			var reguti = /^([a-zA-Z0-9]{4,})*$/;
			var regpwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\$%\^&\*\-])(?=.{8,})/;
			var regnom = /^[A-Z]+(([-][A-Z])?[a-zA-Z]*)*$/;
			var regpren = /^[A-Z]+(([-][A-Z])?[a-zA-Z]*)*$/;
			var regemail = /(\w+\.+\w|\w)+\@(gmail|hotmail)\.(com|ca)/;
			var regtel = /\(\d{3}\)\d{3}-\d{4}$/;
			var regnais= /\d{4}-\1(0[1-9]|1[0-2])-[0-3]\d/;
			var regnomp = /^[a-zA-Z]{4,}$/;
			var reglang = /^[a-zA-Z]{4,}$/;
			var regniv = /^(([0-1]{1}[0-9]){1}|([2]{1}[0]{1}))$/;
			var regage = /^[0-9]{3}$/;
			var regtaille = /^[0-9]{3}$/;
			
			function testcreation(form,event)
			{
				appel();
				parseURLParams();
				creationperso();
				determinerage();
				event.preventDefault();
				return false;
			}
			function test1(form,event)
			{
			var uti = document.getElementById("username").value;
			var	pwd = document.getElementById("pwd").value;
			var nom = document.getElementById("nom").value;
			var pren = document.getElementById("prenom").value;			
			var	mail = document.getElementById("email").value;
			var tel = document.getElementById("tel").value;
			var nais = document.getElementById("birthday").value;
			var lang = document.getElementById("langues").value;
			var niv = document.getElementById("niveau").value;
			var nomp = document.getElementById("nomp").value;
			utilisateur = uti;
			passw = pwd;
			event.preventDefault();
			return false;
			}
			var couleur;
			var couleur2;
			function couleurs()
			{
				 couleur = document.getElementById("coloryeux").value;
				 couleur2 = document.getElementById("colorcheveux").value;
				document.getElementById("hexadecimalyeux").value = couleur;
				document.getElementById("hexadecimalcheveux").value = couleur2;
				
			}
			
			function hexa()
			{
				var hexa = document.getElementById("hexadecimalyeux").value;
				var hexa2 = document.getElementById("hexadecimalcheveux").value;
				document.getElementById("coloryeux").value= hexa;
				document.getElementById("colorcheveux").value= hexa2;
				
			}
			var	niv;
			function validationniv()
			{
				niv = document.getElementById("niveau").value;
				if(regniv.test(niv) == false)
				{
					alert("Ca marche pas niv");
				}
			}
			var	nomp;
			function validationnomp()
			{
				nomp = document.getElementById("nomp").value;
				if(regnomp.test(nomp) == false)
				{
					alert("Ca marche pas nomp");
				}
			}
			var	langue;
			function validationlang()
			{
				langue = document.getElementById("langues").value;
				if(reglang.test(langue) == false)
				{
					alert("Ca marche pas langue");
				}
			}
			
			function validationuti()
			{
				uti = document.getElementById("username").value;
				if (reguti.test(uti)== false)
				{
					alert("Ca marche pas uti");
				}
			}
			var pwd;
			function validationpwd()
			{
				pwd = document.getElementById("pwd").value;
				if (regpwd.test(pwd)== false)
				{
					alert("Ca marche pas pwd");
				}				
			}
			var nom;
			function validationnom()
			{
				nom = document.getElementById("nom").value;
				if (regnom.test(nom)== false)
				{
					alert("Ca marche pas nom");
				}
			}
			var pren;
			function validationpren()
			{
				pren = document.getElementById("prenom").value;			
				if (regpren.test(pren)== false)
				{
					alert("Ca marche pas pren");
				}
			}
			
			function validationmail()
			{
				mail = document.getElementById("email").value;
			if (regemail.test(mail)== false)
				{
					alert("Ca marche pas mail");
				}
			}
			var tel;
			function validationtel()
			{
				tel = document.getElementById("tel").value;
			if (regtel.test(tel)== false)
				{
					alert("Ca marche pas tel");
				}				
			}
			var nais;
			function validationnais()
			{
				nais = document.getElementById("birthday").value;
				if (regnais.test(nais)== false)
				{
					alert("Ca marche pas nais");
				}

			}
var uti1;
var pwd1;			
function test2(form,event)
			{					
				uti1 = document.getElementById("username11").value;
				pwd1 = document.getElementById("pwd11").value;
				
				
				if (utilisateur==uti1 && passw == pwd1)
				{	
					var changer = document.getElementById("submit").onclick = function(){
					location.href = "Creation.html";};
					alert ("valide");
					
				}
				
				else 	
				{			
					alert ("Rwrooaaaaaaaaaaa!");
				}					
			event.preventDefault();
			return false;				
			}

			//produit un nombre aléatoire de 1 à 6 pour les caractéristiques
			function getRandomInt()
			{
				var rndforce = document.getElementById("force");
				var rnddex = document.getElementById("dext");
				var rndconst = document.getElementById("const");
				var rndintel = document.getElementById("intel");
				var rndsag = document.getElementById("sag");
				var rndchar = document.getElementById("char");
				var rndSomme = document.getElementById("rndSomme");
				rndforce.value = (Math.round(Math.random() *5)+1);
				rnddex.value = (Math.round(Math.random() *5)+1);
				rndconst.value = (Math.round(Math.random() *5)+1);
				rndintel.value = (Math.round(Math.random() *5)+1);
				rndsag.value = (Math.round(Math.random() *5)+1);
				rndchar.value = (Math.round(Math.random() *5)+1);				
				document.getElementById("btnrandom").disabled = true;
				event.preventDefault();
			return false;
			}
function parseURLParams() {
    var url = window.location.href;
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}
