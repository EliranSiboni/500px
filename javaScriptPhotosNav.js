//sticky nav bar



window.addEventListener("scroll",function(){
  var target = document.getElementById('navbar');
  if(window.pageYOffset > 600){
   target.style.display = "block"; 
  }
  else if(window.pageYOffset < 600){
    target.style.display = "none";
  }
},false);


//Grid photos buttons tabs.


var btns = document.querySelectorAll('.navGridSection1text');

var texts = document.querySelectorAll(".displayNone");

document.querySelector('#text_1').classList.add('active');

for (var i = 0; i < 5; i++) {
    btns[i].addEventListener('click', function(event) {
        console.log(event.target);
        var textNumber = event.target.value;

        hideAllTexts();
        document.querySelector('#text_' + textNumber).classList.add('active');


    });
}

function hideAllTexts(argument) {
    for (var i = 0; i < texts.length; i++) {
        texts[i].classList.remove('active');
    }
}
