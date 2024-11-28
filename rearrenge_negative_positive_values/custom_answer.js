function rearrange(arr) {
  const negative = []
  const positive = []
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] < 0) {
      negative.push(arr[i])
    }else {
      positive.push(arr[i])
    } 
  }
  return negative.concat(positive)
}

function main() {
    const inputs = [[10, 4, 6, 23, 7],
                    [-3, 20, -1, 8],
                    [2, -5, -4, 43, 2],
                    [-3, -10, -19, 21, -17],
                    [25, 50, 75, -100, 400]];

    for (let i = 0; i < inputs.length; i++) {
        console.log((i + 1) + ".\tArray: " + inputs[i]);
        console.log("\tResult: " + rearrange(inputs[i]));
        console.log("-".repeat(100));
    }
}

main();
