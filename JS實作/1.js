const input = [1, 2, 3, 5, 6, 8, 9]

function sum(arr) {
  let output = 0
  arr.forEach(item => output += item)
  return output
}

console.log("output: ", sum(input))