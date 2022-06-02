// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("poem");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

function onClick(element) {
  modalImg.src = element.src;
  modal.style.display = "block";
  // captionText.innerHTML = this.alt;
}

// Open the Modal Carousel
var modal_carousel = document.getElementById("myModal_carousel");
function openModal() {
  modal_carousel.style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imgSlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


// Close the Modal using button
function closeModal() {
  modal_carousel.style.display = "none";
  modal.style.display = "none";
}

// CLose the Modal when user clicks outside image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  if (event.target == modal_carousel) {
    modal_carousel.style.display = "none";
  }
}