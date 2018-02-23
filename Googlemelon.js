
$(function(){
  $(".greenmelon").click(function () {
    $(this).text("クリックされました");
  });
});

$(function(){
  $("p2").mouseover(function() {
  $(this).css("color","green");
}).mouseout(function() {
  $(this).css('color', '');
 });
});

$(function(){
$('#something').click(function() {
  location.reload();
 });
});
