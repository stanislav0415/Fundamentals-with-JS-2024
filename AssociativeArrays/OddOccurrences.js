function OddOccurrences(str) {
const wordOccurrences = new Map();
const words = str.split(' ').map(word => word.toLowerCase())


for (const word of words) {
    if (wordOccurrences.has(word)) {
        const currentOccurrences = wordOccurrences.get(word)
        wordOccurrences.set(word, currentOccurrences + 1)
    }else {
        wordOccurrences.set(word, 1);
    }
}
const wordEntries = wordOccurrences.entries();
const validWords = [];
for (const [word, occurrences] of wordEntries) {
    if (occurrences % 2 !== 0) {
        validWords.push(word)
    }
}
console.log(validWords.join(' '));

}
OddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')