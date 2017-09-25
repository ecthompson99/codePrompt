$(".toggle").click(function() {
  $(this).toggleClass("selected");
  var activePanel = "#" + $(this).html();
  $(activePanel).toggle();

  var divLength = $(".container").filter(function() {
      return($(this).css("display")!="none");
  }).length;

  var width = 100/divLength;

  $(".container").width(width + "%");

})

$("#run").click(function() {
  $("iframe").contents().find("html").html('<style>' + $("#css1").val() + '</style>' + $("#html1").val());

  document.getElementById("result").contentWindow.eval($("#js1").val());
})
