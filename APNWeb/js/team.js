window.onload = function() {
  carouselNormalization();
  carouselNormalizationsmall();
  carouselNormalizatioAlgo();
  carouselNormalizatioAlgoSmall();
 }



$('#carouselEngineering').on('slide.bs.carousel', function (e) {
  
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $(' #carouselEngineering .carousel-item').length;
  

  if (idx >= totalItems-(itemsPerSlide-1)) {
    
      var it = itemsPerSlide - (totalItems - idx);
      for (var i=0; i<it; i++) {
          // append slides to end
          if (e.direction=="left") {
              $('#carouselEngineering .carousel-item').eq(i).appendTo('#carouselEngineering .carousel-inner');
          }
          else {
              $('#carouselEngineering .carousel-item').eq(0).appendTo('#carouselEngineering .carousel-inner');
          }
      }
  }
});

// $('#carouselAlgoTeam').on('slide.bs.carousel', function (e) {
  
//   var $e = $(e.relatedTarget);
//   var idx = $e.index();
//   var itemsPerSlide = 4;
//   var totalItems = $(' #carouselAlgoTeam .carousel-item').length;
  

//   if (idx >= totalItems-(itemsPerSlide-1)) {
    
//       var it = itemsPerSlide - (totalItems - idx);
//       for (var i=0; i<it; i++) {
//           // append slides to end
//           if (e.direction=="left") {
//               $('#carouselAlgoTeam .carousel-item').eq(i).appendTo('#carouselAlgoTeam .carousel-inner');
//           }
//           else {
//               $('#carouselAlgoTeam .carousel-item').eq(0).appendTo('#carouselAlgoTeam .carousel-inner');
//           }
//       }
//   }
// });


function carouselNormalization() {
  var items   = $('#carouselEngineering .min-engineer-height'),              // grab all the slides
      heights = [],                                   // array to store heights
      tallest;                                        // tallest slide

  if (items.length) {
    function normalizeHeights() {
      items.each(function() {
        heights.push($(this).height());               // add each slide's height
      });                                             // to the array

      tallest = Math.max.apply(null, heights);        // find the largest height

      items.each(function() {
        $(this).css('min-height', tallest + 'px');
        $('#carouselEngineering .min-engineer-height').css('min-height', tallest + 'px');    // set each slide's minimum
      });                                             // height to the largest
    };

    normalizeHeights();

    $(window).on('resize orientationchange', function() {
      tallest = 0, heights.length = 0;               // reset the variables

      items.each(function() {
        $(this).css('min-height', '0');
        $('#carouselEngineering .min-engineer-height').css('min-height', '0');              
      });

      normalizeHeights();                            // run it again
    });
  }
}


function carouselNormalizationsmall() {
  var items   = $('#carouselEngineering .carousel-item'),              // grab all the slides
      heights = [],                                   // array to store heights
      tallest;                                        // tallest slide

  if (items.length) {
    function normalizeHeightssmall() {
      items.each(function() {
        heights.push($(this).height());               // add each slide's height
      });                                             // to the array

      tallest = Math.max.apply(null, heights);        // find the largest height

      items.each(function() {
        $(this).css('min-height', tallest + 'px');    // set each slide's minimum
      });                                             // height to the largest
    };

    normalizeHeightssmall();

    $(window).on('resize orientationchange', function() {
      tallest = 0, heights.length = 0;               // reset the variables

      items.each(function() {
        $(this).css('min-height', '0');              // reset each slide's height
      });

      normalizeHeightssmall();                            // run it again
    });
  }
}



// function carouselNormalizatioAlgo() {
//   var items = $('#carouselAlgoTeam .carousel-item'), // grab all the slides
//     heights = [], // array to store heights
//     tallest; // tallest slide

//   if (items.length) {
//     function normalizeHeights() {
//       items.each(function () {
//         heights.push($(this).height()); // add each slide's height
//       }); // to the array

//       tallest = Math.max.apply(null, heights); // find the largest height

//       items.each(function () {
//         $(this).css('min-height', tallest + 'px');
//         $('#carouselAlgoTeam .carousel-item').css('min-height', tallest + 'px'); // set each slide's minimum
//       }); // height to the largest
//     };

//     normalizeHeights();

//     $(window).on('resize orientationchange', function () {
//       tallest = 0, heights.length = 0; // reset the variables

//       items.each(function () {
//         $(this).css('min-height', '0');
//       });

//       normalizeHeights(); // run it again
//     });
//   }
// }

// function carouselNormalizatioAlgoSmall() {
//   var items = $('#carouselAlgoTeam .box-bg-white'), // grab all the slides
//     heights = [], // array to store heights
//     tallest; // tallest slide

//   if (items.length) {
//     function normalizeHeightsbox() {
//       items.each(function () {
//         heights.push($(this).height()); // add each slide's height
//       }); // to the array

//       tallest = Math.max.apply(null, heights); // find the largest height

//       items.each(function () {
//         $(this).css('min-height', tallest + 'px');
//         // $('#carouselExample .carousel-item').css('min-height', tallest + 'px'); // set each slide's minimum
//       }); // height to the largest
//     };

//     normalizeHeightsbox();

//     $(window).on('resize orientationchange', function () {
//       tallest = 0, heights.length = 0; // reset the variables

//       items.each(function () {
//         $(this).css('min-height', '0');
//       });

//       normalizeHeightsbox(); // run it again
//     });
//   }
// }

 

$('#carouselExample').on('slide.bs.carousel', function (e) {

  /*

  CC 2.0 License Iatek LLC 2018
  Attribution required
  
  */

  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $('#carouselExample .carousel-item').length;

  if (idx >= totalItems - (itemsPerSlide + 1)) {
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


function carouselNormalizatioAlgo() {
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

function carouselNormalizatioAlgoSmall() {
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
 

