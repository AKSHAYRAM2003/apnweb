// $('.navbar-nav .nav-link').click(function(){
//     $('.navbar-nav .nav-link').removeClass('active');
//     $(this).addClass('active');
// })

$(document).ready(function () {

/***********Validation for Email*********** */
  $('form input[name="DemoCustomerEmail"]').blur(function () {
    var email = $(this).val();
    var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (expr.test(email)) {
      $('.demomailSend').removeAttr('disabled', 'disabled');
      $('.valEmailErr').html('');
      $('.valEmailErr').removeClass("active");
    } else {
      $('.demomailSend').attr('disabled','disabled');
      $('.valEmailErr').addClass("active");
      $('.valEmailErr').html('Email is not valid');
    }
  });

  $( "#DemoCustomerPhone" ).keypress(function(key) {
    if(key.charCode < 48 || key.charCode > 57) return false;
    // var expr = /^[0-9]*$/;
    // if (expr.test($(this).val())) {
    //   $('.demomailSend').removeAttr('disabled', 'disabled');
    //   $('.valPhoneErr').html('');
    //   $('.valPhoneErr').removeClass("active");
    // }
    // else{
    //   $('.demomailSend').attr('disabled', 'disabled');
    //   $('.valPhoneErr').addClass("active");
    //   $('.valPhoneErr').html('Phone No is not valid');
    // }
  });

   $('form input[name="DemoCustomerPhone"]').blur(function () {
    var phone = $(this).val();
    // var expr = /[0-9 -()+]+$/;
    var expr = /^[0-9]*$/;

    
    if (phone.length < 10) {
      $('.demomailSend').attr('disabled', 'disabled');
      $('.valPhoneErr').addClass("active");
      $('.valPhoneErr').html('Phone No must be 10 number long');
    } 
    else {
      if (expr.test(phone)) {
        $('.demomailSend').removeAttr('disabled', 'disabled');
        $('.valPhoneErr').html('');
        $('.valPhoneErr').removeClass("active");
      } else {
        $('.demomailSend').attr('disabled', 'disabled');
        $('.valPhoneErr').addClass("active");
        $('.valPhoneErr').html('Phone No is not valid');
      }
    }
  });

/****************** To activated nav bar**************************************/
  var url = window.location.pathname;
  var urlSplit = url.match(/[^\/]*$/);
  $('ul.navbar-nav li.nav-item').parent().addClass('active');
  $('ul.navbar-nav li.nav-item a[href="'+ urlSplit +'"]').parent().addClass('active');
  $('ul.navbar-nav li.nav-item a[href="'+ urlSplit +'"]').addClass('active');


/****************** Expand card content **************************************/
  $(".card-body .more").click(function(){
    $(".line-clamp").removeClass("active");
    $(this).parent(".card-body").children(".line-clamp").addClass("active");
  })

  $(window).click(function() {
    $(".line-clamp").removeClass("active");
    });
    
    $('.card-body .more').click(function(event){
        event.stopPropagation();
    });

/****************** Navik 3D Feature content  **************************************/

  $(function(){
    // var navik3dItems  = $(".navikFeatureCarousel .carousel-item .card-text");
    // var moreBtns  = $(".navikFeatureCarousel .carousel-item .more");
    // var  navik3dContents = [];
    //   for(i = 0;i<navik3dItems.length; i++){
    //     // navik3dContents[i] = navik3dItems[i].innerHTML;
    //        navik3dContents[i] = navik3dItems[i].innerHTML;

    //     // var moreBtn = moreBtns[i];      
    //     // navik3dContents[i].length > 167? moreBtn.addClass("active"): moreBtn.removeClass("active");
    // }

  });





 
   

});


function sendMail() {
  var name = $('.DemoCustomerName').val();
  var phone = $('.DemoCustomerPhone').val();
  var email = $('.DemoCustomerEmail').val();
  var subject = $('.DemoCustomerSubject').val();
  var message = $('.DemoCustomerMessage').val();
  if(name == "") {
    $('.DemoCustomerName').addClass('form_active');
    $('.DemoCustomerPhone').removeClass('form_active');
    $('.DemoCustomerEmail').removeClass('form_active');
    $('.DemoCustomerSubject').removeClass('form_active');
    $('.DemoCustomerMessage').removeClass('form_active');
  } else if(phone == "") {
    $('.DemoCustomerName').removeClass('form_active');
    $('.DemoCustomerPhone').addClass('form_active');
    $('.DemoCustomerEmail').removeClass('form_active');
    $('.DemoCustomerSubject').removeClass('form_active');
    $('.DemoCustomerMessage').removeClass('form_active');
  } else if (email == "") {
    $('.DemoCustomerName').removeClass('form_active');
    $('.DemoCustomerPhone').removeClass('form_active');
    $('.DemoCustomerEmail').addClass('form_active');
    $('.DemoCustomerSubject').removeClass('form_active');
    $('.DemoCustomerMessage').removeClass('form_active');
  } else if (subject == "") {
    $('.DemoCustomerName').removeClass('form_active');
    $('.DemoCustomerPhone').removeClass('form_active');
    $('.DemoCustomerEmail').removeClass('form_active');
    $('.DemoCustomerSubject').addClass('form_active');
    $('.DemoCustomerMessage').removeClass('form_active');
  } else if (message == "") {
    $('.DemoCustomerName').removeClass('form_active');
    $('.DemoCustomerPhone').removeClass('form_active');
    $('.DemoCustomerEmail').removeClass('form_active');
    $('.DemoCustomerSubject').removeClass('form_active');
    $('.DemoCustomerMessage').addClass('form_active');
  }  else {
    $('.DemoCustomerName').removeClass('form_active');
    $('.DemoCustomerPhone').removeClass('form_active');
    $('.DemoCustomerEmail').removeClass('form_active');
    $('.DemoCustomerSubject').removeClass('form_active');
    $('.DemoCustomerMessage').removeClass('form_active');
    var url = 'demoMail.php';
    var data = {};
    data.name = name;
    data.phone = phone;
    data.email = email;
    data.subject = subject;
    data.message = message;
    $(".demomailSend").val("SENDING...");
    $(".demomailSend").attr('disabled','disabled');
    // console.log(data);
    $.ajax({
      url: url,
      type: 'POST',
      data: data,
      // contentType: false,
      processData: true,
      success: function (response) {
        var parseJson = JSON.parse(response);
        if (parseJson == 'success') {
          $(".demomailSend").val("SEND");
          $(".demomailSend").removeAttr('disabled', 'disabled');
          $('.demoForm')[0].reset();
          swal({
            type: 'success',
            // title: 'Mail Send',
            title:'Thank you for requesting a Demo.we will get back to you soon.',
            timer: 3000
          })
        } else {
          $(".demomailSend").val("SEND");
          $(".demomailSend").removeAttr('disabled', 'disabled');
          swal({
            type: 'error',
            title: 'Failed',
            text: 'Request Demo Failed',
            timer: 3000
          })
        }
      }
    });
  }
}
/***********Youtube video script*********** */
function playVideo() {
  $('.videoContainer').html('<iframe class="videoIframe" src="https://www.youtube.com/embed/6hcnet4QWNI?autoplay=1" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
}


$('#carouselExample').on('slide.bs.carousel', function (e) {

  /*

  CC 2.0 License Iatek LLC 2018
  Attribution required
  
  */

  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $('#carouselExample .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('#carouselExample .carousel-item').eq(i).appendTo('#carouselExample .carousel-inner');
      } else {
        $('#carouselExample .carousel-item').eq(0).appendTo('#carouselExample .carousel-inner');
      }
    }
  }
});


function carouselNormalization() {
  var items = $('#carouselExample .carousel-item'), // grab all the slides
    heights = [], // array to store heights
    tallest; // tallest slide

  if (items.length) {
    function normalizeHeights() {
      items.each(function () {
        heights.push($(this).height()); // add each slide's height
      }); // to the array

      tallest = Math.max.apply(null, heights); // find the largest height

      items.each(function () {
        $(this).css('min-height', tallest + 'px');
        $('#carouselExample .carousel-item').css('min-height', tallest + 'px'); // set each slide's minimum
      }); // height to the largest
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function () {
      tallest = 0, heights.length = 0; // reset the variables

      items.each(function () {
        $(this).css('min-height', '0');
      });

      normalizeHeights(); // run it again
    });
  }
}

function carouselNormalizationbox() {
  var items = $('#carouselExample .box-bg-white'), // grab all the slides
    heights = [], // array to store heights
    tallest; // tallest slide

  if (items.length) {
    function normalizeHeightsbox() {
      items.each(function () {
        heights.push($(this).height()); // add each slide's height
      }); // to the array

      tallest = Math.max.apply(null, heights); // find the largest height

      items.each(function () {
        $(this).css('min-height', tallest + 'px');
        // $('#carouselExample .carousel-item').css('min-height', tallest + 'px'); // set each slide's minimum
      }); // height to the largest
    };

    normalizeHeightsbox();

    $(window).on('resize orientationchange', function () {
      tallest = 0, heights.length = 0; // reset the variables

      items.each(function () {
        $(this).css('min-height', '0');
      });

      normalizeHeightsbox(); // run it again
    });
  }
}

window.onload = function () {
  carouselNormalization();
  carouselNormalizationbox();
}

/****************************************Partners Carousel**********************************************/

$('#partnersExample').on('slide.bs.carousel', function (e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $('#partnersExample .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $('#partnersExample .carousel-item').eq(i).appendTo('#partnersExample .carousel-inner');
      }
      else {
        $('#partnersExample .carousel-item').eq(0).appendTo('#partnersExample .carousel-inner');
      }
    }
  }
});


/**************************************** MAIL TO (HEADER BUTTON) **********************************************/
$('#mailSupport').on('click', function (e) {
  event.preventDefault();
    // var email = 'support@apnhealth.com';
    var email = 'support@apnhealth.com';    
    var subject = 'Email from Website: APN';
    window.location = 'mailto:' + email + '?subject=' + subject;
});


   


