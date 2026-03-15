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
            cell.classList.add('cell');
            cell.classList.add(mapData[y][x]);
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
}

function showMenu() {
    editorScreen.classList.add('hidden');
    menuScreen.classList.remove('hidden');
}

function updateActiveTool() {
    toolButtons.forEach(function(button) {
    button.classList.remove("active");
  });

    toolButtons.forEach(function (button) {
    if (button.dataset.type === currentTool) {
      button.classList.add("active");
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

function saveMap() {
    const savedMapsText = localStorage.getItem(storageKey);

    if (!savedMapsText) {
        return {};
    }
    return JSON.parse(savedMapsText);
}

function saveAllMaps(allMaps) {
    localStorage.setItem(storageKey, JSON.stringify(allMaps));
}

function saveCurrentMap() {
    const mapName = mapNameInput.value.trim();
    if (mapName === '') {
        alert("Zadej název mapy!");
        return;
    }

    const allMaps = saveMap();
    allMaps[mapName] = mapData;
    saveAllMaps(allMaps);
    alert("Mapa uložena!");
    renderSavedMaps();
}

function loadMapBYName(mapName) {
    const allMaps = saveMap();
    if (!allMaps[mapName]) {
        alert("Mapa nenalezena!");
        return;
    }

    mapData = allMaps[mapName];
    mapNameInput.value = mapName;
    renderGrid();
    alert("Mapa načtena!");
    showEditor();
}

function deleteMap(mapName) {
    const allMaps = saveMap();
    delete allMaps[mapName];
    saveAllMaps(allMaps);
    alert("Mapa smazána!");
    renderSavedMaps();
}

function renderSavedMaps() {
    const allMaps = saveMap();
    const mapNames = Object.keys(allMaps);
    savedMapsList.innerHTML = '';
    if (mapNames.length === 0) {
        savedMapsList.innerHTML = '<p class="text">Žádné uložené mapy</p>';
        return;
    }
    mapNames.forEach(function(mapName) {
        const mapItem = document.createElement('div');
        mapItem.classList.add('saved-map-item');

        const name = document.createElement("div");
        name.classList.add("saved-map-name");
        name.textContent = mapName;

        const actions = document.createElement("div");
        actions.classList.add("saved-map-actions");

        const loadBtn = document.createElement("button");
        loadBtn.classList.add("main-btn");
        loadBtn.textContent = "Načíst";
        loadBtn.addEventListener('click', function() {
            loadMapBYName(mapName);
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("secondary-btn");
        deleteBtn.textContent = "Smazat";
        deleteBtn.addEventListener('click', function() {
            deleteMap(mapName);
        });
        actions.appendChild(loadBtn);
        actions.appendChild(deleteBtn);
        mapItem.appendChild(actions);
        mapItem.appendChild(name);
        savedMapsList.appendChild(mapItem);
    });
}

toolButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        currentTool = button.dataset.type;
        updateActiveTool();
    });
});

grid.addEventListener('click', function(event) {
    if (!event.target.classList.contains('cell')) {
        return;
    }

    const x = parseInt(event.target.dataset.x);
    const y = parseInt(event.target.dataset.y);
    mapData[y][x] = currentTool;
    event.target.className = 'cell ' + currentTool;
});

newTrackBtn.addEventListener('click', function() {
    mapData = createEmptyMap();
    renderGrid();
    showEditor();
});

showLoadBtn.addEventListener('click', function() {
    renderSavedMaps();
    loadScreen.classList.toggle('hidden');
});

saveMapBtn.addEventListener('click', function() {
    saveCurrentMap();
});

clearMapBtn.addEventListener('click', function() {
    mapData = createEmptyMap();
    renderGrid();
});
backToMenuBtn.addEventListener('click', function() {
    showMenu();
});

mapData = createEmptyMap();
updateActiveTool();
renderSavedMaps();
