  fetch("assets/herogallery.json") //fetches JSON data
    .then(function(response) {
      return response.json(); //returns the json data into a function
    })
    .then(function(data) {
      createHero(data); //function called to create a series of hero image from the data (defined below)
    })

  function createHero(images) { //defines the function to create hero images banner
    var heroContainer = document.getElementById("heroContainer"); //defines a container for the images 
    var currentIndex = 0; //sets the image 

    images.forEach(function(image, index) { //creates a function to pull the images from the JSON and assign an index 
      var img = document.createElement("img"); //creates an image element
      img.src = image.image; //pulls teh image source from the JSON image value and adds it t<img src>
      img.alt = image.caption; //pulls the alt text from description
      img.classList.add("hero-img"); //defines class for the image
      if (index === 0) { //checks if the index is zero
        img.classList.add("active"); //redefines class as active 
      }
      heroContainer.appendChild(img); //adds an <img> image to the container 
    });

    function showImage(index) { //function to show the image and hide all the others. 
      var heroImages = document.querySelectorAll(".hero-img"); //selects all hero images and declares them as heroImages
      heroImages.forEach(function(img, idx) { //creates a function that inputs image and index
        if (idx === index) { //checks that index is equal to index defined above
          img.classList.add("active"); //highlights the image as active by adding a class active. 
        } else {
          img.classList.remove("active"); //removes the active class if the index doesn't match. 
        }
      });
    }

    function nextImage() { //defines a function to show the next image 
      currentIndex = (currentIndex + 1) % images.length; //updates the current image by finding the remainder of currentindex+1 and the length of the images array - this will ensure that when the image index hits the length of the array (and the remainder is 0) it will loop back to index 0 ie the beginning, ensuring a continuous loop. 
      showImage(currentIndex); //shows the new image. 
    }

    showImage(currentIndex); //shows the first image 

    setInterval(nextImage, 3000); //runs the next image function after 3 seconds. 
  }