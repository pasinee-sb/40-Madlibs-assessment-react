function addCommas(num) {
  console.log(num);
  let newNum = num.toString();
  let minusPart = "";
  let decimalPart = "";
  newNum = newNum.split(".");

  if (newNum[0].startsWith("-")) {
    minusPart = "-";
    newNum[0] = newNum[0].slice(1);
  }

  if (newNum[1]) {
    decimalPart = "." + newNum[1];
  }
  newNum = newNum[0] || newNum;
  console.log(newNum);

  const reversedText = newNum.split("").reverse().join("");

  //   // Insert commas every 3 characters
  const chunks = [];
  for (let i = 0; i < reversedText.length; i += 3) {
    chunks.push(reversedText.slice(i, i + 3));
  }
  let result = chunks.join(","); // Join the chunks with commas
  let res = result.split("").reverse().join(""); // Reverse the result back to the original order
  //join decimal part if any
  if (decimalPart) {
    res += decimalPart;
  }
  res = minusPart + res;

  console.log(res);
  return res;
}

console.log(addCommas("1234")); // Output: "1,234"
console.log(addCommas("1000000")); // Output: "1,000,000"
console.log(addCommas("9876543210")); // Output: "9,876,543,210"
console.log(addCommas("6")); // Output: "6"
console.log(addCommas("-10")); // Output: "-10"
console.log(addCommas("-5678")); // Output: "-5,678"
console.log(addCommas("12345.678")); // Output: "12,345.678"
console.log(addCommas("-3141592.65")); // Output: "-3,141,592.65"

module.exports = addCommas;
