// Jam Analog
const hourHand = document.getElementById('hour-hand');
const minuteHand = document.getElementById('minute-hand');
const secondHand = document.getElementById('second-hand');
const clock = document.getElementById('clock');

function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDeg = (seconds / 60) * 360 + 90;
    const minutesDeg = (minutes / 60) * 360 + 90;
    const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;

    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Agenda pada Jam
const agendaList = document.getElementById('agendaList');
const agendaForm = document.getElementById('addAgendaForm');
const agendaInput = document.getElementById('agendaInput');

agendaForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const agendaText = agendaInput.value.trim();

    // Ambil jam agenda
    const timeInput = prompt("Masukkan waktu (format 24 jam, contoh: 15 untuk jam 3 sore):");
    const time = parseInt(timeInput, 10);

    if (!isNaN(time) && time >= 0 && time < 24) {
        const listItem = document.createElement('li');
        listItem.textContent = `${time}:00 - ${agendaText}`;

        // Tambahkan agenda ke jam analog
        const angle = (time / 12) * 360;
        const agendaElement = document.createElement('div');
        agendaElement.classList.add('clock-agenda');
        agendaElement.textContent = agendaText;
        agendaElement.style.transform = `rotate(${angle}deg) translate(90px) rotate(-${angle}deg)`;

        clock.appendChild(agendaElement);
        agendaList.appendChild(listItem);

        agendaInput.value = '';
    } else {
        alert('Masukkan waktu yang valid (0-23)!');
    }
});
