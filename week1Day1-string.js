//********** Example-1 ************
/* Split the string into an array of words */
let s = "Hello World";
const words = s.split(" ");
console.log("splitted words:", words);
/* Find the last word in the array */
const lastWord = words[words.length - 1];
console.log("last word:", lastWord);
/* Calculate the length of this word */
const lengthOfLastWord = lastWord.length;
console.log("length of last word:", lengthOfLastWord);


//********** Example-2 ************
/* Trim the String */
let s1 = " fly me to the moon ";
s1 = s1.trim();
console.log("trimmed string:", s1);

/* Split the String into Words */
const words1 = s1.split(" ");
console.log("splitted words:", words1);

/* Identify the Last Word */
const lastWord1 = words1[words1.length - 1];
console.log("last word:", lastWord1);

/* Calculate the Length of the Last Word */
const lengthOfLastWord1 = lastWord1.length;
console.log("length of last word:", lengthOfLastWord1);


//********** Example-3 ************
/* Write a function to check if two strings are anagrams. */
function isAnagrams(str1, str2) {
    // Remove whitespace and convert to lowercase
    const normalizedStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const normalizedStr2 = str2.replace(/\s+/g, '').toLowerCase();
    console.log("normalizedStr1:", normalizedStr1);
    console.log("normalizedStr2:", normalizedStr2);
    // Check if lengths are different
    if (normalizedStr1.length !== normalizedStr2.length) {
        console.log("lengths are different");
        return false;
    }
    // Sort the characters and compare sorted strings
    const sortedStr1 = normalizedStr1.split('').sort().join('');
    const sortedStr2 = normalizedStr2.split('').sort().join('');
    console.log("sortedStr1:", sortedStr1);
    console.log("sortedStr2:", sortedStr2);
    return sortedStr1 === sortedStr2;
}
console.log(isAnagrams("listen", "silent")); // Output: true
console.log(isAnagrams("hello", "world")); // Output: false
