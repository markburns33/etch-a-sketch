// toDO:
// change every cell to be random colour when hovered
// decrease opacity by 10% with every hover
// finished/css




const container = document.getElementById('grid-container');

function drawBoard(size=16) {
    const cellSize = 100/size;
    for (let i=0; i<size*size; i++) {
        const newDiv = document.createElement('div');
    
        newDiv.classList.add('div-grid');
        newDiv.style.height = `${cellSize}%`;
        newDiv.style.flexBasis = `${cellSize}%`;
        newDiv.style.backgroundColor = generateRandomColor();
    
        container.appendChild(newDiv);
    }
}

function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
    }

// container.addEventListener('mouseover', (event) => {
//     if (event.target.classList.contains('div-grid')) {
//         event.target.style.backgroundColor = 'rgba(255,0,0,1)';
//     }
// })
container.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('div-grid')) {
    currentOpacity = window.getComputedStyle(event.target).opacity;
    event.target.style.opacity = currentOpacity - 0.1;
    event.target.style.backgroundColor = generateRandomColor();
    console.log(event.target.style.backgroundColor);
    console.log(event.target.style.opacity)
    }
})

const boardSizeButton = document.getElementById(('user-board-size'));
boardSizeButton.addEventListener('click', function() {
    const divsToRemove = document.querySelectorAll('.div-grid');
    if (divsToRemove) {
        divsToRemove.forEach(div => div.remove());
    }
    valid = 'false';
    while (valid === 'false') {
        let userWidth = prompt('Enter the width: ');
        if (userWidth<=100 && userWidth>=1) {
            valid = 'True';
            drawBoard(userWidth);
        }
    }
})