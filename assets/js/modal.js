// Single Imgage Modal
var singleImgModal = document.getElementById("viewImg");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("displayImg");
// var captionText = document.getElementById("caption");

function onClick(element) {
  modalImg.src = element.src;
  singleImgModal.style.display = "block";
  // captionText.innerHTML = this.alt;
}

// Modal Carousels
var slideIndex = 1;
var proj_selection = "";
var carousel_element;

function openCarousel(selection) {
  carousel_element = document.getElementById(selection + '_carousel');
  carousel_element.style.display = "block";
  proj_selection = selection + '_img';
  showSlides(1);
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName(proj_selection);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  // Only show current slide index
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Close the Modal using button
function closeModal() {
  proj_selection = "";
  slideIndex = 1;
  singleImgModal.style.display = "none";
  carousel_element.style.display = "none";
}

// CLose the Modal when user clicks outside image
window.onclick = function(event) {
  if (event.target == singleImgModal) {
    closeModal();
  }
  if (event.target == carousel_element) {
    closeModal()
  }
}