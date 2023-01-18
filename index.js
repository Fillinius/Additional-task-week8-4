function isPalindrome (str){
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')}


console.log('racecar:', isPalindrome('racecar'));
console.log('programmer', isPalindrome('programmer'));