$(document).ready(function () {
  $("nav ul li:eq(1) a, .main_btna, .main_btn").on("click", function () {
    $(".overlay").fadeIn("slow");
    $(".modal").slideDown("slow");
  });
  $(".close").on("click", function () {
    $(".modal").slideUp("slow");
    $(".overlay").fadeOut("slow");
  });
});
