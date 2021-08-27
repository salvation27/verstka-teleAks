

$(document).ready(function() {
            $('.owl-carousel').owlCarousel({
                loop:true, //Зацикливаем слайдер
                // margin:50, //Отступ от элемента справа в 50px
                nav:true, //Отключение навигации
                // autoplay:true, //Автозапуск слайдера
                smartSpeed:1000, //Время движения слайда
                autoplayTimeout:2000, //Время смены слайда
                responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
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




$(window).on('load', function () {
    var $preloader = $('#p_prldr'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

// длябургера анимация


(function() {

  "use strict";

  var toggles = document.querySelectorAll(".toggle-hamburger");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
    });
  }

})();


$(function(){
  $('.arct').click(function(){
    $('#exampleModal').arcticmodal();
    
  });
});



// появление меню по нажатии на кнопку

$(document).ready(function(){
 $(".burger_test").click(function(){
    $(".brger_menu").toggleClass("vis");
  });

});


$(document).ready(function(){
 $(".closer").click(function(){
    $(".brger_menu").click("brger_menu");
  });

});




$(document).ready(function(){
  $('[data-submit]').on('click', function(e){
      e.preventDefault();
    $(this).parent('form').submit();
  })
  $.validator.addMethod(
          "regex",
          function(value, element, regexp) {
              var re = new RegExp(regexp);
              return this.optional(element) || re.test(value);
          },
          "Please check your input."
      );
  function valEl(el){
     
          el.validate({
        rules:{
          tel:{
            required:true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name:{
            required:true
          },
          email:{
            required:true,
            email:true
          }
        },
          messages:{
            tel:{
                required:'Надо заполнить',
                regex:'Телефон может содержать символы + - ()'
            },
            name:{
                required:'Надо заполнить',
            },
            email:{
              required:'Надо заполнить', 
              email:'Неверный формат E-mail'
            }
        },            
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch($formId){
            case'goToNewPage':
              $.ajax({
                    type: 'POST',
                    url: $form.attr('action'),
                    data: $form.serialize(),
                  })
                  .always(function (response) {  
                      //ссылка на страницу "спасибо" - редирект
                      location.href='https://wayup.in/lm/landing-page-marathon/success';
                      //отправка целей в Я.Метрику и Google Analytics
                      ga('send', 'event', 'masterklass7', 'register');
          yaCounter27714603.reachGoal('lm17lead');
              });
          break;        
          case'popupResult':
            $.ajax({
                  type: 'POST',
                  url: $form.attr('action'),
                  data: $form.serialize(),
                })
                .always(function (response) {                    
                setTimeout(function (){

                 $(".js-form").trigger('reset'); 
                   $('#overlay').fadeOut();
                },3000);
                setTimeout(function (){
                  $('#overlay').fadeIn();
                },100);
                $('#overlay').on('click', function(e) {
        $('#overlay').fadeOut();
    });
                    
            });
        break;          
        }       
return false; 
    }                           
  })
 }                        
     
              $('.js-form').each(function() {
                valEl($(this)); 
              });
    $('[data-scroll]').on('click', function(){
      $('html, body').animate({
            scrollTop: $( $.attr(this, 'data-scroll') ).offset().top
        }, 2000);
        event.preventDefault();
    })             
   });






  


  




// слайдер оффера


$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
   arrows: true,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
      }
    },
    {
      breakpoint: 1120,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },

     {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      
      }
    },
     {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


$('.res').slick({
  dots: false,
  speed: 1000,
  autoplay: true,
  infinite: true,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
   arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
      }
    },
  
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    },
     {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      }
    }

  ]
});






$('a[href^="#"]').bind('click.smoothscroll',function (e) {
 e.preventDefault();
 
var target = this.hash,
 $target = $(target);
 
$('html, body').stop().animate({
 'scrollTop': $target.offset().top
 }, 2000, 'swing', function () {
 window.location.hash = target;
 });
 });




// jQuery(function(f){
//     var element = f('#back-top');
//     f(window).scroll(function(){
//         element['fade'+ (f(this).scrollTop() > 300 ? 'In': 'Out')](500);           
//     });
// });




$(document).ready(function(){
  $(".partners_sistem_more").on('click',function(){
    $(this).parents(".partners_sistem_card").find(".podrobno").toggleClass("choose");
    
  });

});


$(document).ready(function(){
  $(".furnit_sistem_more").on('click',function(){
    $(this).parents(".furnit_sistem_card").find(".podrobno").toggleClass("choose");
    
  });

});

