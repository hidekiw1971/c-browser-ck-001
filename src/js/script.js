
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // start
  //ドロワーメニュー
  $("#MenuButton").click(function () {
    $(".js-drawer").toggleClass("active");
  });

  // end
});
