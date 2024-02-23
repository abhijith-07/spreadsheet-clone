let rows = 100
let cols = 26

let rowContainer = document.querySelector(".row-names-container")

for(i=1; i<=rows; i++){
    let rowNames = document.createElement("div")
    rowNames.innerText = i
    rowNames.classList = "row-name"
    rowContainer.appendChild(rowNames)
    console.log("ooooooo")
}