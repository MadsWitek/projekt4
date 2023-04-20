
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
navBar = document.querySelector(".nav-bar");
navBar.classList.toggle("active");
}

function changeElement() {
    alert('Du er ved at åbne PDF filer');
}



// Add active class to the current button (highlight it)
var header = document.getElementById("nav-bar");
var btns = header.getElementsByClassName("bb");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

function bigImg(x) {
  x.style.height = "80px";
  x.style.width = "80px";
}

function normalImg(x) {
  x.style.height = "32px";
  x.style.width = "32px";
}


let mybutton = document.getElementById("scrolle");
           

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
           
 
