"use strict";

window.addEventListener("load", populateInitialData);
window.addEventListener("load", makeStyles);

// Collection Array
var books = [
  {title: 'All Creatures Great and Small',
    author: 'James Herriot',
    alreadyRead: false
  },
  {title: 'Little Women',
    author: 'Louisa May Alcott',
    alreadyRead: false
  },
  {title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    alreadyRead: false
  },
  {title: 'James',
    author: 'Percival Everett',
    alreadyRead: false
  },
  {title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'JK Rowling',
    alreadyRead: false
  },
  {title: 'The Great Alone',
    author: 'Kristin Hannah',
    alreadyRead: false
  }
  ];

function populateInitialData() {

  document.body.style.fontFamily = "Arial, sans-serif";
  // Create Table elements
  var table = document.createElement("table");
  var headerRow = document.createElement("tr");
  var headerTitle = document.createElement("th");
  var headerAuthor = document.createElement("th");
  var headerRead = document.createElement("th");
  var tableCaption = document.createElement("caption");
  tableCaption.id = "tableCaption";

  // Set the header text
  headerTitle.textContent = "Title";
  headerAuthor.textContent = "Author";
  headerRead.textContent = "Read";

  // Append the header elements to the header row
  headerRow.appendChild(headerTitle);
  headerRow.appendChild(headerAuthor);
  headerRow.appendChild(headerRead);

  // Append the header row to the table
  table.appendChild(headerRow);

  var count = countReadBooks();

  // create table
  for (var i = 0; i < books.length; i++) {
    var row = document.createElement("tr");
    var title = document.createElement("td");
    var author = document.createElement("td");
    var read = document.createElement("td");
    tableCaption.textContent = `You've read ${count} of my favorite books`;
    title.textContent = books[i].title;
    author.textContent = books[i].author;
    var readImage = document.createElement("img");
    // add an id to each readImage so I can add event listener later
    readImage.id = i;

    // add event listener to toggle state
    readImage.addEventListener("click", function() {
      var book = books[this.id];
      toggleRead(book);
      book.alreadyRead ? this.src = "images/valid.png" : this.src = "images/invalid.png";
      // update count in caption based on the current alreadyRead status
      count = countReadBooks();
      if (count === books.length) {
        tableCaption.textContent = `You've read all of my favorite books!!!`;
        document.getElementById("tableCaption").style.fontSize = "20px";
        document.getElementById("tableCaption").style.color = "hotpink";
      } else {
        tableCaption.textContent = `You've read ${count} of Laura's favorite books`;
        document.getElementById("tableCaption").style.fontSize = "14px";
        document.getElementById("tableCaption").style.color = "black";
      }
    })

    // assign image source based on the current alreadyRead status
    readImage.src = books[i].alreadyRead ? "images/valid.png" : "images/invalid.png";

    read.appendChild(readImage);

    // append elements to row
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(read);

    // append elements to table
    table.appendChild(row);
    table.appendChild(tableCaption);

    // apply styles to table
    table.style.margin = "auto";
    table.style.borderCollapse = "collapse";
    table.style.border = "1px solid purple";
    table.caption.style.captionSide = "bottom"

    table.caption.style.padding = "15px 0"
  }



  // append completed table to body
  document.body.appendChild(table);

  // create a link to navigate to index.html (About Me page)
  var linkContainer = document.createElement("div");
  var aboutMe = document.createElement("a");
  aboutMe.href = "index.html";
  aboutMe.textContent = "About Me";
  linkContainer.appendChild(aboutMe);
  document.body.appendChild(linkContainer);
}


// Additional Functions
function toggleRead(book) {
  book.alreadyRead = !book.alreadyRead;
  return book
}

function countReadBooks() {
  let count = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
      count++;
    }
  }
  return count;
}

// apply styling to table
function makeStyles() {
  // create a style element for ssheet
  var embeddedStyles = document.createElement("style");

  // append style element to the document <head>
  document.head.appendChild(embeddedStyles);

  // insert all style rules to embedded styles
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "table { " +
    "border-collapse: collapse;" +
    "width: 80%;" +
    "}"
    , 0
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "th, td { " +
    "border: 1px solid black;" +
    "padding: 8px;" +
    "text-align: left;" +
    "}"
    , 1
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "th { " +
    "background-color: pink;" +
    "}"
    , 2
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "h1 { " +
    "text-align: center;" +
    "font-style: italic;" +
    "padding: 20px 0;" +
    "}"
    , 3
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "div { " +
    "margin: auto;" +
    "text-align: center;" +
    "}"
    , 3
  );
  document.styleSheets[document.styleSheets.length - 1].insertRule(
    "a:link, a:visited { " +
    "text-decoration: none;" +
    "padding: 10px 40px;" +
    "color: black;" +
    "font-size: 40px;" +
    "display: inline-block;" +
    "}"
    , 4
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
    , 5
  );
}
