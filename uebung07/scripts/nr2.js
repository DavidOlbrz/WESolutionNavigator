let text = ''
let stopWords = ''
let topWords = [];

// loading the html file
fetch('./assets/Plagiatsresolution.html')
    .then(response => response.text())
    .then(data => text = data);

// loading the stop word list file
fetch('./assets/german_stopwords_plain.txt')
    .then(response => response.text())
    .then(data => stopWords = data);

// removes unnecessary comments and saves the words in an array
function cleanStopWords() {
    console.log('Starting to clean up stop word file...');
    stopWords = stopWords
        .split('\n')
        .filter((x) => x.charAt(0) !== ';');
    console.log('Cleaning stop word file finished!');
}

// removes html tags and the words included in the stop word list and saves the result in an array
function cleanText() {
    console.log('Starting to clean up html file...');
    text = text
        .split('\n')
        .map((x) => x.replaceAll(/<.+?>/g, ""))
        .map((x) => {
            const words = x.split(" ");
            const nonStopWords = words.filter(x => !stopWords.includes(x));

            return nonStopWords.join(" ");
        })
        .filter((x) => x !== "");
    console.log('Cleaning html file finished!');
}

// counts the top 3 used words inside the text
function countTopWords() {
    console.log('Counting the top 3 words...')
    let counter = {};
    for (let i = 0; i < text.length; i++) {
        const words = text[i].split(" ");
        for (let j = 0; j < words.length; j++) {
            if (counter[words[j]]) {
                counter[words[j]]++;
            } else {
                counter[words[j]] = 1;
            }
        }
    }

    counter = Object.keys(counter).sort((a, b) => counter[b] - counter[a]);
    console.log('Skipping the first top word, as it is a empty string...')
    topWords = counter.slice(1, 4);
    console.log(`Counting top words finished!`);
    console.info(`The top 3 words are: ${topWords}`);
    return topWords;
}

function runTextAnalysis() {
    cleanStopWords();
    cleanText();
    countTopWords();

    return topWords;
}