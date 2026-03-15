const menuScreen = document.getElementById('menuScreen');
const newTrackButton = document.getElementById('newTrackButton');
const editorScreen = document.getElementById('editorScreen');

const newTrackBtn = document.getElementById('newTrackBtn');
const saveMapBtn = document.getElementById('saveMapBtn');
const showLoadBtn = document.getElementById('showLoadBtn');
const backToMenuBtn = document.getElementById('backToMenuBtn');
const clearMapBtn = document.getElementById('clearMapBtn');

const mapNameInput = document.getElementById('mapNameInput');
const savedMapsList = document.getElementById('savedMapsList');
const loadScreen = document.getElementById('loadScreen');

const grid = document.getElementById('grid');
const toolButtons = document.querySelectorAll('.tool-btn');
const activeToolText = document.getElementById('activeToolText');

const gridSize = 20;
const storageKey = 'carTrackBuilderMaps';



let currentTool = "grass";
let mapData = [];

function createEmptyMap() {
    const newTrack = [];
    for (let y = 0; y < gridSize; y++) {
        const row = [];
        for (let x = 0; x < gridSize; x++) {
            row.push("grass");
        }
        newTrack.push(row);
    }
    return newTrack;
}

function renderGrid() {
    grid.innerHTML = '';
    for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.dataset.x = x;
            cell.dataset.y = y;
            cell.style.backgroundImage = `url('assets/${mapData[y][x]}.png')`;
            grid.appendChild(cell);
        }
    }
}

function showEditor() {
    menuScreen.classList.add('hidden');
    editorScreen.classList.remove('hidden');
    mapData = createEmptyMap();
    renderGrid();
}

function showMenu() {
    editorScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
}

function updateActiveTool() {
    toolButtons.forEach(function(button) {
        




        if (button.dataset.type === currentTool) {
            button.classList.add('active');

    }
});
    if (currentTool === "grass") {
        activeToolText.textContent = "Aktuální nástroj: Tráva";
    }  if (currentTool === "road") {
        activeToolText.textContent = "Aktuální nástroj: Silnice";
    }  if (currentTool === "water") {
        activeToolText.textContent = "Aktuální nástroj: Voda";
    }  if (currentTool === "road_straight") {
        activeToolText.textContent = "Aktuální nástroj: Rovná silnice";
    }  if (currentTool === "road_turn") {
        activeToolText.textContent = "Aktuální nástroj: Zatáčka";
    } if (currentTool === "road_cross") {
        activeToolText.textContent = "Aktuální nástroj: Křižovatka";
    }
}
