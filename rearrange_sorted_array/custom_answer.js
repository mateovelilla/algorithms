function rearrangeArray(nums){
  const newArray = []
  let flag = 1, index_one = 1, index_two = 0; 
  while(flag){
    if(nums.length - (index_one + index_two) > 0) {
      newArray.push(nums[nums.length - index_one]);
      newArray.push(nums[index_two])
      index_one++
      index_two++
    }else {
      if(nums.length % 2 != 0) {
        newArray.push(nums[index_two])
      }
      flag = false
    }
  }
  return newArray
}
function main() {
    const inputArray = [
        [1, 2, 3, 4, 5, 6, 7, 8],
        [11, 22, 33, 44, 55, 66, 77, 88],
        [1, 2, 4, 8, 16, 32, 64, 128, 512, 1024],
        [3, 3, 5, 5, 7, 7, 9, 9, 11, 11, 13, 13],
        [100, 233, 544, 753, 864, 935, 1933, 2342]
    ];

    for (let i = 0; i < inputArray.length; i++) {
        console.log(`${i + 1}.\tOriginal array: [${inputArray[i]}]`);
        console.log(`\tRearranged array: [${rearrangeArray(inputArray[i])}]`);
        console.log("-".repeat(100));
    }
}
main()
