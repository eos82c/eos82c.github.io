var images = document.getElementById('carouselImages'); //declares a variable called images coming from the carouselImages id in the HTML
var caption = document.getElementById('carouselCaption'); //variable captio coming from carouselCaption ID
var prev = document.getElementById('carouselPrev'); //variable prev declared as the carouselPrev id
var next = document.getElementById('carouselNext'); //variable next declared as the carouselNext id 

fetch("assets/coursegallery.json") //retrieves the JSON array storing the course images and captions etc. 

.then(function(res) { //carries out a response

  res.json().then(function(json) { //if there's a repsonse, retrieves it them carries out the function json on it 

    json.forEach(function(element) { //json function delared to loop through each object of the json array

      var image = document.createElement('img'); //declares the image variable as a HTML <img> element

      image.setAttribute('src', element.url); //URL from JSON is set a 'src' attribute of the <img> element 
      image.setAttribute('alt', element.caption); //caption is set as 'alt' for alternative text 
      image.setAttribute('title', element.caption);  //caption also set as 'title'

      images.appendChild(image); //add image to the carouselImages ID to be edited with CSS 
    });
    
    setupCarousel(json); //runs a functiond efined below to set up the carousel structure
  });
});


function setupCarousel(json) { 
 
  var imageCount = images.childElementCount; //counts how many images there are in the variable looped thorugh above and sets this as the image count 
  var currentImage = 1; //start at the first 
  var imageWidth = 400; //image width set at 400 - I would love to be able to scale it but didn't manage to suss it out! Therefore have set it suitable for mobile screens
  
  prev.addEventListener('click', function() { //event listener created on prev variable to listen out for a click and carry out a function
    if(currentImage != 1) { //check current image isn't one as one is at the start - can't go backwards. 
      --currentImage; //remove previous image count therefore defining the new image count
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px'; //move all images by removing an image width of pixels from the current width 
    }
    caption.innerText = json[currentImage - 1].caption; //pull the previous caption from the JSON and place it in the caption container
  });

  next.addEventListener('click', function() { //same as above but in the other direction by adding to the image count instead of subtracting. 
    if(currentImage != imageCount) {
      ++currentImage; 
      images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
    }
    caption.innerText = json[currentImage - 1].caption;
  });
  caption.innerText = json[currentImage - 1].caption; //pull caption onto current image by taking the corresponding index from the array 
}