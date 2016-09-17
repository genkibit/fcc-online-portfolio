$(function() {

  var $wrapper = $("#fixed-wrapper");
  var $ul = $("nav ul");
  var $li = $("nav ul li");
  var $menuIcon = $("#menu-icon");
  var $picBox = $('.app-pic');
  var menuOpen = false;
  var lastScrollTop = 0;
  var lastDir;
  
  // App pic slide-up effect
  $picBox.click(function() {
    $(this).animate({ top: -95 }, 400, 'swing', function() {
      $(this).delay(3000).animate({ top: 0 }, 400, 'swing');
    });
  });
  
  // Fades out top bar when scroll down vice versa when scroll up
  function bar_fade(dir) {
    if (dir !== lastDir) {
      if ($menuIcon && menuOpen === true) {
        $ul.toggle();
        menuOpen = false;
      }

      if (dir === "down") {
        $wrapper.animate({ opacity: 0 }, 100);
      }
      else {
        $wrapper.animate({ opacity: 1 }, 100);
      }
    }
    
    lastDir = dir;
  }
  
  $(window).scroll(function(e){
    var st = $(this).scrollTop();
    
    if (lastScrollTop) {
      if (st > lastScrollTop){
        bar_fade("down");
      } else {
        bar_fade("up");
      }
    }
    
    lastScrollTop = st;
  });
  
  $menuIcon.click(function() {
    if (menuOpen === false) {
      $ul.toggle();
      $li.fadeIn();
      menuOpen = true;
    } else {
      $li.fadeOut();
      $ul.toggle();
      menuOpen = false;
    }
  });
  
  $li.click(function() {
    if (menuOpen === true) {
      $li.fadeOut();
      $ul.hide();
      menuOpen = false;
    }
  });
  
  // Produces a pop-up window with a contact form when user clicks the letter icon
  // Original code borrowed from: http://inspirationalpixels.com/tutorials/custom-popup-modal
  //----- OPEN
  $(".email").on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    e.preventDefault();
  });

  //----- CLOSE
  $('[data-popup-close]').on('click', function(e)  {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });

});