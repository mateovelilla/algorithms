/*
 * Time Complexity: O(n)
 *  Space Complexity: O(1)
 * */
function rearrangeArray(nums) {
    if (nums.length === 0) {
        return [];
    }

    const result = [];
    const mid = Math.floor(nums.length / 2);

    // Iterate through half of the sorted array
    for (let i = 0; i < mid; i++) {
        // Append the largest remaining element (from the end of the array)
        result.push(nums[nums.length - (i + 1)]);
        // Append the smallest remaining element (from the start of the array)
        result.push(nums[i]);
    }

    if (nums.length % 2 === 1) {
        result.push(nums[mid]);
    }

    return result;
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

main();

