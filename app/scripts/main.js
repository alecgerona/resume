//Animate the brand logos
TweenMax.staggerFrom(".brand-logo", 1, {x:"+=2000"}, 0.2);


//Initialize fullpage.js
$(document).ready(function() {
    $('#fullpage').fullpage();
});