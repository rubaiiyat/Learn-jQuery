$(".box").ready(function () {
  $(".slideshowBtn").click(function () {
    console.log("working");
    $(".box1").hide("slow");
    $(".box2").hide(2000);
    $(".box3").hide(3000);
  });
});

$(".box").ready(function () {
  $(".slideshowBtn").click(function () {
    $(".box1").toggle(1000);
    $(".box2").toggle(2000);
    $(".box3").toggle(3000);
  });
});

$(".box").ready(function () {
  $(".slideshowBtn").click(function () {
    $(".box1").fadeOut(1000);
    $(".box2").fadeOut(2000);
    $(".box3").fadeOut(3000);
  });
});

$(".slideDown").ready(function () {
  $(".slideBtn").click(function () {
    $(".slideBox")
      .css("background", "gray")
      .slideToggle(1000 * 5);
  });
  $(".slideStop").click(function () {
    $(".slideBox").stop();
  });
});

$(".animate").ready(function () {
  $(".animateBtn").click(function () {
    $(".animateBox").animate({
      left: "700px",
      opacity: "0.5",
    });
  });
});

$(".callBack").ready(function () {
  $(".callBackBtn").click(function () {
    $(".callBackBox").hide("slow", function () {
      alert("Don't click here second time");
    });
  });
});

$(".chaining").ready(function () {
  $(".chainingBtn").click(function () {
    $(".chainingText").css("color", "white").slideUp(2000).slideDown(2000);
  });
});
