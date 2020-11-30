
  (function($){
    $(window).on("load",function(){
      $(".scrollNavbar").mCustomScrollbar({
        theme:"light-3",
        scrollButtons:{
          enable:true,
        }
      });
      $(".scrollContactBox").mCustomScrollbar({
        axis:"x",
        theme:"3d"
      });
    });
  })(jQuery);
