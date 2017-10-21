$(document).ready(function() {
  $('.button-toggle').click(function() {
    toggleFor($(this));
  });
});

function toggleFor(button) {
  button.toggleClass("active");
  
  var target = button.data("target");
  var toggleClass = button.data("toggle");
  $(target).toggleClass(toggleClass);
}