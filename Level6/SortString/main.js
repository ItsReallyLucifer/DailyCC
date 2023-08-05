// The task is to sort a given string.
// Each word in the string will contain a single number.
// This number is the position the word should have in the result
// example: "is2 thi1s T4est 3a" --> "Thi1s is2 3a T4est"



function order(words) {
  if (!words) {
    return "";
  }

  return words
    .split(" ")
    .sort((a, b) => {
      const numA = a.match(/\d/)[0]; // Extract the number from word A
      const numB = b.match(/\d/)[0]; // Extract the number from word B
      return numA - numB; // Compare the numbers
    })
    .join(" ");
}

console.log(order("Thi2s i4s a3 t1est"))