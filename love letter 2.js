$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }

  // Music player functionality
  $("#load-music").click(function () {
    var url = $("#music-url").val();
    if (url) {
      $("#music-player-audio").attr("src", url);
    }
  });
});
