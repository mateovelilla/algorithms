function findSecondMaximum(nums) {
  const array_sorted = nums.sort((a, b)=> b-a);
  let max_number = array_sorted[0];
  let second_max_number = array_sorted[1];
  let index = 1;
  while(max_number == second_max_number) {
      index++
      second_max_number = array_sorted[index]
  }
  return second_max_number  
}
function main() {
    const inputs = [
        [9, 2, 3, 6],
        [1, 2],
        [-2, 2],
        [-4, -1, -9, 1, -7],
        [25, 50, 75, 100, 100]
    ];

    for (let i = 0; i < inputs.length; i++) {
        console.log(`${i + 1}.\tArray: ${JSON.stringify(inputs[i])}`);
        console.log(`\n\tSecond maximum value: ${findSecondMaximum(inputs[i])}`);
        console.log("-".repeat(100));
    }
}

main();
