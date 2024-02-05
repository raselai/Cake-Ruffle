// script.js
const participantForm = document.getElementById('participant-form');
const participantNameInput = document.getElementById('participant-name');
const participantList = document.getElementById('participant-list');
const winnerDisplay = document.getElementById('winner-display');
const drawButton = document.getElementById('draw-button');
const resetButton = document.getElementById('reset-button');
let participants = [];

participantForm.addEventListener('submit', (event) => {
    event.preventDefault();
    participants.push(participantNameInput.value);
    participantNameInput.value = '';
    updateParticipantsList();
});

drawButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winnerName = participants[randomIndex];
    updateWinnerDisplay(winnerName);
});

function updateParticipantsList() {
    participantList.innerHTML = '';
    for (const name of participants) {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        participantList.appendChild(listItem);
    }
}

function updateWinnerDisplay(name) {
    winnerDisplay.innerHTML = '';
    const winnerName = document.createElement('p');
    winnerName.textContent = `Winner: ${name} 🎉`;
    winnerDisplay.appendChild(winnerName);
}
resetButton.addEventListener('click', () => {
   participants = 0;
   winnerDisplay.innerText ='';
   participantList.innerHTML='';
});