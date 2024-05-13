function createImageGrid(images) { //Function defined to create image grid with inputted JSON 
  var gridContainer = document.getElementById("imageGrid");

  images.forEach(function(image) { //Iterates through the JSON and creates a function with the iteration
    var gridItem = document.createElement("div"); //creates a division called grid item
    gridItem.classList.add("grid-item"); //adds grid-item as a class to this griditem to allow css styling. 

    var link = document.createElement("a"); //creates a link 

    var img = document.createElement("img"); //creates an image tag
    img.src = image.image; //pulls the image from the JSON iteration image value
    img.alt = image.description; //pulls the description from the JSON iteration for the description value and uses this as alt text in the <img> tag

    link.appendChild(img); //adds the <img> image within the <a> tag

    link.addEventListener("click", function(event) { //listening out for a click

      openModal(image.image, image.description, image.ingredients, image.instructions); //function defined below to opens a floating modal with the iteration image, alt text, ingredients and instructions from the JSON file as arguments 
    });

    var description = document.createElement("p"); //create a paragraph element
    description.textContent = image.description; //Adds the alt text as the title.

    gridItem.appendChild(link); // Link goes in the <div> grid item
    gridItem.appendChild(description); //description goes in the grid item
    gridContainer.appendChild(gridItem); //adds the whole thing to the grid. 
  });
}


function openModal(imageSrc, description, ingredients, instructions) { //function defined to open the floating odal 
  var modalContainer = document.createElement("div"); //creates a div in the modal
  modalContainer.classList.add("modal"); //calls that div modal 

  var modalContent = document.createElement("div"); //creates another div in the modal
  modalContent.classList.add("modal-content"); //calls that item modal-content 

  var closeButton = document.createElement("span"); //creates a span for the close button
  closeButton.classList.add("close"); //calls it close for css styling
  closeButton.innerHTML = "&times;"; //adds an x for the close button

  closeButton.addEventListener("click", function() { //close button listens for a click
      modalContainer.style.display = "none"; //display "none" means the modal is then hidden away ie closed. 
  });

  var largerImage = document.createElement("img"); //container for the image 
  largerImage.src = imageSrc; //pulls the image from the JSON
  largerImage.alt = description;//pull the description from the JSON  as alt text 

  var recipeTitle = document.createElement("p"); //creates a paragraph for recipe title 
  recipeTitle.textContent = description; //recipe title = description basically. 

  var recipeIngredients = document.createElement("p"); //creates a paragraph for the ingredients 
  recipeIngredients.textContent = "Ingredients: " + ingredients; //Creates a title Ingredients: then pulls the info from JSON 

  var recipeParagraph = document.createElement("p"); //creates a paragraph for Instructions
  recipeParagraph.textContent = "Instructions: " + instructions; //pulls the instructions form the paragraph with a title Instructions: 

  modalContent.appendChild(closeButton); //adds the close button to the modal
  modalContent.appendChild(largerImage); //adds the big image to the modal
  modalContent.appendChild(recipeTitle); //adds the title
  modalContent.appendChild(recipeIngredients); //adds the ingredients paragraph
  modalContent.appendChild(recipeParagraph); //adds the instructions paragraph 

  modalContainer.appendChild(modalContent); //adds the content to the container 
  document.body.appendChild(modalContainer); //adds the container to the document <body> 

  modalContainer.style.display = "block"; //puts it in block style
}

fetch("assets/gallery.json") //retrieves the json file containing the images
  .then(function(response) { //creates the function to return the json
    return response.json();
  })
  .then(function(data) {
    // creates a function to run the image grid with the retrieved json data. 
    createImageGrid(data);
  });