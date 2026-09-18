// Title Case a Sentence

function titleCaseSentence(str) {
  let newString = str.toLowerCase().trim();

  if (newString === "") return "";

  newString = newString.split(/\s+/)

  let finalString = newString.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  })

  let res = finalString.join(" ");
  
  return res;
}
