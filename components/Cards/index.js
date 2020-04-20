// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardEntry =document.querySelector(".cards-container")
function cardMaker(event){
    cardDiv = document.createElement("div")
    headlineDiv = document.createElement("div")
    authorDiv = document.createElement("div")
    authorImgDiv = document.createElement ("div")
    authorImg = document.createElement("img")
    authodName =document.createElement("span")

    headlineDiv .textContent = event .headline
    authorImg .scr = event.authorPhoto
    authorname .textContent = event.authodName

    cardDiv.appendChild(headlineDiv, authorDiv, authorImgDiv, authorImg, authorname);
    authorDiv .appendChild(authorImgDiv,authorImg, authorname);
    cardDiv.appendChild(headlineDiv, authorDiv, authorImgDiv, authorImg, authorname);
    authorDiv.appendChild(authorImg, authorname);
    authorImgDiv.appendChild(authorImg);

    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    authorImgDiv.classList.add('img-container');

    cardEntry.appendChild(cardDiv)
    return cardDiv
}



