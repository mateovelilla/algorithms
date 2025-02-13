/*
 * 1. Initialize leftMostPosEle to 0, representing the index of the leftmost positive element.
 *    This variable tracks where the next positive number should be placed.
 * 2. Iterate through the array using a for loop from index 0 to the end of the array.
 * 3. At each iteration, check if the current element is negative (arr[curr] < 0).
 * 4. If the current element is negative and it’s not the most recent negative number 
 *    encountered (i.e., if curr is not equal to leftMostPosEle),
 *    then swap the current element with the leftmost positive element.
 *    This move effectively places the current negative number to the left of all positive numbers encountered so far.
 * 5. After each swap, increment leftMostPosEle by 1 to ensure it always points to the correct position
 *  for the next positive number.
 * 6. Once all iterations are complete, return the rearranged array.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * */

function rearrange(arr) {
    var leftMostPosEle = 0,
        tmp;

    for (var curr = 0; curr < arr.length; curr++) {
        // If negative number
        if (arr[curr] < 0) {
            // If not the last negative number
            if (curr != leftMostPosEle) {
                // Swap the two
                tmp = arr[curr];
                arr[curr] = arr[leftMostPosEle];
                arr[leftMostPosEle] = tmp;
            }
            leftMostPosEle += 1
        }
    }
    return arr;
}

function main() {
    const inputs = [[10, 4, 6, 23, 7],
                    [-3, 20, -1, 8],
                    [2, -5, -4, 43, 2],
                    [-3, -10, -19, 21, -17],
                    [25, 50, 75, -100, 400]];

    for (let i = 0; i < inputs.length; i++) {
        console.log((i + 1) + ".\tArray: " + inputs[i]);
        console.log("\tResult: " + rearrange(inputs[i]));
        console.log("-".repeat(100));
    }
}

main();
