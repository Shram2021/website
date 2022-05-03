<?php
  if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $phone = $_POST['phone'];
    $city = $_POST['city'];
    $message = $_POST['message'];

    $mailTo = 'shram.io21@gmail.com';
    $subject = $_POST['subject'];
    $txt = '<strong>' . $name . '</strong><br>' . $mailFrom.'<br>' . $phone.'<br>' . $city . '<br><br> <strong>' . $subject.'</strong>:<br>' . $message;

    $headers = 'From: '.$mailFrom;
    $headers = "MIME-VERSION: 1.0" . "\r\n";
    $headers = "Content-type:text/html;charset=UTF-8" . "\r\n";

    $result = mail($mailTo, $subject, $txt, $headers);

    if ($result){
      header("Location: ../redirect_contact_form.html?mailsent");
    } else {
      print_r(error_get_last());
    }
  }
?>
