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

// let num = _.first([5, 4, 3, 2, 1], 3)
// console.log(num);

// let arr = _.initial([5, 4, 3, 2, 1], 3)
// console.log(arr);

// var num = _.last([5, 4, 3, 2, 1], 4)
// console.log(num);

// let arr = _.rest([5, 4, 3, 2, 1], 2)
// console.log(arr);

// let arr = _.flatten([1, [2], [3, [[4]]]])
// console.log(arr);

// let arr = _.flatten([1, [2], [3, [[4]]]], true)
// console.log(arr);

// let arr = _.without([1, 2, 1, 0, 3, 1, 4], 0, 1)
// console.log(arr);

// let arr = _.union([1, 2, 3], [101, 2, 1, 10], [2, 1]);
// console.log(arr);

//  let arr = _.union([1, 3, 2, 3, 2])
//  console.log(arr);

// let arr = _.intersection([1, 2, 3], [101, 2, 1, 10], [2, 1])
// console.log(arr);

// let result = _.difference([1, 2, 3, 4, 5], [5, 2, 10])
// console.log(result);

// let result = _.uniq([1, 2, 1, 4, 1, 3]);
// console.log(result);

// let arr = _.zip(['moe', 'larry', 'curly'], [30, 40, 50], [true, false, false])
// console.log(arr);

// let result = _.unzip([
//   ['moe', 30, true],
//   ['larry', 40, false],
//   ['curly', 50, false],
// ]);
// console.log(result);

// let obj = _.object(['moe', 'larry', 'curly'], [30, 40, 50]);
// console.log(obj);
// let obj = _.object([
//   ['moe', 30],
//   ['larry', 40],
//   ['curly', 50],
// ]);
// console.log(obj);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var partners = _.chunk(arr, 4);
// console.log(partners);

// let index = _.indexOf([1, 2, 3], 2)
// console.log(index);

// let index = _.indexOf([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 2)
// console.log(index);

// let index = _.lastIndexOf([1, 2, 3, 1, 2, 3], 2)
// console.log(index);

// let index = _.sortedIndex([10, 20, 30, 40, 50], 35)
// console.log(index);

// var stooges = [
//   {name: 'moe', age: 40},
//   {name: 'curly', age: 60}
// ]

// let index = _.sortedIndex(stooges, {name: 'larry', age: 50}, 'age')
// console.log(index);

// let index = _.findIndex([1, 6, 8, 12], function (num) {
//   return num % 2 == 0;
// })
// console.log(index);

// let index = _.findLastIndex(
//   [
//     { id: 1, name: 'Bob', last: 'Brown' },
//     { id: 2, name: 'Ted', last: 'White' },
//     { id: 3, name: 'Frank', last: 'James' },
//     { id: 4, naem: 'Ted', last: 'Jones' },
//   ],
//   { name: 'Ted' }
// );

// console.log(index);

// let arr = _.range(10)
// console.log(arr);

// let arr = _.range(1, 11)
// console.log(arr);

// let arr = _.range(0, 30, 5)
// console.log(arr);

// let arr = _.range(0, -10, -1)
// console.log(arr);

// let arr = _.range(0)
// console.log(arr);

// var func = function (greeting) {
//   return greeting + ': ' + this.name;
// };
// func = _.bind(func, { name: 'moe' }, 'hi');
// console.log(func())

// var o = {
//   para: 'hello',
//   func: function() {
//     console.log(this.para);
//   }
// }

// o.func()
// var test = o.func;
// test()
// var test = _.bind(o.func, o)
// test()

// _.bindAll(o, 'func')
// let test = o.func
// test()

// var buttonView = {
//   label: 'underscore',
//   onClick: function() {alert('clicked: ' + this.label)},
//   onHover: function() {console.log('hovering: ' + this.label);}
// }

// _.bindAll(buttonView, 'onClick', 'onHover')

// var divObj = document.getElementById('div');
// divObj.onclick = buttonView.onClick;

// var subtract = function(a, b) {return b - a;}
// sub5 = _.partial(subtract, 5);
// let num = sub5(20)
// console.log(num);

// subFrom20 = _.partial(subtract, _, 20)
// let num = subFrom20(2)
// console.log(num);

// var fibonacci = _.memoize(function(n) {
//   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
// })
// fibonacci(3)

// var log = _.bind(console.log, console);
// _.delay(log, 1000, 'logged later')

// _.defer(function () {
//   alert('deferred');
// });

// let keys = _.keys({ one: 1, two: 2, three: 3 });
// console.log(keys);

// function Stooge(name) {
//   this.name = name;
// }

// Stooge.prototype.silly = true;

// let keys = _.allKeys(new Stooge('moe'))
// console.log(keys);

// let arr = _.values({one: 1, two: 2, three: 3})
// console.log(arr);

// let obj = _.mapObject({ start: 5, end: 12 }, function (val, key) {
//   return val + 5;
// });
// console.log(obj);

// let arr = _.pairs({ one: 1, two: 2, three: 3 });
// console.log(arr);

// let obj = _.invert({ Moe: 'Moses', Larry: 'Louis', Curly: 'Jerome' });
// console.log(obj);

// function Stooge() {}

// var moe = _.create(Stooge.prototype, { name: 'Moe' });
// console.log(moe);

// let arr = _.functions(_)
// console.log(arr);

// let result = _.findKey({one: 1, two: 2, three: 3}, function(val, key) {
//   return val === 2
// })
// console.log(result);

// let obj = {name: 'moe'}

// let result = _.extend(obj, {age: 50})
// console.log(obj);

// let obj = _.pick({name: 'moe', age: 50, userid: 'moe1'}, 'name', 'age')
// console.log(obj);

// let obj = _.pick({ name: 'moe', age: 50, userid: 'moe1' }, function (
//   val,
//   key,
//   object
// ) {
//   return _.isNumber(val);
// });

// console.log(obj);

// let obj =  _.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid')
// console.log(obj);

// let obj = _.omit({ name: 'moe', age: 50, userid: 'moe1' }, function (
//   val,
//   key,
//   object
// ) {
//   return _.isNumber(val);
// });

// console.log(obj);

// var iceCream = { flavor: 'chocolate' };
// let obj = _.defaults(iceCream, {flavor: 'vanilla', sprinkles: 'lots'})
// console.log(obj);

// let obj = { one: [1, 2, 3] };
// let cloneObj = _.clone(obj);
// obj.one[0] = 10
// console.log(cloneObj);

// let obj = _.chain([1, 2, 3, 200]).filter(function (num) {
//   return num % 2 === 0;
// }).tap(alert).map(function(num) { return num * num}).value()
// console.log(obj);

// let flag = _.has({ a: 1, b: 2, c: 3 }, 'b');
// console.log(flag);

// var stooge = {name: 'moe'}
// let result = _.property('name')
// console.log(result(stooge));

// var stooges = {
//   moe: { fears: { worst: 'Spiders' } },
//   curly: { fears: { worst: 'Moe' } },
// };

// let curlysWorstFear = _.property(['curly', 'fears', 'worst']);
// let result = curlysWorstFear(stooges);
// console.log(result);
// var arr = [1, [2, [3, 4]]];
// let fn = _.property([1, 1, 0])
// let result = fn(arr)
// console.log(result);

// var stooge = { name: 'moe' };
// _.propertyOf(stooge)

// var stooge = { name: 'moe' };
// console.log(_.propertyOf(stooge)('name'))

// var stooge = { name: 'moe', luckyNumbers: [13, 27, 34] };
// var clone = { name: 'moe', luckyNumbers: [13, 27, 34] };
// console.log(stooge === clone);
// console.log(_.isEqual(stooge, clone))

// var stooge = { name: 'moe', age: 32 };
// let flag = _.isMatch(stooge, { age: 32 });
// console.log(flag);

// console.log(_.isEmpty([1, 2, 3]))
// console.log(_.isEmpty({}))

// let divObj = document.getElementById('div')
// console.log(_.isElement(divObj))

// console.log((function () {
//   return _.isArray(arguments);
// })())

// console.log(_.isArray([1, 2, 3]));

// console.log(_.isObject({}));
// console.log(_.isObject([]));
// console.log(_.isObject(1));

// console.log((function () {
//   return _.isArguments(arguments);
// })(1, 2, 3))

// console.log(_.isArguments([1, 2, 3]))

// console.log(_.isFunction(alert));

// console.log(_.isString('moe'))
// console.log(_.isString(new String('moe')))

// console.log(_.isNumber(8.4 * 5))

// console.log(_.isFinite(-101));
// console.log(_.isFinite(-Infinity));

// console.log(_.isBoolean(null))

// console.log(_.isDate(new Date()))
// console.log(_.isRegExp(/moe/));

// try {
//   throw new TypeError('Example');
// } catch (e) {
//   console.log(_.isError(e))
// }

// console.log(_.isSymbol(Symbol()))
// console.log(_.isMap(new Map()))
// console.log(_.isWeakMap(new WeakMap()));
// console.log(_.isSet(new Set()));

// console.log(_.isWeakSet(new WeakSet()));
// console.log(_.isNaN(NaN))
// console.log(isNaN(undefined));
// console.log(_.isNaN(undefined));

// console.log(_.isNull(null))
// console.log(_.isNull(undefined));
// console.log(_.isUndefined(window.missingVarible));

// let underscore = _.noConflict()
// console.log(underscore.isUndefined(window.missing))

// var stooge = {name: 'moe'}
// let clone = _.identity(stooge)
// console.log(stooge === clone);

// var stooge = {name: 'moe'}
// console.log(stooge === _.constant(stooge)())

// let arr = _.times(3, function(n) {
//   return n * 2
// })
// console.log(arr);

// console.log(_.random(0, 100))

// console.log(_.uniqueId('contact_'))
// console.log(_.uniqueId('contact_'))
// console.log(_.uniqueId('contact_'))

// console.log(_.escape('Curly, Larry & Moe'))
// console.log(_.unescape('Curly, Larry &amp; Moe'));
// var obj = {
//   cheese: 'crumpets',
//   stuff: function () {
//     return 'nonsense';
//   },
// };

// console.log(_.result(obj, 'cheese'));
// console.log(_.result(obj, 'stuff'));
// console.log(_.result(obj, 'meat', 'ham'));

// console.log(_.now());