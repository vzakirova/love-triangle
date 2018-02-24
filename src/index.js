/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  var count = 0;

  for (var n = 0; n < preferences.length; n++)
  {
    let first = preferences[n];
    let second = preferences[first - 1];
    let third = preferences[second - 1];
    
    if ((third == n+1) && (first != second) && (second != third)) 
    {
      count++;
      delete preferences[n];
      delete preferences[first - 1];
      delete preferences[second - 1];
    }
  } 
  return count;
}
