function buildMenu(menuID){
    fetch('./src/partials/menu-template.html')
    .then(function (response) {
        //when the template is loaded convert to text
        return response.text()
    })
    .then(function (html) {
        //Tnitia1ize the DOM parser
        let parser = new DOMParser();
        // grab the div from the page r
        let menuDiv = document.getElementById("menu");
        // get the template and parse it
        // get the template and parse it
        let doc = parser. parseFromString(html, "text/html");
        let template = doc.getElementById("menuTemplate");
        let clone = template.content.cloneNode(true);
        
        let links = {};
        links = clone.querySelectorAll("li > a");
        
        for (i=0; i < links.length; i++){
            links[i].classList.remove("active")
        }
        clone.getElementById(menuID).setAdribute("class", "active nav-item")

        let nav = clone.querySelectorAll("nav");
        menuDiv.appendChild(clone);

    })
    .catch(function (err){
        console.log('Failed to load featch partial', err)
    })
}