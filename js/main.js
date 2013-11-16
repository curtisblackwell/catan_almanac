$(function() {

  /**
   * Navigate Realms
   */
  $('#nav_progress li a').click(function(){
    // Remove the active class from tab and add to the one that was clicked.
    $('#nav_progress .active').removeClass('active');
    $(this).parent().addClass('active');

    // Hide the current visible realm and show the one whose tab was clicked.
    var active_realm = $(this).attr('href');

    $('.realm.active').fadeOut(function(){
      $(this).removeClass('active');
      $(active_realm).fadeIn(function(){
        $(this).addClass('active');
      });
    });

    return false; // Don't jump down the page or append to the URL.
  });

  /**
   * Flip Cards
   */
  $('.card').click(function(){
    $(this).toggleClass('flip');
  })

  /**
   * Cycle Background Images
   */
  setInterval(function() {
    $('body').removeClass().addClass("bg" + Math.floor(Math.random() * 6).toString())
  }, 30000);

  /**
   * Show/Hide Cards
   */
  $('.show').click(function(){
    $('.hide').removeClass('active');
    $(this).addClass('active');
    $('.realm').fadeIn();
  });
  $('.hide').click(function(){
    $('.show').removeClass('active');
    $(this).addClass('active');
    $('.realm').fadeOut();
  });

});
