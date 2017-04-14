/**
 * Created by Akil on 2017/4/14.
 */
$(function() {
  //当滚动时导航条变色
  $(document).scroll(function() {
    if ($(document).scrollTop() >= 1) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    else {
      $('.navbar').removeClass('navbar-fixed-top');
    }
  });
  $(document).on('click', '.envelope', function() {
    location.href = 'https://mailblast.io/';
  });
});