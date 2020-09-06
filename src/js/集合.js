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

// var odds = _.reject([1, 2, 3, 4, 5], function (num) {
//   return num % 2 == 0;
// });

// console.log(odds);

// let flag = _.every([2, 4, 5], function (num) {
//   return num % 2 == 0;
// });

// console.log(flag);

// var flag = _.some([1, 2, 3, 4, 5], function (num) {
//   return num % 2 == 0;
// });

// console.log(flag);

// let falg =  _.contains([1, 2, 3], 3)
// console.log(falg);

// let arr = _.invoke([[5, 1, 7], [3, 2, 1]], 'sort')
// console.log(arr);

// var stooges = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];

// var arr =  _.pluck(stooges, 'name')
// console.log(arr);

// var stooges = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];

// let max = _.max(stooges, function (stooge) {
//   return stooge.age;
// });
// console.log(max);

// var numbers = [10, 5, 100, 2, 1000]

// let min = _.min(numbers)
// console.log(min);

// let arr = _.sortBy([1, 2, 3, 4, 5, 6], function (num) {
//   return Math.sin(num);
// });

// console.log(arr);

// var stooges = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
// ];

// let arr = _.sortBy(stooges, 'name')
// console.log(arr);

// let result = _.groupBy([1.3, 2.1, 2.4], function (num) {
//   return Math.floor(num)
// })

// console.log(result);

// let result = _.groupBy(['one', 'two', 'three'], function(ele) {
//   return ele.length;
// })

// console.log(result);

// var stooges = [
//   { name: 'moe', age: 40 },
//   { name: 'larry', age: 50 },
//   { name: 'curly', age: 60 },
//   { name: 'jery', age: 40 },
// ];

// let arr = _.indexBy(stooges, 'age')
// console.log(arr);

// var data = [
//   {
//     id: 1,
//     name: 'Jon Doe',
//     birthdate: '1/1/1991',
//     height: '5 11',
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     birthdate: '1/1/1981',
//     height: '5 6',
//   },
//   {
//     id: 3,
//     name: 'Rockin Joe',
//     birthdate: '4/4/1994',
//     height: '6 1',
//   },
//   {
//     id: 4,
//     name: 'Jane Blane',
//     birthdate: '1/1/1971',
//     height: '5 9',
//   },
// ];

// function getUserInfoById(id) {
//   return _.find(data, function (element, index, list) {
//     return element.id === id;
//   });
// }

// console.log(getUserInfoById(1));
// console.log(getUserInfoById(3));

// var dataClone = _.indexBy(data, 'id')

// console.log(dataClone);

// console.log(dataClone[1]);
// console.log(dataClone[3]);

// var result1 = _.indexBy('1234');
// var result2 = _.indexBy([1, 2, 3, 4]);
// var result3 = _.indexBy({
//   a: 1,
//   b: 2,
//   c: 3,
// });

// var result4;
// (function() {
//   console.log(arguments);
//   result4 = _.indexBy(arguments);
// })(1, 2, 3);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// var result1 = _.indexBy('1234', function(value, index, list) {
//   return value
// })
// console.log(result1);

// var obj = _.countBy([1, 2, 3, 4, 5], function (num) {
//   return num % 2 === 0 ? 'even' : 'odd';
// });

// console.log(obj);

// var arr = _.shuffle([1, 2, 3, 4, 5, 6]);
// console.log(arr);

// let num = _.sample([1, 2, 3, 4, 5, 6])
// console.log(num);

// var arr = _.sample([1, 2, 3, 4, 5, 6], 3)
// console.log(arr);

// var arr = (function () {
//   return _.toArray(arguments).slice(1);
// })(1, 2, 3, 4);
// console.log(arr);

// let size = _.size([1, 2, 3, 4, 5])
// console.log(size);

// var size = _.size({ one: 1, two: 2, three: 3 });
// console.log(size);

// var arr = _.partition([0, 1, 2, 3, 4, 5], function (num) {
//   return num % 2 == 0;
// });

// console.log(arr);

// var arr = _.compact([0, 1, false, 2, '', 3]);
// console.log(arr);

