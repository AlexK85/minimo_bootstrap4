// Будет видна работа скрипт только на СЕРВЕРЕ

$(function() {
  $(".load-more").on("click", function () {
    const btn = $(this);
    const loader = btn.find("span");

    $.ajax({
      url: "/data.html",
      type: "GET",
      beforeSend: function () {
        // показываем кнопку
        btn.attr("disabled", true);
        // показываем loader
        loader.addClass("d-inline-block");
      },
      success: function (responce) {
        // сам запрос
        setTimeout(function () {
          loader.removeClass("d-inline-block");
          // разблокировка кнопки
          btn.attr("disabled", false);

          // вывод инф. Data.html перед after-post
          $(".after-post").before(responce);
        }, 1000);
        // console.log(responce);
      },
      error: function () {
        alert("Error!");
        loader.removeClass("d-inline-block");
        // разблокировка кнопки
        btn.attr("disabled", false);
      },
    });
  });
});
