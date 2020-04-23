// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
   const div =document.createElement("div");
   div.classList.add(".header");

   const span1 =document.createElement("span");
   span1.classList.add("date");
   span1.textContent ="SMARCH 28. 2019";

   const  hone =document.createElement("h1")
   hone.textContent ="Lambda Times";

   const span2 =document.createElement("span");
   span2.classList.add("temp");
   span2.textContent = "98";

   ElementArray = [span1, hone, span2];

 div.appendChild(span1);
 div.appendChild(hone);
 div.appendChild(span2)

 ElementArray.forEach(el => div.appendChild(el));

return div;
};
const headerEntry = document.querySelector(".header-container").appendChild(Header());



