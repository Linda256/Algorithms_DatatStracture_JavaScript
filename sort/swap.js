
module.exports = function(i,j,arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}