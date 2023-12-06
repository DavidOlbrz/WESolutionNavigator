const fileA = 'assets/A.txt';
const fileB = 'assets/B.txt';

function runTask1() {
    Promise.all([fetch(fileA), fetch(fileB)])
        .then(responses => Promise.all(responses.map(response => response.text())))
        .then(texts => {
            const linesA = texts[0].split('\n');
            const linesB = texts[1].split('\n');
            const numLines = Math.min(linesA.length, linesB.length);
            for (let i = 0; i < numLines; i++) {
                console.log(`${linesA[i]} , ${linesB[i]}`);
            }
        })
}

async function runTask2() {
    const responseA = await fetch(fileA);
    const responseB = await fetch(fileB);
    const textA = await responseA.text();
    const textB = await responseB.text();
    const linesA = textA.split('\n');
    const linesB = textB.split('\n');
    const numLines = Math.min(linesA.length, linesB.length);
    for (let i = 0; i < numLines; i++) {
        console.log(`${linesA[i]} , ${linesB[i]}`);
    }
}