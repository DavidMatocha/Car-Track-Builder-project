const menuScreen = document.querySelector('.menu-screen');
const startButton = document.querySelector('.start-button');
const gameScreen = document.querySelector('.game-screen');

const newTrackBtn = document.querySelector('.new-track-btn');
const saveMapBtn = document.querySelector('.save-map-btn');

const gridSize = 20;


let currentTrack = null;


function createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('click', () => {
            cell.classList.toggle('track');
            if (cell.classList.contains('track')) {
                if (!currentTrack) currentTrack = [];
                currentTrack.push(i);
            } else {
                if (currentTrack) {
                    currentTrack = currentTrack.filter(index => index !== i);
                    if (currentTrack.length === 0) currentTrack = null;
                }
            }
        }
        );
        grid.appendChild(cell);
    }
    return grid;
}


startButton.addEventListener('click', () => {
    menuScreen.style.display = 'none';
    gameScreen.style.display = 'block';
});
newTrackBtn.addEventListener('click', () => {
    currentTrack = null;
    console.log('New track created');
});
saveMapBtn.addEventListener('click', () => {
    if (currentTrack) {
        console.log('Track saved:', currentTrack);  
    } else {
        console.log('No track to save');
    }
});