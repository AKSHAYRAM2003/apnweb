<?php 

    /************LOCAL URL********************/
     define('HOME', 'home.php');
     define('ABOUTUS', 'about_us.php');
     define('TEAM', 'team.php');
     define('TECHNOLOGY', 'technology.php');
     define('NAVIK3D', 'navik3d.php');
     define('PARTNERS', 'partners.php');
     define('SOCIALMEDIA', 'social-media.php');

    /************LIVE URL********************/
    // define('HOME', 'home');
    // define('ABOUTUS', 'about_us');
    // define('TEAM', 'team');
    // define('TECHNOLOGY', 'technology');
    // define('NAVIK3D', 'navik3d');
    // define('PARTNERS', 'partners');
    // define('SOCIALMEDIA', 'social-media');


	define('BASEURL','http://182.72.213.125:3965/social-media.php');

    // define('BASEURL','http://localhost/apn/APNwebsite/');

    /************Jasbir Sra Social Media URL's**************** */
    define('JASBIRSRALINKURL', '#');
    define('JASBIRSRAFBURL', '#');
    define('JASBIRSRATWURL', '#');

    /************David Geddam Social Media URL's**************** */
    define('DAVIDVPLINKURL', 'https://www.linkedin.com/in/davidgeddam');
    define('DAVIDVPFBURL', '#');
    define('DAVIDVPTWURL', '#');

    
    /************David Krum Social Media URL's**************** */
    define('DAVIDKRUMLINKURL','https://www.linkedin.com/in/david-krum-a0721366');
    define('DAVIDKRUMFBURL', '#');
    define('DAVIDKRUMTWURL', '#');

    /************Christopher Borg Social Media URL's**************** */
    define('CHRISBORGLINKURL', '#');
    define('CHRISBORGFBURL', '#');
    define('CHRISBORGTWURL', '#');

    /************************MAIL CONFIGURE ***************************************/
    Class MailConfig {
        public $smtpSecure = 'ssl';
        public $smtpHost = 'smtp.gmail.com';
        public $smtpName = 'APN HEALTH';
        public $smtpUname = 'support@apnhealth.com';
        public $toEmailId = 'support@apnhealth.com';
        public $toUserName = 'APN HEALTH';
        public $smtpPword = 'testing@123';
        public $mailSubject = 'APNHealth Website Request';
    }
?>
