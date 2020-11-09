function searchForLongestVowel(word, num) {
  let output = [];
  let max = 0;
  let result;
  const wordMap = new Map();
  for (let i = 0; i < word.length; i++) {
    let first = word.toLowerCase().substring(i, num);
    if (num >= word.length) {
      break;
    } else {
      if (hasAVowel(first)) {
        let numOfVowels = countVowels(first);
        wordMap.set(i, [first, numOfVowels]);
      }
      num++;
    }
  }

  if (wordMap.size == 0) {
    result = "Not Found";
  } else {
    wordMap.forEach((val, key) => {
      let numOfVowels = wordMap.get(key)[1];
      let wordSubstring = wordMap.get(key)[0];

      if (numOfVowels > max) {
        if (output.length == 0) {
          output.push(wordSubstring);
          max = numOfVowels;
        } else {
          output = [];
          output.push(wordSubstring);
          max = numOfVowels;
        }
      } else if (numOfVowels == max) {
        output.push(wordSubstring);
      }
    });

    output.sort();
    result = output[0];
  }

  return result;
}
function hasAVowel(word) {
  return (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
  );
}

function countVowels(word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (isVowel(word.charAt(i))) {
      count++;
    }
  }
  return count;
}
function isVowel(letter) {
  return (
    letter == "a" ||
    letter == "e" ||
    letter == "i" ||
    letter == "o" ||
    letter == "u"
  );
}
console.log(searchForLongestVowel("caberqiitefg", 5));
