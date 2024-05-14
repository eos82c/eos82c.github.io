var imagesContainer = document.getElementById('carouselImages');
var caption = document.getElementById('carouselCaption');
var prev = document.getElementById('carouselPrev');
var next = document.getElementById('carouselNext');

fetch("assets/coursegallery.json")

.then(function(res) {

  res.json().then(function(json) {

    json.forEach(function(element, i) {

      var image = document.createElement('img');

      image.setAttribute('src', element.url);
      image.setAttribute('alt', element.caption);    
      image.setAttribute('title', element.caption);  

      imagesContainer.appendChild(image);
    });
    
    setupCarousel(json);
  });
});


function setupCarousel(json) {
 
  var imageCount = imagesContainer.childElementCount;
  var currentImage = 1;
  var imageWidth = 400;
  
  prev.addEventListener('click', function() {
    if(currentImage != 1) {
      --currentImage;
      imagesContainer.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    caption.innerText = json[currentImage - 1].caption;
  });

  next.addEventListener('click', function() {
    if(currentImage != imageCount) {
      ++currentImage;
      imagesContainer.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    caption.innerText = json[currentImage - 1].caption;
  });
  caption.innerText = json[currentImage - 1].caption;
}