$(document).ready(function() {
  $('.button-toggle').click(function() {
    toggleFor($(this));
  });
});

function toggleFor(button) {
  button.toggleClass("active");
  
  var target = button.data("target");
  var toggleClass = button.data("toggle");
  var bodyClass = button.data("body-class");
  
  $(target).toggleClass(toggleClass);
  
  if (bodyClass) {
    $('body').toggleClass(bodyClass);
  }
}