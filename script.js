const menuScreen = document.getElementById('menu-screen');
const newTrackButton = document.getElementById('new-track-button');
const editorScreen = document.getElementById('editor-screen');

const newTrackBtn = document.getElementById('new-track-btn');
const saveMapBtn = document.getElementById('save-map-btn');
const showLoadBtn = document.getElementById('show-load-btn');
const backToMenuBtn = document.getElementById('back-to-menu-btn');
const clearMapBtn = document.getElementById('clear-map-btn');

const mapNameInput = document.getElementById('map-name-input');
const savedMapsList = document.getElementById('saved-maps-list');
const loadScreen = document.getElementById('load-screen');

const gird = document.getElementById('grid');
const toolButtons = document.querySelectorAll('.tool-button');
const activeToolText = document.getElementById('active-tool');

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