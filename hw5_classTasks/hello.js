const sentense = "hello world from javascript";

function addCapitalLetters(sentense) {
    return sentense
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
}

// \b -> boundary position of the symbol 
// \w -> letter a-z
// g -> all matches in the string
function addCapitalLettersWithRegex(sentense) {
    return sentense.replace(/\b\w/g, char => char.toUpperCase());
}

console.log(addCapitalLetters(sentense));
console.log(addCapitalLettersWithRegex(sentense));