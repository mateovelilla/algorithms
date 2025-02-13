/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let last = m+n-1;
  while(n > 0 && m >0) {
    if(nums1[m-1] > nums2[n-1]) {
      nums1[last] = nums1[m-1]
      m--
    }else {
      nums1[last] = nums2[n-1]
      n--
    }
    last--
  }
  while (n > 0) { // IMPORTANT PART: I'M CONSTANTLY FAILING IN THIS PART, THIS IS LIKE A LOOP TO FILL NUMS! WITH LEFTOVER :)
    nums1[last] = nums2[n-1]
    n--
    last--
  }
  return nums1
};
console.log(merge([4,5,6,0,0,0],3,[1,2,3], 3))
console.log(merge([1,2,4,5,6,0],5,[3], 1))
console.log(merge([4,0,0,0,0,0],1,[1,2,3,5,6], 5))
console.log(merge([1,2,3,0,0,0],3,[2,5,6], 3))
console.log(merge([1],1,[], 0))
console.log(merge([],0,[1], 1))
