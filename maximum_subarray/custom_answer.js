function findMaxSumSubArray(nums) {
 let sum = -2000;
  for (let i = 0; i < nums.length; i++) {
    let temp = 0;
    for (let j = i; j < nums.length; j++) {
      temp+=nums[j]
      if (temp > sum) {
        sum = temp   
      }
    }
  
  }
  return sum
}
