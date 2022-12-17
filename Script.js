// "use strict";
// function random(number) {
//   return Math.floor(Math.random() * number);
// }
// function bgColor() {
//   let rndColor = `rgb(${random(255)},${random(255)},${random(255)})`;
//   return rndColor;
// }
// let perantDiv = document.querySelector(".tile");

// perantDiv.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.target.style.backgroundColor = bgColor();
//   let result = document.querySelector(".result");
//   result.textContent = bgColor();
//   perantDiv.textContent = "";
//   // body
//   let container = document.querySelector(".result-colors");
//   let parent = document.createElement(`div`);
//   parent.className = `parent`;
//   document.body.appendChild(parent);
//     // main div
//     let child = document.createElement("div"); // inside div =`product + span num span`
//     child.className = "Childern";
//     // result  resorce
//     child.textContent = result.textContent;
//     //title style main div
//     child.style.cssText = `color:black ;border: 1px solid white;  width:100%; padding: 20px; font-size:30px; text-align:center;`;
//     //numbers style
//     let num = document.createElement("span");
//     num.style =
//       "font-size:40px; color:black; font-weight:bold; display:block; margin-bottom:10px; margin-top:10px; ";
//     num.style.cssText = `font-size:30px;`;
//     // appending to body and merge elements...
//     document.body.appendChild(child);
//     document.body.appendChild(num);
//     parent.appendChild(child);
//     child.appendChild(num);
//     container.appendChild(child);
//     // console.log(result.textContent);
// });

"use strict";
let title = document.querySelector(".title");
function random(number) {
  return Math.floor(Math.random() * number);
} 
let mainColor = function bgColor() {
  let rndColor = `rgb(${random(255)},${random(255)},${random(255)})`;
  return rndColor;
};
let perantDiv = document.querySelector(".tile");

perantDiv.addEventListener("click", (e) => {
  const _mainColor = mainColor();
  e.preventDefault();
  e.target.style.backgroundColor = _mainColor;
  let result = document.querySelector(".result");
  result.textContent = _mainColor;
  result.style.backgroundColor = _mainColor;
  perantDiv.textContent = "";
  // body
  let container = document.querySelector("#user-data");
  let child = document.createElement("div");
  child.textContent = _mainColor;
  child.style.backgroundColor = _mainColor;
  container.prepend(child);
});
