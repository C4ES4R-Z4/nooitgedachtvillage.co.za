<?php

header("Access-Control-Allow-Origin: *");

if($_POST) {
    $visitor_name = "";
    $visitor_email = "";
    $visitor_cell = "";
    $message = "";
    $source = "";
      
    if(isset($_POST['name'])) {
        $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    }
 
    if(isset($_POST['email'])) {
        $visitor_email = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['email']);
        $visitor_email = filter_var($visitor_email, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['cell'])) {
        $visitor_cell = str_replace(array("\r", "\n", "%0a", "%0d"), '', $_POST['cell']);
        $visitor_cell = htmlspecialchars($_POST['cell']);
    }
      
    if(isset($_POST['message'])) {
        $message = htmlspecialchars($_POST['message']);
    }

    if(isset($_POST['source'])) {
        $source = htmlspecialchars($_POST['source']);
    }


    $email_body = "<div>
    <h1>New Nooitgedacht Enquiry from -> ".$visitor_name."</h1>
    <div><b>Name:</b> ".$visitor_name."</div>
    <div><b>Email:</b> ".$visitor_email."</div>
    <div><b>Cell:</b> ".$visitor_cell."</div>
    <div><b>Message:</b> <div>".$message."</div></div>
    <div><b>Source of Enquiry:</b> ".$source."</div>
    <div><b>IP Address:</b> ".$_SERVER['REMOTE_ADDR']."</div>
    </div>";

    $recipient = "kem@remey.co.za";
          
    $subject = "Nooitgedacht Village Enquiry (Form)";
 
    $headers  = 'MIME-Version: 1.0' . "\r\n"
    .'Content-type: text/html; charset=utf-8' . "\r\n"
    .'From: ' . "<website@nooitgehdactvillage.co.za>" . "\r\n";
      
    if(mail($recipient, $subject, $email_body, $headers)) {
        echo "<p>Thank you for contacting us, $visitor_name. You will get a reply within 24 hours.</p>";
    } else {
        echo '<p>We are sorry but the email did not go through.</p>';
    }
      
} else {
    echo '<p>Something went wrong</p>';
}
?>