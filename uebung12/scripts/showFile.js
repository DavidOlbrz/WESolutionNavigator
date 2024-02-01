const filePath = 'accounts.txt';
let file = undefined;

function showFileContent() {
    loadFile().then(file => console.log(`File Content:\n\n${file}`));
}

function showLastLine() {
    loadFile().then(file => {
        const rows = file.split('\n');
        alert(`Last registered account:\n\n${rows[rows.length - 2]}`);
    })
}

function loadFile() {
    return fetch(filePath)
        .then(response => file = response.text());
}