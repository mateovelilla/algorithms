function findMinimum(arr) {
    let minimum = arr[0];
    for(let i = 0; i <= arr.length; i++) {
      if(arr[i] < minimum) {
        minimum = arr[i]  
      }
    }
    return minimum;
}
console.log(findMinimum([-1,-2,5,4]))
