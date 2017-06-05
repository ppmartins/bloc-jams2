var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {

  var revealPoint = function(index) {
    points[index].style.opacity = 1;
    points[index].style.transform = "scaleX(1) translateY(0)";
    points[index].style.msTransform = "scaleX(1) translateY(0)";
    points[index].style.WebkitTransform = "scaleX(1) translateY(0)";
  }

  for (var i = 0; i < points.length; i++) {
    revealPoint(i);
  }
};

window.onload = function() {   /* We assign the window.onload property an event handler, a function that handles code in response to an event. The event handler executes as soon as an action fires an event. window.onload will only be triggered after the full load of the page. */
  if (window.innerHeight > 950) {
    animatePoints(pointsArray);
  }

  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

  window.addEventListener('scroll', function(event) {
    if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
      animatePoints(pointsArray);
    }
  });
}
