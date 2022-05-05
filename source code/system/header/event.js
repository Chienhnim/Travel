$(document).ready(function(){

  for (var i = 0; i < $(".header .menu_main .has_children .children").length; i++) {
    $(".header .menu_main .has_children .children").eq(i).css({"animation-duration":i/4+"s"});
  }
  for (var i = 0; i < $(".header .menu_main .menu_area > *").length; i++) {
    $(".header .menu_main .menu_area > *").eq(i).css({"animation-duration":i/4+"s"});
  }

  $(".header .menu_main .menu_open").click(function(){
    var win = $(window);
    if (win.width() <= 1200) {
      if($(".header .menu_main .menu_area > .item:visible").length!=0){
        $(".header .menu_main .menu_area > .item, .header .menu_main .menu_area > .item_more").css({"display":"none"});
      }else{
        $(".header .menu_main .menu_area > .item, .header .menu_main .menu_area > .item_more").css({"display":"block"});
      }
    }else{
      $(".header .menu_main .menu_area > .item").css({"display":"block"});
      $(".header .menu_main .menu_area > .item_more").css({"display":"none"});
    }
  });

  $(".header .menu_main .has_children .parent .icon").click(function(){
    if ($(this).closest(".has_children").hasClass("active")){
      $(this).closest(".has_children").removeClass("active");
    }else{
      $(this).closest(".has_children").addClass("active");
    }
  });

  $(window).scroll(function (event) {
    var scroll = Math.floor($(window).scrollTop());
    if(scroll > 10){
      $(".header .top").addClass("active");
      $(".header .menu_main").addClass("active");
    }else{
      $(".header .top").removeClass("active");
      $(".header .menu_main").removeClass("active");
    }
  });

  $(window).resize(function(){
    $(".header .menu_main .menu_open").trigger("click");
  });

});
