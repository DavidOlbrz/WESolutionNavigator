let tasks = undefined;
let delay = 0;

function loadTasks() {
    console.log('Loading tasks...');
    fetch('/assets/tasklist.json')
        .then(response => response.json())
        .then(json => buildCards(json))
        .then(() => addGlowEffect());
}

function buildCards(taskList) {
    console.log('Starting to build cards...');
    tasks = Object.keys(taskList).sort();
    tasks.forEach(function (x) {
        let card = document.createElement('div');
        card.classList.add('appear');
        card.style.animationDelay = delay + 's';
        delay += 0.2;
        card.innerHTML = `
            <h2>${taskList[x].task}</h2>
            <span>${taskList[x].title}</span>
            <br>
            <a href="./uebung${x}">
                <button><i class="fa-solid fa-arrow-right"></i> Übung ${x} öffnen</button>
            </a>
        `;
        addCard(card);
    });
    console.log('Loading tasks finished.');
}

function addCard(card) {
    console.log('Adding card...');
    document.getElementById('tasks-grid').appendChild(card);
}

function addGlowEffect() {
    const cards = document.getElementById('tasks-grid').children;
    setTimeout(function () {
        for (let i = 0; i < cards.length; i++) {
            cards[i].classList.replace('appear', 'glow');
            cards[i].style.animationDelay = '0s';
        }
    }, 200 * tasks.length);
}