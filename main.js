$(".btn").click(function () {
  $(this).toggleClass("click");
  $(".sidebar").toggleClass("show");
});
$(".feat-btn").click(function () {
  $("nav ul .feat-show").toggleClass("show");
  $("nav ul .first").toggleClass("rotate");
});
$(".serv-btn").click(function () {
  $("nav ul .serv-show").toggleClass("show1");
  $("nav ul .second").toggleClass("rotate");
});
$("nav ul li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  // $(".sub-menu li a").removeClass("active");
});

$(".sub-menu li a").click(function () {
  $(".sub-menu li a").removeClass("active");
  // $(".tab").addClass("active"); // instead of this do the below
  $(this).addClass("active");
});
