<?php

  include('smtpmail/class.phpmailer.php');
  include('constants.php');

    $name    = $_POST['name'];
    $phone   = $_POST['phone'];
    $email   = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

   $config = new MailConfig;

    /*
    * @uses     function to send activation link mail to client
    * @params   $clientEmail(client mail id),$clientName (client name)
    */

    $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
    try {
        $mail->IsSMTP();                           // enable SMTP
        // $mail->SMTPDebug 	= 1;               // debugging: 1 = errors and messages, 2 = messages only
        $mail->SMTPAuth   = true;            // authentication enabled
        $mail->SMTPSecure = $config->smtpSecure;           // secure transfer enabled REQUIRED for GMail
        $mail->Host 	  = $config->smtpHost;
        $mail->Port 	  = 465;        
        $mail->IsHTML(true);
        $mail->Username   = $config->smtpUname;
        $mail->Password   = $config->smtpPword;
        $mail->setFrom($config->smtpUname, $config->smtpName);
        $mail->Subject 	  = $config->mailSubject;       
        $mail->Body  = include('mailTemplate.php');
        $mail->addAddress($config->toEmailId, $config->toUserName);
        if($mail->Send()){
            echo json_encode('success');
        }else{
            echo json_encode('failed');
        }
    } catch (Exception $e) {
        echo json_encode('failed');
        // echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
?>