//Animate the brand logos
TweenMax.staggerFrom(".brand-logo", 1, {x:"+=2000"}, 0.2);


//Initialize fullpage.js
$('#fullpage').fullpage({
    autoScrolling: false,
	fitToSection: false
});

$(function() {
  
  // Init ScrollMagic Controller
  var controller = new ScrollMagic.Controller();

  
  var tween = TweenMax.fromTo("#good", 1, {x:"-100", opacity:0}, {x:"0", opacity:1});

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#goodScene", duration: 250})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
  
  var tween = TweenMax.fromTo("#letsbegin", 1, {x:"+100", opacity:0}, {x:"0", opacity:1});

	// build scene
	var scene = new ScrollMagic.Scene({triggerElement: "#beginTrigger", duration: 250})
					.setTween(tween)
					.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
          
          
          
  
  
});