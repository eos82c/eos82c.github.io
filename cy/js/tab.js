function openPage(evt, pageName) { //evt = clicking a tab, pageName = ID of the page tab 
    var i, tabcontent, tablinks
    
    //goes through all tabs and hides everything. 
    tabcontent = document.getElementsByClassName("tabcontent"); //Tabcontent = class name = tabcontent hides anything within tabcontent
    for (i = 0; i < tabcontent.length; i++) { //i = 0 stop once i reaches the tabcontent length ie number of elements within tabcontent class, add one each time 
        tabcontent[i].style.display = "none"; //check tabcontent[0] - all elements stored in a list, so iterates through the indexes. sets display to none. 
    }
    //goes through all tab links, the buttons, replace active class, which highlights selected class in css 
    tablinks = document.getElementsByClassName("tablinks");
    for (i=0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    //finds tab content section with pageName and makes it visible by setting its display style to block. 
    document.getElementById(pageName).style.display="block";
    evt.currentTarget.className += " active";
}
