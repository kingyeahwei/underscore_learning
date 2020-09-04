// _.each([1, 2, 3], function(ele, index, list) {
//   console.log(this);
//   console.log(ele);
//   console.log(index);
//   console.log(list);
// }, {one: 1})

// _.each({one: 1, two: 2, three: 3}, function(value, key, obj) {
//   console.log(value);
//   console.log(key);
//   console.log(obj);
// })

// let arr = _.map([1, 2, 3], function (ele, index, arr) {
//   return ele * 2;
// });
// console.log(arr);

// let arr = _.map({ one: 1, two: 2, three: 3 }, function (value, key, obj) {
//   return value * 3
// });

// console.log(arr);

var sum = _.reduce([1, 2, 3], function(memo, ele, index, arr) {
  console.log(memo, ele, index, arr);
  return memo + ele;
}, 0)
console.log(sum);
