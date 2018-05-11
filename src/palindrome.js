function palindrome(word) {
    let revWord = word.replace(/[^A-Za-z0-9_]/g, "").toLowerCase().split("").reverse().join("");
    let newWord = word.replace(/[^A-Za-z0-9_]/g, "").toLowerCase();


    if (newWord === revWord) {
        return true;
    }

    else {
        return false;
    }
};