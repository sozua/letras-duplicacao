var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

function getDuplicationInWord(word, wordSlice = 1) {
    const currentSlice = word.slice(0, wordSlice)
    const remainingSlice = word.slice(wordSlice, word.length)

    if (currentSlice.endsWith(remainingSlice)) {
        return currentSlice
    }

    return getDuplicationInWord(word, wordSlice + 1)
}

function checkIfHasCommonWords(rawPhrase, parsedPhrase) {
    const hasCommonWord = rawPhrase.some(word => parsedPhrase.includes(word))
    return hasCommonWord
}

function removeDuplication(phrase) {
    const phraseArray = phrase.split(' ')
    const parsedPhrase = phraseArray.map((word) => getDuplicationInWord(word))

    if (checkIfHasCommonWords(phraseArray, parsedPhrase)) return phrase + '.'

    const formattedPhrase = parsedPhrase.join(' ') + '.'
    return formattedPhrase
}

rl.on('line', enterText => {
    console.log(removeDuplication(enterText))
})

module.exports = {
    removeDuplication
}