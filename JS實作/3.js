function randomTenNum() {
  let output = []
  for (let i = 0; output.length < 10; i++) {
    let randomNum = Math.floor(Math.random() * (101 - 10) + 10)
    if (output.indexOf(randomNum) === -1) {
      output.push(randomNum)
    }
  }
  return output
}

let output = randomTenNum()

console.log(output)
