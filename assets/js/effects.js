// $(document).on("scroll", function () {
//   if ($(window).scrollTop() > 30) {
//     $(".navbar").css({
//       "background-color": "yellow !important",
//       "box-shadow": "-1px 9px 40px -12px #2e3047 !important",
//     });
//   } else {
//     $(".navbar").css({
//       "background-color": "#2e3047 !important",
//       "box-shadow": "none",
//     });
//   }
// });

$(function () {
  $(document).scroll(function () {
    const $nav = $(".sticky-top");

    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
