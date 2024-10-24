//-------GET-------//
$(".inputDiv").ready(function () {
  $(".inputBtn").click(function () {
    if ($(".addInput").val()) {
      alert(`Value: ${$(".addInput").val()}`);
    } else {
      alert("Enter Your Value");
    }
  });
});

//-------ADD-------//
$(".setDiv").ready(function () {
  $(".AfterBtn").click(function () {
    console.log("after");
    $(".afterPara").after("I am Adding after");
  });
});
$(".setDiv").ready(function () {
  $(".BeforeBtn").click(function () {
    console.log("Before");
    $(".before").before("I am Before after");
  });
});
$(".setDiv").ready(function () {
  $(".AppendBtn").click(function () {
    console.log("append");
    $(".append").append("I am append after");
  });
});
$(".setDiv").ready(function () {
  $(".PrependBtn").click(function () {
    console.log("prepend");
    $(".prepend").after("I am prepend after");
  });
});

//-------REMOVE-------//

$(".setDiv").ready(function () {
  $(".removeBtn").click(function () {
    console.log("Remove");
    $(".removetext").remove();
  });
});

$(".emptyDiv").ready(function () {
  $(".emptyBtn").click(function () {
    console.log("empty");
    $(".emptytext").empty();
  });
});
