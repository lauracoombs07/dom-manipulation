"use strict";

window.addEventListener("load", populateInitialData);
window.addEventListener("load", makeStyles);

function populateInitialData() {

  // (Using JS only) Change the body tag's style so it has a font-family of "Arial, sans-serif".
  document.body.style.fontFamily = "Arial, sans-serif";

  // (Using JS only) Replace each of the spans (nickname, favorites, hometown) with your own information.
  document.getElementById("nickname").innerHTML = "Sadly not a single one!!";
  document.getElementById("favorites").textContent = "Halloween, Fettuccine Alfredo, Oregon Coast!";
  document.getElementById("hometown").textContent = "Sublimity, Oregon";

  // (Using JS only) Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
  var listItems = document.getElementsByTagName("li");
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].className = "listitem";
    listItems[i].style.color = "red";
  }

  // create div to put list in
  var divElement1 = document.createElement("div");
  divElement1.appendChild(document.getElementsByTagName("ul")[0]);
  document.body.appendChild(divElement1);

  // (Using JS Only) Create a new img element and set its src attribute to a picture of you with the picture being named "me1.jpg".   Append that image under the <h1>.
  var imageElement = document.createElement("img");
  imageElement.src = "images/me1.png";
  imageElement.setAttribute("alt", "Laura Coombs");
  var divElement2 = document.createElement("div");
  divElement2.appendChild(imageElement);
  document.body.appendChild(divElement2);
  imageElement.style.height = "400px";
  imageElement.addEventListener("click", changePic);

  // create a link to navigate to collections.html
  var divElement = document.createElement("div");
  var collectionsLink = document.createElement("a");
  collectionsLink.href = "collections.html";
  collectionsLink.textContent = "Collections";
  divElement.appendChild(collectionsLink);
  document.body.appendChild(divElement);
}
// (Using JS Only) call a function ChangePic() function when the user clicks on your image, and change the src property of the image to display another random picture of you*.
function changePic() {
  var imageElement = document.getElementsByTagName("img")[0];
  imageElement.src = "images/me2.png";
  setTimeout(function () {
    imageElement.src = "images/me1.png";
  }, 2000)
}

// apply styling
function makeStyles() {
  // create a style element for ssheet
  var embeddedStyles = document.createElement("style");

  // append style element to the document <head>
  document.head.appendChild(embeddedStyles);

  // insert all style rules to embedded styles
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "img { " +
    "display: inline-block;" +
    // "width: 80%;" +
    "}"
    , 0
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "h1 { " +
    "width: 100%;" +

    "text-align: center;" +
    "font-style: italic;" +
    "padding: 20px 0;" +
    "}"
    , 1
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "div { " +
    "margin: auto;" +
    "text-align: center;" +
    "}"
    , 2
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "a:link, a:visited { " +
    "text-decoration: none;" +
    "padding: 10px 40px;" +
    "color: black;" +
    "font-size: 40px;" +
    "display: inline-block;" +
    "}"
    , 3
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "a:hover, a:active { " +
    "text-decoration: none;" +
    "padding: 10px 40px;" +
    "color: hotpink;" +
    "font-size: 45px;" +
    "font-style: italic;" +
    "display: inline-block;" +
    "text-transform: uppercase;" +
    "}"
    , 4
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "div { " +
    "margin: auto;" +
    "text-align: center;" +
    "}"
    , 3
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "ul { " +
    "width: 35%;" +
    "margin: auto;" +
    "padding: 40px 0;" +
    // "text-align: center;" +
    "}"
    , 4
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "li { " +
    "text-align: left;" +
    "}"
    , 5
  );
}
