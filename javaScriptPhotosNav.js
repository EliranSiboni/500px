

//sticky nav bar



window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.remove("display");
    navbar.classList.add("sticky");

  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("display");
  }
}

//Grid photos buttons tabs.


var btns = document.querySelectorAll('.navGridSection1text');

var texts = document.querySelectorAll(".displayNone")

document.querySelector('#text_1').classList.add('active');

    	for (var i = 0; i < 5 ; i++) {
    		btns[i].addEventListener('click', function  (event) {
    		 console.log(event.target);
    		 var textNumber = event.target.value;

    		 hideAllTexts();
    		 document.querySelector('#text_' + textNumber ).classList.add('active')


    		})
    	}

    	function hideAllTexts (argument) {
    	for (var i = 0; i < texts.length; i++) {
    		texts[i].classList.remove('active');
    	}
    	}
