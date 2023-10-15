$(() => {
  //top으로 올라가기
  function topBtnToggle() {
    if ($(window).scrollTop() > $(window).height() / 2) {
      $(".btn_top").fadeIn();
    } else {
      $(".btn_top").fadeOut();
    }
  }
  $(".btn_top").hide();

  $(window).on("scroll", topBtnToggle);

  $(".btn_top").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  //포트폴리오 닫기 버튼
  $(".btn_close").on("click", function (e) {
    e.preventDefault();
    $(".popup").hide();
  });
});
