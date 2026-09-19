function countWordFrequencies(sentence) {
  const cleanedSentence = sentence.toLowerCase().replace(/[^\w\s]/g, "").trim();

  if (cleanedSentence === "") return {};

  const words = cleanedSentence.split(/\s+/);

  const frequency = {};

  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }

  return frequency;
}