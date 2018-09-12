function palindrome(level){
    if (level===level.split('').reverse().join('')){
        console.log("That is palindrome number.");
    }
    else {
        console.log("That is not a palindrome number");
    }
}
palindrome("mom");