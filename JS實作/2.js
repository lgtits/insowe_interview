const input = [1, 2, 3, 1, 6, 3, 9]

function delRepeat(arr) {
  let output = []
  arr.forEach(function(item){
    if (output.indexOf(item) === -1) {
      output.push(item)
    }
  })
  return output
}

console.log("output: ", delRepeat(input))