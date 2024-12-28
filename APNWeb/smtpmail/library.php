<?php
/*
 * @user : Configurations to send email
 */

//error_reporting(0);
define("SMTP_HOST", "smtp.gmail.com");              //Hostname of the mail server
define("SMTP_PORT", 465);                          //Port of the SMTP like to be 25, 80, 465 or 587
define("SMTPAuth",true);
define("SMTPSecure",'ssl');
define("SMTP_UNAME", "ekaart.signup@gmail.com"); //Username for SMTP authentication any valid email created in your domain
define("SMTP_PWORD", "triassic2015");               //Password for SMTP authentication 
?>