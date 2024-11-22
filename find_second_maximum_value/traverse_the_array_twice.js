/*
 * Time Complexity:  O(n)
 * Space Complexity: O(1)
 * */
function findSecondMaximum(nums) {
    var firstMax = Number.NEGATIVE_INFINITY;
    var secondMax = Number.NEGATIVE_INFINITY;
    // First iteration
    for (let item of nums) {
        if (item > firstMax)
            firstMax = item;
    }
    // Second iteration
    for (let item of nums) {
        if (item !== firstMax && item > secondMax) {
            secondMax = item; 
        }
    }
    return secondMax;
}

// Driver code
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