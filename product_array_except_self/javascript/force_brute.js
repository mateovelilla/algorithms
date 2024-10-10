/*
 * Time Complexity O(n^2): the array is iterated over n(n-1)/2
 * Space Complexity O(1)
 * */
function findProduct(arr) {
  let product = [];
  let left = 1;

  arr.forEach((value, index) => {
    let currentProduct = 1;
    // Compute the product of values to the right of the current index 
    arr.slice(index + 1).forEach((num) => {
      currentProduct *= num;
    });
    // Push the product of current element and product of all left elements to product
    product.push(currentProduct * left);

    // Update `left` by multiplying with the current element
    left *= value;
  });

  return product;
}


let inputs = [
  [1, 2, 3, 4],
  [5, -3, 1, 2],
  [2, 2, 2, 0],
  [0, 0, 0, 0],
  [-1, -2, -4]
];

for (let i = 0; i < inputs.length; i++) {
  console.log(i + 1 + "\tArray: [" + inputs[i].join(", ") + "]");
  console.log("\n\tList of products: [" + findProduct(inputs[i]).join(", ") + "]");
  console.log("-".repeat(70));
}

