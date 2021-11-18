// Modal
$(document).ready(function () {
  setTimeout(function () {
    $("#myModal").modal("show");
  }, 3000);
});

// slider prueba 3
$(document).ready(function() {
  var $item = 0,
    $itemNo = $(".banner-slider figure").length;
  function transitionSlide() {
    $item++;
    if ($item > $itemNo - 1) {
      $item = 0;
    }
    $(".banner-slider figure").removeClass("on");
    $(".banner-slider figure")
      .eq($item)
      .addClass("on");
  }
  var $autoTransition = setInterval(transitionSlide, 3500);

  $(".banner-slider figure").click(function() {
    clearInterval($autoTransition);
    $item = $(this).index();
    $(".banner-slider figure").removeClass("on");
    $(".banner-slider figure")
      .eq($item)
      .addClass("on");
    $autoTransition = setInterval(transitionSlide, 3500);
  });
});

