// I think flexbox. Especially if you are doing the etch and sketch project and are dynamically generating your boxes. Logic is as follows:

// Dynamically determine box size: let's say you want your total grid of boxes to take up 700 pixels, the math is 700/number of boxes.

// Do two loops with one nested in the other that iterates for the total number of boxes you want.

// The first loop creates a row div, the next loop creates the boxes and adds them into the row div, when the nested loop finishes, the row loop adds that row now with X number of boxes into the game container.

// On each box item creation you want to set the width and height like so: item.style.height = `${itemSize}px`

// Hopefully that makes sense.

const container = document.querySelector('.container');

function createBoxes (numBox) {

  for(let i = 0; i < numBox;i++){
    const row = container.appendChild(document.createElement('div'))
    for(let j = 0; j < numBox;j++){
      const square = document.createElement('div')
      square.setAttribute('class', 'box')
      square.style.width = '20px'
      square.style.height = '20px'
      row.appendChild(square)
    }
  }
  
}
createBoxes(64)


// CLICKING ON EACH SQUARE WILL TRIGGER CONSOLE LOG OF IT

// document.addEventListener('click', function(e){
//   if (e.target.matches('.box')){
//     console.log(e)
//   }
// })

//NOW WE NEED TO MAKE IT WORK SO INSTEAD WHEN WE CLICK IT CHANGES
//BACKGROUND COLOR TO GRAY

// document.addEventListener('click', function(e){
//   if (e.target.matches('.box')){
//     e.target.classList.add('boxColor')
//   }
// })

//NOW INSTEAD OF CLICK WE SHOULD HOVER IT AND IT SHOULD CHANGE COLOR

document.addEventListener('mouseover', function(e){
    if (e.target.matches('.box')){
       e.target.classList.add('boxColor')
   }
  
})