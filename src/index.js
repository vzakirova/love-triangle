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

    //count = (second != first + 1)? count += 0 : (third != first - 1)? count +=0 : count +=1
    //count = (first != n + 2)? count += 0 : (second != n + 3)? count +=0 : (third != n + 1)? count +=0 : count +=1
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
