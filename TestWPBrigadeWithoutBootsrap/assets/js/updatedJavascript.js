function hide(obj) {
    var el = document.getElementById(obj);
    el.style.display = 'none';
}
function collapse(obj) {
    var cn = document.getElementById(obj);
    var windowWidth = window.innerWidth;
      if (cn.style.display == 'block' && windowWidth<=767.5)
      {
        cn.style.display = 'none';
      }
       else
      {
        cn.style.display = 'block';
      }
  }

window.addEventListener('resize', function (e) {
  var currentWidth = window.innerWidth;
  var e = document.getElementById('collapseNav');
  if (currentWidth > 767.5)
  {
    e.style.display = 'block';
  }
  else {
    e.style.display = 'none';
  }
});

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
  var slides = document.getElementsByClassName("sliderItem");
  var dots = document.getElementsByClassName("carousel-indicators");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var thumbSlideIndex = 1;
thumbShowSlides(thumbSlideIndex);

// Next/previous controls
function thumbPlusSlides(n) {
  thumbShowSlides(thumbSlideIndex += n);
}

// Thumbnail image controls
function thumbCurrentSlide(n) {
  thumbShowSlides(thumbSlideIndex = n);
}

function thumbShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("thumbSliderItem");
  var dots = document.getElementsByClassName("thumbCarousel-indicators");
  if (n > slides.length) {thumbSlideIndex = 1}
  if (n < 1) {thumbSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[thumbSlideIndex-1].style.display = "block";
  dots[thumbSlideIndex-1].className += " active";
}
