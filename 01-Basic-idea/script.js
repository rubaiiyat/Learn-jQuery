$(document).ready(function () {
  $(".hidemessage").hide();
  $(".showmessage").click(function () {
    $(".hidemessage").show();
  });
});

$(".hidelorem").ready(function () {
  $(".hideLorem").click(function () {
    $("h2").hide();
  });
});

$(".toggleDiv").ready(function () {
  $(".toggleMe").on("mouseleave", function () {
    $(".toggleText").toggle(1000);
  });
});

$(".inputFocus").ready(function () {
  $(".inputFocusText").on("focus", function () {
    $(this).css("background-color", "gray");

    var inputValue = $(this).val();
    console.log(inputValue);
  });

  $(".inputFocusText").on("input", function () {
    var inputValue = $(this).val();
    console.log(inputValue);
  });

  $(".inputFocusBtn").click(function () {
    var inputValue = $(".inputFocusText").val();
    console.log(inputValue);
  });
});
