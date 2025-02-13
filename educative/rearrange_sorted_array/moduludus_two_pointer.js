/*
 * Time Complexity: O(n)
 * Space Complexity O(1)
 *
 * */
function rearrangeArray(nums) {
    if (nums.length === 0) {
        return [];
    }

    let maxIdx = nums.length - 1;
    let minIdx = 0;
    // Initialize a variable larger than any element in the array to use for encoding
    const maxElem = nums[nums.length - 1] + 1;

    // Encoding phase
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) { // Encoding at even indexes
            nums[i] += (nums[maxIdx] % maxElem) * maxElem;
            maxIdx -= 1;
        } else { // Encoding at odd indexes
            nums[i] += (nums[minIdx] % maxElem) * maxElem;
            minIdx += 1;
        }
    }

    // Decoding phase
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.floor(nums[i] / maxElem);
    }

    return nums;
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

