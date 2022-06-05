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
var famViews_carousel = document.getElementById("famViews_carousel");
var yousafzai_carousel = document.getElementById("yousafzaiPortrait_carousel");

function openCarousel(selection) {
  // currentSlide(1);
  switch (selection) {
    case 'famViews':
      famViews_carousel.style.display = "block";
      proj_selection = "famViews_img";
      showSlides(1);
      break;
    case 'yousafzaiPortrait':
      yousafzai_carousel.style.display = "block";
      proj_selection = "yousafzaiPortrait_img";
      showSlides(1);
      break;
    default:
      break;
  }
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
  famViews_carousel.style.display = "none";
  yousafzai_carousel.style.display = "none";
}

// CLose the Modal when user clicks outside image
window.onclick = function(event) {
  if (event.target == singleImgModal) {
    closeModal();
  }
  if (event.target == famViews_carousel) {
    closeModal()
  }
  if (event.target == yousafzai_carousel) {
    closeModal()
  }
}