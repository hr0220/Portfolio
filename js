# Portfolio

$(function(){
  $('.main-logo').fadeIn(3000);

  $('#info-show').hover(
    function(){
      $('#info-show2').fadeIn(1500);
  });

  $('#works-show').hover(
    function(){
      $('.work-list').fadeIn(1500);
    });
    $('.header-list a').click(function(){
      var id=$(this).attr('href');
      var position=$(id).offset().top;
      $('html,body').animate({
        'scrollTop':position
      },'slow');
    });

    $('.footer-list a').click(function(){
      var id=$(this).attr('href');
      var position=$(id).offset().top;
      $('html,body').animate({
        'scrollTop':position
      },'slow');
    });

    $('.fa-twitter').hover(
      function(){
        $('.fa-twitter').animate({
          'font-size':'35px'
        },300);
      },
      function(){
        $('.fa-twitter').animate({
          'font-size':'30px'
        },300);
      });

      $('.fa-envelope').hover(
        function(){
          $('.fa-envelope').animate({
            'font-size':'35px'
          },300);
        },
        function(){
          $('.fa-envelope').animate({
            'font-size':'30px'
          },300);
        });



});
