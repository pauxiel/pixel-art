// Select color input
const colorInput = document.getElementById("colorPicker");

// Select size input
const sizePicker = document.getElementById("sizePicker");
// pixelCanvas table
const pixelCanvas = document.getElementById("pixelCanvas");

sizePicker.addEventListener("submit", makeGrid);

// When size is submitted by the user, call makeGrid()

function makeGrid(e) {
  if (pixelCanvas.childElementCount > 0) {
    pixelCanvas.innerHTML = "";
  }

  e.preventDefault();

  const numberRow = document.getElementById("inputHeight").value;
  const numberColumn = document.getElementById("inputWidth").value;
  // Your code goes here!
  for (let i = 0; i < numberRow; i++) {
    const tableRow = document.createElement("tr");
    for (let j = 0; j < numberColumn; j++) {
      const tableData = document.createElement("td");
      tableData.style.backgroundColor = colorInput.value;
      tableRow.appendChild(tableData);
      tableData.addEventListener("click", function(e) {
        e.target.style.backgroundColor = colorInput.value;
      })
    }
    
    pixelCanvas.appendChild(tableRow);
  }
  
}

// tableData.addEventListener("mousedown", function(e) {
//   if (e.target.tagName !== "TD") return;
//   e.target.style.backgroundColor = colorInput.value;
// });
