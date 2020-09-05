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

// var sum = _.reduce([1, 2, 3], function(memo, ele, index, arr) {
//   console.log(memo, ele, index, arr);
//   return memo + ele;
// }, 0)
// console.log(sum);

// var list = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];

// var flat = _.reduceRight(
//   list,
//   function (a, b) {
//     return a.concat(b);
//   },
//   []
// );
// console.log(flat);

// var even = _.find([1, 2, 3, 4, 5, 6], function(num) {
//   return num % 2 == 0;
// }, {one: 1})

// console.log(even);

// var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) {
//   return num % 2 === 0;
// }, {one:1})

// console.log(evens);

// var people = [
//   { name: 'sakshi', hasLong: 'false' },
//   { name: 'aishwarya', hasLong: 'true' },
//   { name: 'akansha', hasLong: 'true' },
//   { name: 'preeti', hasLong: 'true' },
// ];

// console.log(_.findWhere(people, {hasLong: "true"}));
