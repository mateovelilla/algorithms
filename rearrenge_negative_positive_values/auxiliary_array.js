/*
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
* */
function rearrange(arr){
  var neg = []
  var pos = []

  // Make a list of negative and positive numbers
  for(let ele of arr){
    if( ele < 0)
      neg.push(ele)
    else
      pos.push(ele)
  }

  // Merge two lists and return
  return neg.concat(pos)
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
