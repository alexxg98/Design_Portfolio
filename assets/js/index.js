//Go back to Main Portfolio Page
function goBack() {
  window.history.back();
  // window.location.href="https://alexxg98.github.io/";
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].classList.remove("show");
    if (x[i].className.indexOf(c) > -1) x[i].classList.add("show");
  }
  window.scrollTo(0, 0);
}

// Add active class to the current button (highlight it)
var filterContainer = document.getElementById("filterMenu");
var btns = filterContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}