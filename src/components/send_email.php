<?php
//send_email.php

if(isset($_POST['submit'])) {
$name = $_POST['Name'];
$vorname = $_POST['Vorame'];

$mailFrom = $_POST['Email'];   //Absender falls keiner angegeben wurde
$street = $_POST['Straße'];
$ort = $_POST['Ort'];

$qualis = $_POST['Qualifikationen'];
$tätigkeiten = $_POST['Tätigkeiten'];

$mailTo = "bewerbung@detektei-adlerblick.de";

$message = "Name: ".$name."\n Vorname: ".$vorname."\n Adresse: ".$street.", ".$ort."\n\n Qualifikationen: ".$qualis."\n\n Bisherige Tätigkeiten: ".$tätigkeiten;

$headers = "Von: ".$mailFrom;
$txt = "Du hast eine Bewerbung von ".$name." erhalten.\n\n".$message;

mail($mailTo, "Bewerbung", $txt, $headers);

header("Location: index.php?mailsend");

echo '<script language="javascript">;';
echo 'alert("Ihre Nachricht wurde versendet")';
echo '</script>';

}