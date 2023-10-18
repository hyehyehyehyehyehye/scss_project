$(() => {
  const win = $(window);
  const html = $("html");
  const banner = $(".banner");

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

  //fade
  var bannerItems = $(".banner_item");
  var bannerSlider = $(".banner_slider");
  var currentIndex = 0;

  function showSlide(index) {
    bannerItems.removeClass("active");
    bannerItems.eq(index).addClass("active");
  }

  function nextSlide() {
    currentIndex++;

    if (currentIndex >= bannerItems.length) {
      currentIndex = 0;

      bannerSlider.css("transition", "none");
      showSlide(currentIndex);
      setTimeout(function () {
        bannerSlider.css("transition", "100%");
        currentIndex++;
      }, 10);
    } else {
      showSlide(currentIndex);
    }
  }

  function prevSlide() {
    currentIndex--;

    if (currentIndex < -1) {
      currentIndex = bannerItems.length - 2;
      bannerSlider.css("transition", "none");
      showSlide(currentIndex);
      setTimeout(function () {
        bannerSlider.css("transition", "");
        currentIndex--;
      }, 10);
    } else {
      showSlide(currentIndex);
    }
  }

  showSlide(currentIndex);

  $(".prev").click(function () {
    prevSlide();
  });

  $(".next").click(function () {
    nextSlide();
  });
});
