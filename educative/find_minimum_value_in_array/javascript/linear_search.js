/*
 * Time Complexity O(n)
 * Space Complexity O(1)
 * */
function findMinimum(arr) {
  let currentMin = arr[0];// Initialize minimum to the first element of the array
  // Iterate over the array, starting from the second element
  for (let i=1; i < arr.length; i++) { 
    if (arr[i] < currentMin) // Update if a smaller element is found
      currentMin = arr[i]
  }
  return currentMin
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
