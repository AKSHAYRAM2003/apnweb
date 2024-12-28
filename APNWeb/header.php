<!doctype html>
<html lang="en">

<head>
  <!-- Required meta tags -->
  
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="format-detection" content="telephone=no">
  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="css/bootstrap.min.css" crossorigin="anonymous">
  <link rel="icon" href="./images/favicon.ico" type="image/gif" sizes="16x16">
  <link rel="canonical" href="https://alexcican.com/post/single-post">
  <link rel='stylesheet' href='https://unpkg.com/font-awesome@4.7.0/css/font-awesome.min.css'>
  <link rel="stylesheet" href="css/sweetAlert2.css" />
  <link rel="stylesheet" href="css/common.css">
  <link rel="stylesheet" href="css/header.css">
  <link rel="stylesheet" href="css/footer.css">
  <link rel="stylesheet" href="css/animate.css">
  <link rel="stylesheet" href="css/styles.css">

  <title>APN Website</title>
</head>

<body>
  <?php include('constants.php');?>
  
  <!-- NavBar  starts-->

    <!-- NavBar  starts-->
    
  <nav class="navbar navbar-expand-lg navbar-light thetop fixed-top" style="background-color: #ffffff;">
    <a class="navbar-brand" href="#">
      <img src="./images/APN_logo.png" class="apn-nav-image" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mx-auto mt-2 mt-lg-0">
        <li class="nav-item home-menu">
          <a class="nav-link" href="<?php echo HOME; ?>">HOME
          </a>
        </li>         
        <li class="nav-item dropdown about_us-menu team-menu">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown"   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        ABOUT US
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="<?php echo ABOUTUS; ?>">PROFILE</a>
          <a class="dropdown-item" href="<?php echo TEAM; ?>">TEAM</a>           
        </div>
      </li>    
        <li class="nav-item partners-menu">
          <a class="nav-link " href="<?php echo PARTNERS; ?>">PARTNERS</a>
        </li>
        <li class="nav-item social-media-menu">
          <a class="nav-link " href="<?php echo SOCIALMEDIA; ?>">SOCIAL MEDIA</a>
        </li>
 <li class="nav-item privacy-policy-menu">
          <a class="nav-link " href="<?php echo PRIVACYPOLICY; ?>">PRIVACY POLICY</a>
        </li>
      </ul>   
       <a href="mailto:support@apnhealth.com" class="btn  my-2 my-sm-0 navbar-button support"   id="mailSupport">
           <img src="images/email.png" class="navbar-red" alt=""> support@apnhealth.com
       </a>
      <a href="javascript:void()" class="btn  my-2 my-sm-0 ml-2 navbar-button calBtnHead no-click">
        <img src="images/phone-call.png" class="navbar-red" alt=""> 1-844-276-8713
      </a>
    </div>
  </nav>

  <!-- Navbar ends -->
