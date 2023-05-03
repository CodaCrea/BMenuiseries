<?php

header('Access-Control-Allow-Origin: *');
header('X-XSS-Protection: 1; mode=block');
header('X-Frame-Options "SAMEORIGIN" always');
header('X-Content-Type-Options nosniff');
header('Referrer-Policy: origin');
header('Permissions-Policy "geolocation=(),midi=(),sync-xhr=(),microphone=(),camera=(),magnetometer=(),gyroscope=(),fullscreen=(self),payment=()"');
ini_set('register_globals', false);

$json = file_get_contents('php://input');
$post = json_decode($json, true);
$curl = curl_init();
$link = 'https://demoweb.go.yo.fr/rating.php';
$name = $post["name"];
$firstName = $post["firstName"];
$email = $post["email"];
$object = $post["object"];
$message = $post["message"];
$phone = $post["phone"];
$checkbox = $post["check"];

curl_setopt($curl, CURLOPT_URL, $link);
curl_setopt($curl, CURLOPT_COOKIESESSION, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($curl, CURLOPT_POSTFIELDS, $name);
curl_setopt($curl, CURLOPT_POSTFIELDS, $firstName);
curl_setopt($curl, CURLOPT_POSTFIELDS, $email);
curl_setopt($curl, CURLOPT_POSTFIELDS, $message);
curl_setopt($curl, CURLOPT_POSTFIELDS, $checkbox);

if (isset($name)) {
  $allPost = "Ce mail a été envoyé via la page avis du site web.

  Nom : " . $name . "
  Prénom : " . $firstName . "
  Email : " . $email . "

  " . htmlspecialchars($message);

  mail("bouteille.menuiseries@gmail.com", "Avis client",  $allPost, "FROM: Avis@website.fr" . "\r\nReply-to:" . $email);
  echo "Envoi effectué avec succès";
}
