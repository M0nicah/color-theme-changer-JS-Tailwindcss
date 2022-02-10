const button = document.querySelector("button");
const body = document.querySelector("body");
//colors
const colors = [
  "#ff0000",
  "#000066",
  "#ffff00",
  "#ff0066",
  "#cc33ff",
  "#66ff33",
  "#003300",
  "#0066cc",
  "#00ffcc",
];


button.addEventListener("click", function changeBackground() {
  const colorIndex = parseInt(Math.random()*colors.length + 1);
  body.style.backgroundColor = colors[colorIndex];
});

//0R

// // const colors = ["red", "blue", "green", "purple", "violet", "pink", "yellow"];
// body.style.backgroundColor = "blue";

// document.querySelector("button").addEventListener("click", function () {
//   const colorIndex = parseInt(Math.random() * colors.length + 1);
//   body.style.backgroundColor = colors[colorIndex];
// });
