/*
 * Time Complexity: O(nlogn)
 * Space Complexity: O(1)
 */
function findMinimum(arr){
  // https://en.wikipedia.org/wiki/In-place_algorithm
  arr.sort((function(a, b){ // Sort the array in ascending order
        return a - b
    }))
  return arr[0] // Return the first element
}

function main() {
    const inputs = [
      [9],
      [-1, -5, -10, -2, -4],
      [4, 3, 2, 1],
      [2, 3, 3, -1, -1],
      [100, 50, 75, 25, 400]
  ];

   for (let i = 0; i < inputs.length; i++) {
    console.log((i + 1) + ".\tInput list: [" + inputs[i].join(', ')+"]");
    const result = findMinimum(inputs[i]);
    console.log("\n\tMinimum element: " + result);
    console.log("-".repeat(100));
  }
}

main();
