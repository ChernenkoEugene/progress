$(document).ready(function() {

if($( window ).width() < 480) {
     $(".my_cabinet_nav_list .my_cabinet_manager a").html("Менеджер");
  }
$( window ).resize(function() {
 if($( window ).width() < 480) {
     $(".my_cabinet_nav_list .my_cabinet_manager a").html("Менеджер");
  }
  });
  if($( window ).width() < 560) {
     $(".cart_table_th .cart_table_th_quan").html("Кол-во");
  }
$( window ).resize(function() {
 if($( window ).width() < 560) {
     $(".cart_table_th .cart_table_th_quan").html("Кол-во");
  }
});
    //---submenu---

    $('.aside_catalog li').on('click', function() {
        $(this)
            .children('ul').hide(300);
        $(this)
            .toggleClass('open');
    });
    //mobile left_catalog
    $('.mobile_catalog_img').on('click', function() {
        $('.aside_catalog > li').slideToggle(400);
        $('.mob_cg_btn').toggleClass('open');
    });

    //mobile_phone button
    $('.mobile_phone').on('click', function() {
        $('.head_tel').fadeIn(200);
    });
    $('.head_tel .cross').on('click', function() {
        $('.head_tel').fadeOut(200);
    });
    //mobile_search button
    $('.main_header .search').on('click', function() {
        $('.main_header .search form').fadeIn(200);
    });
    $('.close_search').on('click', function() {
        $('.main_header .search form').fadeOut(200);
    });

    //mobile_menu button
    $('.header_menu_btn').on('click', function() {
        $('.header_nav').toggleClass('open').css({
            opacity: 0,
        }).animate({ opacity: 1 }, 600);
        $('.header_nav_log').toggleClass('open').css({
            opacity: 0,
        }).animate({ opacity: 1 }, 600);
        $('.top_head').toggleClass('open');
    });

 //---orders---

    $('.orders_table_tr_order a').on('click', function() {
        $(this)
             .parent().siblings('.order_details').slideToggle(300);
        
    });

//---customize input type number---
$(function() {
  
  $("#spin .button").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().find("input").val();

    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
       // Don't allow decrementing below zero
      if (oldValue > 0) {
        var newVal = parseFloat(oldValue) - 1;
        } else {
        newVal = 0;
        }
      }
    $button.parent().find("input").val(newVal);
  });
});


if($( window ).width() < 751) {
     $('.cart_aside_order .order_dismiss').insertBefore('.cart_aside_order .order_tot_summ');
  }



    $(".fancybox").fancybox();


});
