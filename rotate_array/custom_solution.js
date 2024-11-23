function rightRotate(nums, k) {
  let new_array = [];
    // Replace this placeholder return statement with your code
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (k + i >= nums.length) {
      const position = ((k+i) % nums.length)
      new_array[position] = element
    } else {
      const position = k + i
      new_array[position]= element
    }
  }
  return new_array;
}

function main() {
    var inputs = [
        [10, 20, 30, 40, 50],
        [1, -2, 3, 4, 5],
        [-1, 90, -90, 4, 6],
        [3, 6, 9, -12],
        [-100, -200, -300]
    ];
    var k = [3, 2, 6, 2, 1];

    for (var i = 0; i < inputs.length; i++) {
        console.log((i + 1) + ".\tnums: [" + inputs[i].join(', ')+"]");
        console.log("\tk: " + k[i]);

        var rotatedArray = rightRotate(inputs[i], k[i]);
        console.log("\n\tRotated list: [" + rotatedArray.join(', ')+"]");
        console.log("-".repeat(70));
    }
}

main();
