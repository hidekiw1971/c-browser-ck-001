
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // start
  //ドロワーメニュー
  $(".js-drawer").click(function () {
    $(".js-drawer").toggleClass("active");
  });

  // end
});
