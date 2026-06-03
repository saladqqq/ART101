let lightOn = false;
let foodGiven = false;

$("#food-bowl").click(function () {
  foodGiven = true;
  $(this).addClass("fed");
  $("#cat, #dog").addClass("safe");
  $("#environment-status").text("You left food out. The animals feel safer.");
});

$("#cat").hover(
  function () {
    $("#cat-message").stop(true, true).slideDown(300);
    $(this).addClass("nervous");
    $("#environment-status").text("The cat notices you and becomes nervous.");
  },
  function () {
    $("#cat-message").stop(true, true).slideUp(300);
    $(this).removeClass("nervous");
    $("#environment-status").text("The cat calms down again.");
  }
);

$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();
    lightOn = !lightOn;
    $("#night-scene").toggleClass("light-on");

    if (lightOn === true) {
      $("#environment-status").text("The streetlight turns on. The hidden corner feels less lonely.");
    } else {
      $("#environment-status").text("The streetlight turns off. The street becomes quiet again.");
    }
  }
});

$("#dog").dblclick(function () {
  let newLeft = Math.floor(Math.random() * 650) + 120;
  let newTop = Math.floor(Math.random() * 300) + 150;

  $(this).css({
    left: newLeft,
    top: newTop
  });

  $("#environment-status").text("The dog runs to a new place.");
});

$("#night-scene").mousemove(function (event) {
  $("#sparkle").show().css({
    left: event.pageX - $(this).offset().left,
    top: event.pageY - $(this).offset().top
  });
});

$("#night-scene").mouseleave(function () {
  $("#sparkle").hide();

  if (foodGiven === true) {
    $("#environment-status").text("The animals stay near the food bowl after you leave.");
  } else {
    $("#environment-status").text("You left the street, but the animals are still waiting.");
  }
});
