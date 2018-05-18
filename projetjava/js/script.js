//ajout des select par la fakeDB
remplirListeDeroulantes();

function remplirListeDeroulantes()
{
	//Remplir liste des divinitées
	remplirListe(document.getElementById("lstDiv"), fakeDB.listerDivinites());
	remplirListe(document.getElementById("lstRace"), fakeDB.listerRaces());
	remplirListe(document.getElementById("lstClass"), fakeDB.listerClasses());
	remplirListe(document.getElementById("lstarmes"), fakeDB.listerArmesPourTaille());
	remplirListe(document.getElementById("lstarmures"), fakeDB.listerArmuresPourTaille());
}
// Maximum de 3 check
function MaxChck() 
{
	var a = document.getElementsByName("chk");
	var newvar = 0;
	var count;
	for(count = 0; count<a.length; count++)
	{
		if(a[count].checked == true)
		{
			newvar = newvar+1;
		}
	}
	if(newvar>=4)
	{
		alert("maximum de 3 cases à cocher!");
		return false;
	}
}
//mdp caché
var changertest;
var hash;
function creationperso()
{
	var nomj = document.getElementById("nomj").value;
	var pwdj = document.getElementById("pwdj").value;
	hash = fakeDB.hash(pwdj);
	fakeDB.creerJoueur(nomj, pwdj);
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
	var db =JSON.parse(localStorage.getItem("DB"));
	for(cpta = 0; cpta<= 34; cpta++)
	{
			if (frm.lstarmes.selectedIndex == true)
			{
				var secarmes = document.createElement("section");
				contenu.appendChild(secarmes);
				optarmes= db.tblArme()[cpta].Nom;
				secarmes = db.tblArme[optarmes].Nom;
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
//regex
var regpwdj = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\$%\^&\*\-])(?=.{8,})/;
var regnomj = /^([a-zA-Z0-9]{4,})*$/;
var reguti = /^([a-zA-Z0-9]{4,})*$/;
var regpwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\$%\^&\*\-])(?=.{8,})/;
var regnom = /^[a-zA-Z]{4,}$/;
var regpren = /^[a-zA-Z]{4,}$/;
var regemail = /(\w+\.+\w|\w)+\@(gmail|hotmail)\.(com|ca)/;
var regtel = /\(\d{3}\)\d{3}-\d{4}$/;
var regnais= /\d{4}-\1(0[1-9]|1[0-2])-[0-3]\d/;
var regnomp = /^[a-zA-Z]{4,}$/;
var reglang = /^[a-zA-Z]{4,}$/;
var regniv = /^(([0-1]{1}[0-9]){1}|([2]{1}[0]{1}))$/;
var regage = /^[0-9]{3}$/;
var regtaille = /^[0-9]{3}$/;
//var pour connexion
var utilisateur;
var passw;
function testcreation(form,event)
{
	var lang = document.getElementById("langues").value;
	var niv = document.getElementById("niveau").value;
	var nomp = document.getElementById("nomp").value;
	var nomj = document.getElementById("nomj").value;
	var pwdj = document.getElementById("pwdj").value;
	event.preventDefault();
	return false;
}
function test1(form,event)
{
	var uti = document.getElementById("username").value;
	var pwd = document.getElementById("pwd").value;
	var nom = document.getElementById("nom").value;
	var pren = document.getElementById("prenom").value;			
	var mail = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var nais = document.getElementById("birthday").value;
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
function validationniv()
{
	var niv = document.getElementById("niveau").value;
	if(regniv.test(niv) == false)
	{
		alert("Ca marche pas niv");
	}
}
function validationnomp()
{
	var nomp = document.getElementById("nomp").value;
	if(regnomp.test(nomp) == false)
	{
		alert("Ca marche pas nomp");
	}
}
function validationlang()
{
	var lang = document.getElementById("langues").value;
	if(reglang.test(lang) == false)
	{
		alert("Ca marche pas langue");
	}
}
function validationnomj()
{
	var nomj = document.getElementById("nomj").value;
	if (regnomj.test(nomj)== false)
	{
		alert("Ca marche pas nomj");
	}
}
function validationpwdj()
{
	var pwdj = document.getElementById("pwdj").value;
	if (regpwdj.test(pwdj)== false)
	{
		alert("Ca marche pas pwdj");
	}				
}
function validationuti()
{
	var uti = document.getElementById("username").value;
	if (reguti.test(uti)== false)
	{
	alert("Ca marche pas uti");
	}
}
function validationpwd()
{
	var pwd = document.getElementById("pwd").value;
	if (regpwd.test(pwd)== false)
	{
		alert("Ca marche pas pwd");
	}				
}
function validationnom()
{
	var nom = document.getElementById("nom").value;
	if (regnom.test(nom)== false)
	{
		alert("Ca marche pas nom");
	}
}
function validationpren()
{
	var pren = document.getElementById("prenom").value;			
	if (regpren.test(pren)== false)
	{
		alert("Ca marche pas pren");
	}
}	
function validationmail()
{
	var mail = document.getElementById("email").value;
	if (regemail.test(mail)== false)
	{
		alert("Ca marche pas mail");
	}
}
function validationtel()
{
	var tel = document.getElementById("tel").value;
	if (regtel.test(tel)== false)
	{
		alert("Ca marche pas tel");
	}				
}
function validationnais()
{
	var nais = document.getElementById("birthday").value;
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
function genererStats()
{
    document.getElementById("force").value = genNbreAlea();
    document.getElementById("dext").value = genNbreAlea();
    document.getElementById("const").value = genNbreAlea();
    document.getElementById("intel").value = genNbreAlea();
    document.getElementById("sag").value = genNbreAlea();
    document.getElementById("char").value = genNbreAlea();
    document.getElementById("genCarac").disabled = "disabled";
}

function genNbreAlea()
{
    var random1 = Math.floor(Math.random() * Math.floor(6)+1);
    var random2 = Math.floor(Math.random() * Math.floor(6)+1);
    var random3 = Math.floor(Math.random() * Math.floor(6)+1);
    return random1.toString() + "," + random2.toString() + "," +  random3.toString();
}

document.getElementById("genCarac").addEventListener("click", function () {
genererStats();
});
function parseURLParams() 
{
    var url = window.location.href;
    var queryStart = url.indexOf("?") + 1,
    queryEnd   = url.indexOf("#") + 1 || url.length + 1,
    query = url.slice(queryStart, queryEnd - 1),
    pairs = query.replace(/\+/g, " ").split("&"),
    parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++)
	{
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) 
		{	
			parms[n] = [];
			parms[n].push(nv.length === 2 ? v : null);
		}
    }
return parms;
}
function idPersonnage()
{
    var id;
    var db = JSON.parse(localStorage.getItem("DB"));
    if(db.tbltblPersonnage == undefined)
    {
        id = 0;
    }
    else
    {
        var tabPersonnages = db.tbltblPersonnage;
        id = db.tabPersonnage.length;
    }    
    return id;
}
function verifierCompetances()
{
    var competance = document.getElementsByName("compet");
    var tabCompet = [];
    var caracCompet = "";
    for(var item of competance)
    {
        if(item.checked == true)
        {
            tabCompet.push(item.value);
        }
    }
    if(tabCompet.length > 3 || tabCompet.length == 0)
    {
        return false;
    }
    else
    {   
        caracCompet += tabCompet[0];
        for(var i = 1; i < tabCompet.length; i++)
        {
            caracCompet += "|" + tabCompet[i];
        }       
        return caracCompet;  
    }
}