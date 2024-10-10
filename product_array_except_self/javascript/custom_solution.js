function findProduct(arr) {
    let result = []
    for(let i = 0; i< arr.length; i++) {
      let product = 1;
      for(let j = 0; j< arr.length; j++) {
       if(i !== j) {
          product= product * arr[j] 
        }
      }
      result.push(product)
    }
    return result;
}
const new_array = findProduct([0,-1,2,-3,4,-2])
console.log(new_array)
