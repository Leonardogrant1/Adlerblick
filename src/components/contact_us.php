<?php
//send_email.php

if(isset($_POST['submit'])) {
$name = $_POST['Name'];
$vorname = $_POST['Vorame'];

$mailFrom = $_POST['Email'];   //Absender falls keiner angegeben wurde
$betreff = $_POST['Betreff'];
$anfrage = $_POST['Anfrage'];


$mailTo = "info@detektei-adlerblick.de";

$message = "Name: ".$name."\n Vorname: ".$vorname."\n Betreff: ".$betreff."\n\n Anfrage: ".$anfrage;

$headers = "Von: ".$mailFrom;
$txt = "Du hast eine Anfrage von ".$name." erhalten.\n\n".$message;

mail($mailTo, "Anfrage", $txt, $headers);

header("Location: index.php?mailsend");

echo '<script language="javascript">;';
echo 'alert("Ihre Nachricht wurde versendet")';
echo '</script>';


}