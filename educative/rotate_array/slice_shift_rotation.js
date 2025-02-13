/*
 * Time complexity: O(N)
 * Space complexity: O(1)
 * Explanation:
 * - If the length of the array is non-zero, determine the effective rotation index k 
 * taking the modulo of k with the array's length. This ensures that the rotation stays 
 * within the bounds of the array.
 * - Next, to extract the rotated array, perform the following steps:
 *   - Take a slice of the array nums containing the last k elements. 
 *   These elements will move to the front after rotation.
 *   - Take a slice of the array nums containing all elements except the last k elements. 
 *   These elements will stay at the end after rotation.
 * - Concatenate the two slices obtained in the previous step to form the rotated array.
 * - Return the rotated array.
 *
 * */
function rightRotate(nums, k) {
    // Determine rotation index
    if (nums.length === 0) {
        k = 0;  // If the list is empty, no rotation needed
    } else {
        k = k % nums.length;  // Calculate effective rotation amount
    }
    
    // Perform rotation by slicing the array
    const rotatedArray = nums.slice(-k).concat(nums.slice(0, -k));

    return rotatedArray;
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

