function findFirstUnique(nums) {
  for(var i=0; i< nums.length; i++) {
    let flag = false;
    for(var j=0; j< nums.length; j++) {
      if(i!=j) {
        if(nums[i] === nums[j]) {
          flag = true
        }
      }
    }
    if(!flag) {
      return nums[i]
    }
  }
  return nums[0]
}
function main() {
    const inputs = [
        [9, 2, 3, 2, 6, 6],
        [-5, -4, -4, 6, -1],
        [-1, 2, -1, -4, -10],
        [1, 1, 2, 9],
        [-2, 2, -2, 2, 5]
    ];

    for (let i = 0; i < inputs.length; i++) {
        console.log((i + 1) + ".\tInput list: " + inputs[i]);
        console.log("\n\tfirst unique number: " + findFirstUnique(inputs[i]));
        console.log("-".repeat(100));
    }
}

main();
