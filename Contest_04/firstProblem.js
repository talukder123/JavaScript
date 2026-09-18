// check if 2 strings are anagram or not!

function isAnagram(s1, s2) {
    let str1 = s1.toLowerCase()
    let str2 = s2.toLowerCase()

    let first = str1.replace(/[^a-z0-9]/g, "");
    let second = str2.replace(/[^a-z0-9]/g, "");

    first = first.split("").sort().join("");
    second = second.split("").sort().join("");

    if (first === second) {
        return true;
    }

    return false;
}