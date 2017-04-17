/**
 * Created by Akil on 2017/4/14.
 */
$(function() {
  //当滚动时导航条变色
  $(document).scroll(function() {
    if ($(document).scrollTop() >= 1) {
      $('.mailblast nav').css({'position': 'fixed', 'background-color': '#313131', 'z-index': '1100'});
    }
    else {
      $('.mailblast nav').css({'position': 'relative', 'background-color': '#32A7B8'});
    }
  });
  //
  $(document).on('click', '.envelope', function() {
    location.href = 'index.html';
  });
});