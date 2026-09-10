function isPalindrome(str) {
    const clean = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if (clean === clean.split("").reverse().join("")) {
        return true;
    }

    return false;
}