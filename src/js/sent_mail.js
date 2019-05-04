//send mail with ajax
$('#send_email').click(function(e) {
    e.preventDefault(); // pour éviter que la page se recharge
    var data = { //variable data qui va être un objet - prend chaque id du formulaire et sa valeur
            email: $('#email').val(),
            name: $('#lastname').val(),
            message: $('#message').val()
        }
        //ajax 
    $.ajax({ // Ajax c'est une méthode de JQUERY -> Va nous aider à créer une méthode en post(on va envoyé des data) 
        //get(on vient chercher des datas)  put (modifier) delete (effacer)
        url: "mail.php", // on va avoir besoin d'envoyer à un url -> va etre envoyé vers notre fichier mail.php qui va ensuite traité le formulaire
        type: 'POST', // on lui envoit une méthode post car on lui envoit des données
        data: data, // on lui envoit quelles données ? des datas
        success: function(data) { // ajax va nous donner une réponse une fois qu'il a reçu les données
            $('#js_alert_success').css({ 'display': 'block' }); //soit une réponse qui est un succès -> c'est ce qu'on appelle les callback
            // on affiche une div qui était cachée :"Succès"
            setTimeout(function() {
                $('#js_alert_success').css({ 'display': 'none' });
                $('#email').val(""); // on vide les champs du formulaire
                $('#lastname').val("");
                $('#message').val("")
            }, 3000); //compteur qui attend 3sec et qui remet le message de succès en invisible
        },
        error: function(data) { //soit une réponse qui est une erreur
            $('#js_alert_danger').css({ 'display': 'block' });
            setTimeout(function() {
                $('#js_alert_danger').css({ 'display': 'none' });
                $('#email').val("");
                $('#lastname').val("");
                $('#message').val("")
            }, 3000);
        }
    });
});