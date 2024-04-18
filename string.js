function replaceAlphabet(str, n) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    str = str.toLowerCase();
    let newString = '';
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (/^[a-z]$/.test(char)) {
            const charIndex = alphabet.indexOf(char);
            const newPosition = (charIndex + n) % 26;
            newString += alphabet[newPosition];
        } else {
            newString += char;
        }
    }
    return newString;
}

const inputString = 'Test Case';
const offset = 1;
const newString = replaceAlphabet(inputString, offset);
console.log(newString); 