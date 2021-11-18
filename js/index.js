// Modal
$(document).ready(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 3000);
});

// slider prueba 3
$(function () { 
  $("section .info").first().show().animate({
    width: "79%",
  });
  $("section .slide").click(function () {
    $(this)
      .next()
      .show()
      .animate({
        width: "79%",
      })
      .siblings("section .info")
      .animate(
        {
          width: "0%",
        },
        function () {
          $(this).hide();
        }
      );
    
    // $(this).addClass("test").siblings().removeClass("test");
  });
});
