function flipcard() { 
    document.getElementById("flip-card-inner").style.transform = 'rotateY(180deg)';
}

function showNextItem(olId) {
    $("#" + olId + " li.active").slideUp("fast", function () {
      $(this).removeClass("active");

      $(this)
        .next("li")
        .slideDown("fast", function () {
          $(this).addClass("active");
        });
    });
  }

  function goToFirst(olId) {
    $("#" + olId + " li")
      .not(":first")
      .slideUp("fast", function () {
        $(this).removeClass("active");
      });

    $("#" + olId + " li:first").slideDown("fast", function () {
      $(this).addClass("active");
    });
  }