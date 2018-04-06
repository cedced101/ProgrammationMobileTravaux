			var utilisateur;
            var	mail ;
			var uti;
			var reguti = /^([a-zA-Z0-9]{5,})*$/;
			var regpwd = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#\$%\^&\*\-])(?=.{8,})/;
			var regnom = /^[A-Z]+(([-][A-Z])?[a-zA-Z]*)*$/;
			var regpren = /^[A-Z]+(([-][A-Z])?[a-zA-Z]*)*$/;
			var regemail = /(\w+\.+\w|\w)+\@(gmail|hotmail)\.(com|ca)/;
			var regtel = /\(\d{3}\)\d{3}-\d{4}$/;
			var regnais= /\d{4}-\1(0[1-9]|1[0-2])-[0-3]\d/;
			var regadresse= /[0-9]{0,5} [aA-zZ]* (chicoutimi|jonquiere|alma) quebec canada [aA-zZ{1}]+[0-9{1}]+[aA-zZ{1}]+[0-9{1}]+[aA-zZ{1}]+[0-9{1}]$/;
			function test (form,event)
			{
			var passw;
			var uti = document.getElementById("username").value;
			var	pwd = document.getElementById("pwd").value;
			var nom = document.getElementById("nom").value;
			var pren = document.getElementById("prenom").value;			
			var	mail = document.getElementById("email").value;
			var tel = document.getElementById("tel").value;
			var nais = document.getElementById("birthday").value;
			var adr = document.getElementById("adresse").value;
			var noms = document.getElementById("noms").value;
			var mail2 = document.getElementById("mail2").value;
			utilisateur = uti;
			passw = pwd;
			event.preventDefault();
			return false;
			}
			function validationmail2()
			{
				mail2 = document.getElementById("mail2").value;
			if (regemail.test(mail2)== false)
				{
					alert("Ca marche pas mail");
				}
			}	
			function validationnoms()
			{
				var noms = document.getElementById("noms").value;
				if (regnom.test(noms)== false)
				{
					alert("Ca marche pas nom");
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
			function validationpwd()
			{
				var	pwd = document.getElementById("pwd").value;
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
				mail = document.getElementById("email").value;
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
			function validationadr()
			{
				var adr = document.getElementById("adresse").value;
				if (regadresse.test(adr)== false)
				{
					alert("Ca marche pas adr");
				}
			}
			function test1 (form,event)
			{
				var uti1;
				var pwd1;	
				uti1 += document.getElementById("username1").value + "\n";
				pwd1 += document.getElementById("pwd1").value + "\n";
				
				if (utilisateur==uti1 && passw == pwd1)
				{	
					alert ("valide")
				}
				else 	
				{			
					alert ("Rwrooaaaaaaaaaaa!")
				}						
			}			
			var TabProduits = ["SubaruWRX", "Ordinateur", "Guitar", "Systèmedeson", "Âme"];
			var TabPrix = [7000,1000,500,300,1];
			var produit=" ";
			var Total=" ";
			var nom=" ";
			function couleurs()
			{
				var couleur = document.getElementById("color").value;
				document.getElementById("hexadecimal").value = couleur;
			}
			function hexa()
			{
				var hexa = document.getElementById("hexadecimal").value;
				document.getElementById("color").value= hexa;
			}
			function product()
			{
				produit=" ";
				var quant = document.getElementById("quant").value;
				var produit = document.getElementById("prod").selectedIndex;
				var prix;
				var taxe;
						prix = TabPrix[produit];					

				prix=prix*quant;
				taxe=prix*0.15;
				Total=prix+taxe;
				
				
				
				document.getElementById('stotal').value= prix;
				document.getElementById('taxe').value= taxe;
				document.getElementById('total').value= Total;
			}
			
			
			
			
			
			
			
			
			