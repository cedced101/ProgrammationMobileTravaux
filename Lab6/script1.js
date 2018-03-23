			var utilisateur;
			var passw;
			
			function test (form,event)
			{
				var uti;
			



			var pwd;	
				uti += document.getElementById("username").value + "\n";
				pwd += document.getElementById("pwd").value + "\n";
				utilisateur = uti;
				passw = pwd;
				document.getElementById("username").value;
				event.preventDefault();
				return false;
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
			
			
			
			var TabProduits = ["SubaruWRX", "Ordinateur", "Guitar", "Système de son", "Âme"];
			var TabPrix = [7000,1000,500,300,1];
			var produit=" ";
			var quant
			var Total=" ";
			var nom=" ";
			function Exercice2 (form,event)
			{
				produit=" ";
				var adresse=" ";				
				quant=" ";				
				var prix;
				produit += form.prod.options[form.prod.selectedIndex].value;
                quant=form.quant.options[form.quant.selectedIndex].value;
                adresse += document.getElementById("adresse").value;
				nom += document.getElementById("name").value;
				Exercice2suite (form,event);
				alert("Commande passée pour" +produit+" x"+quant+" au prix de "+Total+" $. La livraison ce fera au "+adresse+ " d'ici quelques jours. Merci beaucoup "+nom+"!");
				event.preventDefault();
				
				 
			}
			var quant;
			var prix;
			function Exercice2suite (form,event)
			{
				produit=" ";
				
				
				quant=form.quant.options[form.quant.selectedIndex].value;
				produit = form.prod.options[form.prod.selectedIndex].value;				
				var taxe;				
				for (var cpt =0; cpt<5; cpt++)
				{
					if(produit == TabProduits[cpt])
					{
						prix = TabPrix[cpt];
						
					}
				}
				prix=prix*quant;
				taxe=prix*0.15;
				Total=prix+taxe;
				
				
				
				document.getElementById('stotal').value= prix;
				document.getElementById('taxe').value= taxe;
				document.getElementById('total').value= Total;
				event.preventDefault();
			}
			
			
			
			
			
			
			
			
			