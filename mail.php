<?php
if($_POST){ // si tu as une méthode post alors ...le script ne fera rien
  $firstname = $_POST['firstname'];
  $email = $_POST['email'];
  $name = $_POST['lastname'];
  $message = $_POST['message'];
  $headers = "MIME-Version: 1.0\r\n"; //permet de créer le header de notre mail, que le format de ce que l'on envoit est bien un mail
  $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
  $headers .= "From: $name <$email>\r\nReply-to : $name <$email>\nX-Mailer:PHP"; // pour dire de qui ça vient
  $subject="$objet";
  $destinataire="celine.jacquet54@free.fr";
  $body="$message";
  if(mail($destinataire,$subject,$body,$headers)) {
    $response['status'] = 'success';
    $response['msg'] = 'your mail is sent';
  } else {
    $response['status'] = 'error';
    $response['msg'] = 'Something went wrong';
  }
  echo json_encode($response); // encodé au format json car plus simple à traiter derrière
  // on parse les data
  // on crée des variables pour chacun des éléments
}
