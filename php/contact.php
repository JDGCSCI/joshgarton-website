<?php
    $to = "joshua.d.garton@gmail.com";
    $subject = $_POST['nameInput']." (".$_POST['emailInput'].")"." Contacted You!";
    $message = $_POST['messageInput'];

    mail($to, $subject, $message);
?>