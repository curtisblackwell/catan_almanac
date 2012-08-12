$(function() {


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

  $('.card').click(function(){
    $(this).toggleClass('flip');
  })


});
