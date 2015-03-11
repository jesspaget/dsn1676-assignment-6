var $boxShow = $('.box');
var $btnShowHide = $('.btn-show-hide');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnCollapseExpand = $('.btn-collapse-expand');
var $panel = $('.panel');

var $btnBounce = $('.btn-bounce');
var $circle = $('.circle');

var $btnAppend = $('.btn-append');
var $list = $('.list');

$btnShowHide.on('click', function () {
  $boxShow.toggleClass('js-toggle-show');
});

$btnMove.on('click', function () {
  $diamond.toggleClass('js-toggle-move');
});

$btnCollapseExpand.on('click', function () {
  $panel.toggleClass('js-collapse-expand');
});

$btnBounce.on('click', function () {
  $circle.addClass('js-ball-bounce');
}); 

$circle.on('webkitAnimationEnd animationend', function () {
  $circle.removeClass('js-ball-bounce');
});

$btnAppend.on('click', function () {
  var $li = $('<li>New list item</li>');
  $list.prepend($li);
  $li.addClass('js-append');
});