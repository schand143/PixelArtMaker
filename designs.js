// Select color input
let color = document.getElementById("colorPicker");
let table = document.getElementById("pixelCanvas");
let sizePicker = document.getElementById("sizePicker");

let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;

makeGrid(height, width);

sizePicker.addEventListener("click", e => {
  e.preventDefault();
  table.firstChild.remove();
  // console.log(e + "test");
  // console.log(height.value, width.value);
  // console.log(color.value);

  // write a grid
  let height = document.getElementById("inputHeight").value;
  let width = document.getElementById("inputWidth").value;
  makeGrid(height, width);
});
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(height, width) {
  // Your code goes here!
  // console.log(height.value, width.value);
  // let row = table.insertRow(0);
  // let column = table.insertColumn(0);

  // let row = table.insertRow(0);
  // let cell = row.insertCell(0);

  for (let i = 0; i <= height; i++) {
    let row = table.insertRow(i);
    for (let j = 0; j <= width; j++) {
      let cell = row.insertCell(j);
      cell.addEventListener("click", e => {
        // console.log(e);
        cell.style.backgroundColor = color.value;
      });
    }
  }
}
