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
    //如果是users文件夹下的页面，那么跳转到主页时路径得多上跳一层
    if (window.location.pathname.indexOf('users')) {
      location.href = '../index.html';
    }
    //同级页面跳转即可直接写要跳转的页面名
    else {
      location.href = 'index.html';
    }
  });
});