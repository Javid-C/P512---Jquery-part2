$(document).ready(function () {
  $(".add").click(function () {
    $(".box").addClass("active");
  });
  $(".remove").click(function () {
    $(".box").removeClass("active");
  });
  $(".toggle").click(function () {
    $(".box").toggleClass("active");
  });
  $(".info").click(function () {
    console.log($(".box").hasClass("active"));
  });
  //   console.log($(".box").outerHeight());

  $(".scroll").click(function () {
    $(this).clone().appendTo("body");
  });

  console.log($("h5").closest(".wrapper"));
  $(".parallax-window").parallax({
    imageSrc:
      "https://images.unsplash.com/photo-1547039996-61c1135690c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZXxlbnwwfHwwfHw%3D&w=1000&q=80",
  });

  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
        nav: true,
        loop: false,
      },
    },
  });
});
