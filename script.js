const container = document.getElementById('container');

function createGrid(size) {
    // Clear existing grid
    container.innerHTML = '';

    // Calculate square size based on total grid size and desired number of squares
    const squareSize = 960 / size;

    // Calculate total container size to make it a square
    const containerSize = squareSize * size;

    // Set container size
    container.style.width = containerSize + 'px';
    container.style.height = containerSize + 'px';

    // Create new grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        container.appendChild(square);
    }

    // Set grid size using CSS
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}




function colorSquare(square) {
    // Change the background color of the square
    const randomColor = getRandomColor();
    square.style.backgroundColor = randomColor;
}

function getRandomColor() {
    // Generate a random hex color code
    return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

function promptUser() {
    const newSize = prompt('Enter the number of squares per side (max: 100):');
    
    if (newSize !== null && newSize !== '') {
        const parsedSize = parseInt(newSize);
        if (!isNaN(parsedSize) && parsedSize > 0 && parsedSize <= 100) {
            createGrid(parsedSize);

            // Add event listeners to color the square on hover
            const squares = document.querySelectorAll('.square');
            squares.forEach(square => {
                square.addEventListener('mouseover', () => {
                    colorSquare(square);
                });
            });
        } else {
            alert('Please enter a valid number between 1 and 100.');
        }
    }
}

// Initial grid creation
createGrid(16);
