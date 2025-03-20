Array.prototype.myFilter = function(callback) {
  const result = [];
  
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) {
      result.push(this[i]);
    }
  }

  return result;
};
const result2 = [2,3,5,7,8].filter((i) => i%2)
console.log(result2)

//my map
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr));
  }
  return result;
}