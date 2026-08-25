function countNumberProperties(numbers) {
  let even = 0, odd = 0, positive = 0, negative = 0;

  for (const i of numbers) {
    if (i % 2 === 0) {
      even++;
    } else {
      odd++;
    }

    if (i > 0) {
      positive++;
    } else if (i < 0) {
      negative++;
    }
  }

  return {"even":even,"negative":negative,"odd":odd,"positive":positive};
}