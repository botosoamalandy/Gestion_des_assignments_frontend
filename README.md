# Botosoamalandy

##DOCUMENTATION DU PROJET FRONTEND GESTION DES ASSIGNMENTS

. Pour que ce projet fonctionne sur votre ordinateur, il faut cloner les sources sur github.

. Lancez ensuite la commande « npm install » dans le projet afin d'installer les modules.

. Après avoir installé les modules, vous pouvez lancer le FRONTEND de l'application en 		exécutant la commande "ng serve ". Puis il suffit d'entre le lien `http://localhost:4200/` dans le navigateur pour naviguer  dans l'application GESTION ASSIGNMENT.

. Les fonctionnalités
		- Login : pour accéder au page d'accueil de l'application, les utilisateurs doivent se connecter à leur compte.
		- Inscription : Si l'utilisateur ne possede pas encors de compte, il ou elle peut s'inscris en tant qu'etudiant ou professeur.	
		- Page d'accueil
			* Menu : on peut trouvé les liens pour la liste et l'ajout d'assignment,et le lien pour voir les informations du compte d'utilisateur connécté ou de déconnecter du compte.
			* Liste des assignment non rendu : on peut voir toutes les assignments (avec pagination). Si l'utilisateur est un adminstrateur alors , ils ou elles peuvent supprimer ou de modifier (les assignment peuvent être rendu en modifiant la note) les assignment.
			* Liste des assignment rendu : une fois notée , on peut voir les assignments dans la liste des assignments rendus. On peut aussi voir les détails de l'assignment.
			Les assignments rendus peuvent être supprimés.	
			* Ajouter un nouveau assignment : Il suffit de clique sur le menu Ajout et de completé le formulaire de clique sur le bouton "Enregistrer".
			* Edit assignment : editer les assignments non rendu : ajouter de note et la date de rendu.
			* Detail assignment : page qui montre les détails correspond à un assignment déjà rendu.
			* Profil utilisateur : accéder depuis le nom de famille de l'utilisateur dans l'icon compte du menu.Affiche les informations correspond à cet utilisateur connécté.
			* Logout : accéder depuis le bouton Logout dans l'icon compte du menu.
				Déconnexion automatique si l'expiration de token d'authentification est atteint.
				
	4-BIOBLIOGRAPHIE
		* Pour jwt node , decodage du token et le cryptage du mode passe :  j'ai utilisé des codes de mes anciens projets (Projet 2 émé année S5) 

		* login : https://codepen.io/aecend/pen/JoLzqr

		* Template user : https://www.egrappler.com/edmin/index.html

		* pagination avec rendu ou non_rendu: https://www.npmjs.com/package/mongoose-aggregate-paginate
		https://www.ganatan.com/tutorials/lazy-loading-avec-angular

		* pagination front : https://www.remotestack.io/angular-server-side-pagination-with-ngx-pagination-example/

		* jointure : https://docs.mongodb.com/manual/core/aggregation-pipeline-optimization/
		* dialogConfirmation : https://stackblitz.com/edit/mat-dialog-example-delete-confirm-4ygtyz?file=app%2Fconfirmation-dialog.component.ts
    
    Compte admnistrateur :
    * nom utilisateur : Boto
    * mot de passe : Malandy01#
    Compte etudiant :
    * nom utilisateur : botosoamalandy
    * mot de passe : Malandy01#

	
