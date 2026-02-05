let sentence = "A man a plan a canal Panama"

//split('') => convert to array of chars
//join('') => convert back to string
function isPalindrome(sentence) {
    const normalized = sentence.toLowerCase().replaceAll(' ', '');
    const reversed = normalized.split('').reverse().join('');
    return normalized === reversed;
}

function isPalindromeWithMapOfWords(sentence) {
    const normalized = sentence.toLowerCase().replaceAll(' ', '');
    const reversed = sentence.toLowerCase().split(' ').reverse()
        .map(word => word.split('').reverse().join(''))
        .join('');
    return normalized === reversed;
}

function isPalindromeWithReduce(sentence) {
    const normalized = sentence.toLowerCase().replaceAll(' ', '');
    const reversed = normalized.split('').reduce((accumulator, char) => char + accumulator, '');
    return normalized === reversed;
}

console.log(isPalindrome(sentence));
console.log(isPalindromeWithMapOfWords(sentence));
console.log(isPalindromeWithReduce(sentence));