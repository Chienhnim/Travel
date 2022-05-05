$(document).ready(function(){

  $(".sys_frame.footer .title .icon").click(function(){
    if($(this).closest(".area").find(".list").is(":visible")){
      $(".sys_frame.footer .list").slideUp("fast");
    }else{
      $(".sys_frame.footer .list").slideUp("fast");
      $(this).closest(".area").find(".list").slideToggle("fast");
    }
  });

  $(window).resize(function(){
    var win = $(window);
    if (win.width() > 700) {
      if($(".sys_frame.footer .list:hidden").length!=0){
        $(".sys_frame.footer .list").css({"display":"block"});
      }
    }else{
      $(".sys_frame.footer .list").css({"display":"none"});
    }
  });
});
