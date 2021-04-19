$(".rslides").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 3000,          // Integer: Time between slide transitions, in milliseconds
 
});

$(".rslides-portfolio").responsiveSlides({
  auto: true,             // Boolean: Animate automatically, true or false
  speed: 500,            // Integer: Speed of the transition, in milliseconds
  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
  pager: true,           // Boolean: Show pager, true or false

});

Visibility.onVisible(function(){

  setTimeout(function(){
    $(".logo").addClass('animated fadeInDown');
  }, 100);
  
  setTimeout(function(){
    $(".header").addClass('animated fadeInDown');
  }, 500);

  setTimeout(function(){
    $(".ideia-intro div").addClass('animated fadeInDown');
    $(".introducao-interna").addClass('animated fadeInDown');
    $(".carrossel-home").addClass('animated fadeInDown');
  }, 900);

  setTimeout(function(){
    $(".ideia-intro img").addClass('animated fadeInDown');
    $(".introducao-interna p").addClass('animated fadeInDown');
  }, 1000);

  setTimeout(function(){
    $(".animar-interno").addClass('animated fadeInDown');
  }, 1200);

  setTimeout(function(){
    $(".produtos").addClass('animated fadeInDown');
  }, 1300);

  setTimeout(function(){
    $(".produtos h2").addClass('animated fadeInDown');
  }, 1400);

  setTimeout(function(){
    $(".produtos li").addClass('animated fadeInDown');
  }, 1500);

  setTimeout(function(){
    $(".portfolio-animar").addClass('animated fadeInDown');
  }, 1600);

  setTimeout(function(){
  $(".portfolio-animar ul").addClass('animated fadeInDown');
}, 1800);
/*---------------------*/  


});
