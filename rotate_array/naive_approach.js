/*
  * Time Complexity: O(n)
  * Space Complexity: O(n)
 * */
function rightRotate(nums, k) {
    // If the length of the array is 0, no rotation is needed
    if (nums.length === 0) {
        k = 0;
    } else {
        // Calculate the effective rotation amount
        k = k % nums.length;
    }

    var rotatedList = [];

    // Get the elements from the end and append them to rotatedList
    for (var item = nums.length - k; item < nums.length; item++) {
        rotatedList.push(nums[item]);
    }

    // Get the remaining elements and append them to rotatedList
    for (var item = 0; item < nums.length - k; item++) {
        rotatedList.push(nums[item]);
    }

    return rotatedList;
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

