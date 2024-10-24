$(".loadDiv").ready(function () {
  $(".loadBtn").click(function () {
    $(".loadtext").load("anotherText.txt ");
  });
});

$(".getDiv").ready(function () {
  $(".getBtn").click(function () {
    $.get("anotherText.txt", function (data, status) {
      alert("Data: " + data + "Status: " + status);
    });
  });
});

$(".postDiv").ready(function () {
  $(".postBtn").click(function () {
    $.post(
      "anotherText.asp",
      {
        name: "Abir Rubaiyat",
        city: "Bogura",
      },
      function (data, status) {
        alert("Data: " + data + "Status: " + status);
      }
    );
  });
});
