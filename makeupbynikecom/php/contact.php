<?php

if(isset($_POST['submit'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];

    $mailTo = "nike.ohm@gmx.de";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from ".$fname".\n\n".$message;

    mail($mailTo, $subject, $message, $headers);
    header("Location: index.html?mailsend");
}

