// Time Complexity: O(n^2)
// Space Complexity: O(1)
function findFirstUnique(nums) {
    // Iterate through each element in the array
    for (let p1 = 0; p1 < nums.length; p1++) {
        let p2 = 0;
        
        // Compare the current element (p1) with all other elements (p2)
        while (p2 < nums.length) {
            
			// If p1 and p2 are different indices and their values are the same, it's not unique
            if (p1 !== p2 && nums[p1] === nums[p2]) {
                break;
            }
            p2++;
        }
        
        // If p2 reaches the end of the array, the element at p1 is unique
        if (p2 === nums.length) {
            return nums[p1];
        }
    }
    return null;
}

// Driver code
function main() {
    const inputs = [
        [9, 2, 3, 2, 6, 6],
        [-5, -4, -4, 6, -1],
        [-1, 2, -1, -4, -10],
        [1, 1, 2, 9],
        [-2, 2, -2, 2, 5]
    ];

    for (let i = 0; i < inputs.length; i++) {
        console.log((i + 1) + ".\tInput list: " + inputs[i]);
        console.log("\n\tfirst unique number: " + findFirstUnique(inputs[i]));
        console.log("-".repeat(100));
    }
}

main();
