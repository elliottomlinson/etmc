var index = 1;
slideshow(index);

function slidenav(n) {
  slideshow(index += n);
}

function visible(n) {
  slideshow(index = n);
}

function slideshow(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (n > slides.length) {index = 1}
  if (n < 1) {index = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index-1].style.display = "block";
}
