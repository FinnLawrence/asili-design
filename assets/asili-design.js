$(document).ready(function() {
  $('.button-toggle').click(function() {
    toggleFor($(this));
  });

  $('.product-thumbnail').click(function(e){
    e.preventDefault();
    showProductImageFor($(this));
  });
});

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
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

function showProductImageFor(button) {
  var targetSelector = button.attr("href");
  $('.product-image').addClass("inactive");
  $(targetSelector).removeClass("inactive").addClass("active");
}