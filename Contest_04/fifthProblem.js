function truncateString(str, maxLength) {
  

    let n = str.length;

    if (maxLength <= 3) {
        return "...";
    }

    if (n <= maxLength) {
        return str;
    }

    let modifiedStr = str.slice(0, maxLength-3);
    modifiedStr = modifiedStr + "...";

    return modifiedStr;
}