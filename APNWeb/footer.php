  <!-- Footer starts -->
    <footer>
      <div class="container">
        <div class="row footerRow">
          <div class="col-sm-12 col-md-4 paddAll footerLogo">
            <img src="images/APN_logo.png">
          </div>
          <div class="col-sm-12  col-md-8 paddAll footercontent">
            <div class="textAlignRight">Developed Proprietary &</div>
            <div class="textAlignRight">Patented Software Algorithms</div>
            <div class="textAlignRight">For 3D Mapping To Improve Outcomes For</div>
            <div class="textAlignRight">Cardiac Arrhythmia Patients Around The Globe</div>
          </div>
        </div>
        <div class="row footerRow margBotm">
          <div class="col-sm-12  col-md-4  location">
            <div class="font-montserrat-medium-font14">APN HEALTH</div>
            <div class="font-montserrat-light-font14">20935 Swenson Drive Suite 160</div>
            <div class="font-montserrat-light-font14">Waukesha, WI 53186</div><br>

            <div class="site-version">740-00626 March 2019</div>
            <br>
            <div class="font-montserrat-light-font14">Caution: Federal law restricts this device (Navik 3D) to sale by or on the order of a physician</div><br>
            <div class="font-montserrat-light-font14">Copyright 2019 APN Health, LLC</div>
          </div>
          <div class="col-sm-12  col-md-4 margTop28">
            <div class="font-montserrat-medium-font18 phone"><img src="images/phone_red.png" />&nbsp;&nbsp;&nbsp;1-844-276-8713</div><br>
            <div class="font-montserrat-light-font18 email"><img src="images/email_red.png" />&nbsp;&nbsp;&nbsp;support@apnhealth.com</div>
          </div>
          <div class="col-sm-12  col-md-4 margTop78 text-right">
            <div class="font-montserrat-medium-font18 social">
              <a href="javascript:void()" class="disabled-item"> <img src="images/fb_f.png" class="margRight15" /></a>
              <a href="javascript:void()"  class="disabled-item"> <img src="images/g+.png" class="margRight15" /></a>
              <a href="https://www.linkedin.com/company/apn-health" target="_blank"> <img src="images/in_f.png" class="margRight15" /></a>
              <a href="https://www.twitter.com/@ApnHealth"  target="_blank"> <img src="images/twitter_f.png" class="margRight15" /></a>
              
            </div>
          </div>
        </div>
        <a href="#scrollup" id="scrollup" title="Go to top" class="scrollToTop scrollup"><i class="fa fa-lg fa-angle-up icon-style"></i></a>
      </div>

    </footer>
    <!-- Footer ends -->
  <!-- Script -->
  <!-- <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script> -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
    crossorigin="anonymous"></script>
  <script src="js/bootstrap.min.js" crossorigin="anonymous"></script>
  <script src="js/sweetAlert2.js"></script>
  <!-- <script src="js/index.js"></script> -->
  <script>
    function fbs_click() {u=location.href;t=document.title;window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');return false;}
  </script>
  <script src="js/wow.js"></script>
  <script>

  // ========= MENU HIGHTLIGHT =========  //
  $(document).ready(function(){
    var currPage = window.location.pathname.split("/")[1];
     $(".nav-item."+currPage+"-menu .nav-link").addClass("active");   
  });
  // ========= XXXXXXXXXXXXXXX =========  //
    wow = new WOW(
      {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
    $(function(){$(".scrollToTop").click(function(){$("html,body").animate({scrollTop:$(".thetop").offset().top},"1000");return false})})
   
  </script>

</body>

</html>
