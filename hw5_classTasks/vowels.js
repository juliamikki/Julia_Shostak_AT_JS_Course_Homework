const sentence = "Programming is fun and love"
const vowels = "aeiouy"

function countVowelsInStringWithFor(sentence, vowels) {
    let count = 0;
    for (let char of sentence.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

//.match () => returns matches (as an array) or null if nothing found!

function countVowelsInStringWithRegex(sentence) {
    const matches = sentence
        .toLowerCase()
        .match(/[aeiouy]/gi); // g - global, i - ignore case
    return matches ? matches.length : 0
}

function countVowelsInStringWithRegexWithVar(sentence, vowels) {
    const regex = new RegExp(`[${vowels}]`, 'gi')
    const matches = sentence
        .toLowerCase()
        .match(regex);
    return matches ? matches.length : 0
}

//sum - accumulator (total vowels)
//char - current character
//0 - initial value
function countVowelsInStringWithReduce(sentence, vowels) {
    return sentence.toLowerCase()
        .split('')                      //=> converting to array
        .reduce((sum, char) => {
            return vowels.includes(char) ? sum + 1 : sum;
        }, 0)

}

console.log(countVowelsInStringWithFor(sentence, vowels));
console.log(countVowelsInStringWithRegex(sentence));
console.log(countVowelsInStringWithRegexWithVar(sentence, vowels));
console.log(countVowelsInStringWithReduce(sentence, vowels));