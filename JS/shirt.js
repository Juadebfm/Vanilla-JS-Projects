// Reference the color shape that was drawn over the image
const overlay = document.getElementById("product-shape");

function changeColor(picker) {
  // Set the fill style
  overlay.style.fill = picker.toHEXString();
}

// Thats it!

// BONUS

// This function simulates background-size: cover for the SVG inside its parent div, so it would likely be helpful for people migrating from using images to using an SVG locked onto with a photo.

// Reference the SVG
const svg = document.getElementById("product-svg");

// Reference the image
const img = document.getElementById("background-image");

// Place the SVG inside a parent div, reference it
const container = document.getElementById("container");

// (On resize)
window.onresize = () => simulateCover(container, svg, img, 1920, 1280);

// (On load)
simulateCover(container, svg, img, 1920, 1280);

// Pass the parent div, and the SVG (child)
// Pass the image
// x and y are the native dimensions of the image (1920, 1280 in our example)
function simulateCover(parent, child, image, x, y) {
  let { width, height } = parent.getBoundingClientRect();
  let yPercentage = x / y;
  let xPercentage = y / x;

  // Set styles, these can be moved to CSS if need be
  parent.setAttribute("style", "position: relative; overflow: hidden;");

  child.setAttribute(
    "style",
    "display: block; position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  );

  image.setAttribute(
    "style",
    "display: block; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%)"
  );

  if (width < height * yPercentage) {
    child.style.width = height * yPercentage + "px";
    child.style.height = height + "px";

    image.style.width = height * yPercentage + "px";
    image.style.height = height + "px";
  } else {
    child.style.width = width + "px";
    child.style.height = width * xPercentage + "px";

    image.style.width = width + "px";
    image.style.height = width * xPercentage + "px";
  }
}

// COLOR PICKER

// Create a new Picker instance and set the parent element.
// By default, the color picker is a popup which appears when you click the parent.
var parent = document.querySelector("#parent");
var picker = new picker(parent);

// You can do what you want with the chosen color using two callbacks: onChange and onDone.
picker.onChange = function (color) {
  parent.style.background = color.rgbaString;
};

// onDone is similar to onChange, but only called when you click 'Ok'.
