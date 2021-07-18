//mixitup plugin

  var mixer = mixitup('.portfolio');

//mixitup plugin
// ---------Owl carousel----------
    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            items: 3,
            loop: true,
            autoplay: true,
            slideBy: 3,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3
                }
            }
        });
      });


      $(document).ready(function(){
        $(".owl-one").owlCarousel({
            items: 10,
            loop: true,
            autoplay: true,
            slideBy: 10,
            responsive:{
                0:{
                    items:4
                },
                600:{
                    items:7
                },
                1000:{
                    items:10
                }
            }
        });
      });


// ----------owlCarousel----------
// ----------tooltip js here------------- 
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
// ----------tooltip js here------------- 
// ----------elevatee zoom js here----------
/*
$("#zoom_01").elevateZoom({
    zoomType: "inner",
});
*/
// ----------Ytplayer js here------------
jQuery("#bgndVideo").YTPlayer({
  showControls: false,
  startAt: 3
});
// ----------Ytplayer js here------------
// ----------tab js here ---------------
function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}


function openImg(evt, imgName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(imgName).style.display = "block";
  evt.currentTarget.className += " active";

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

}
// ----------tab js here ---------------


