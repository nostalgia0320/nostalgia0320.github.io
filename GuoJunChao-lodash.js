var GuoJunChao = {

	/**
	 * 将 array 拆分成多个 size 长度的块把这些块组成一个新数组。如果 array 无法被分割成全部等长的块，那么最后剩余的元素将组成一个块。
	 * 参数
	 * array (Array): 需要被处理的数组。
	 * [size=1] (number): 每个块的长度。
	 * 返回值
	 * (Array): 返回一个包含拆分块数组的新数组（相当于一个二维数组）。
	 * 例子
	 * chunk(['a', 'b', 'c', 'd'], 2);
	 * => [['a', 'b'], ['c', 'd']]
	 * chunk(['a', 'b', 'c', 'd'], 3);
	 * => [['a', 'b', 'c'], ['d']]
	 **/

	chunk: function(arr, n) {

		var l = Math.ceil(arr.length / n)

		var result = []

		for (i = 0; i < l; i++) {
			result[i] = []
		}

		for (var i = 0; i < arr.length; i++) {
			result[Math.floor(i / n)][i % n] = arr[i]
		}

		return result
	},

	/**
	 * 创建一个新数组并包含原数组中所有的非假值元素。例如 false、null、 0、""、undefined 和 NaN 都是“假值”。
	 * 参数
	 * array (Array): 数组参数。
	 * 返回值
	 * (Array): 返回过滤假值后的数组。
	 * 例子
	 * compact([0, 1, false, 2, '', 3]);
	 * // => [1, 2, 3]
	 **/

	compact: function(array) {

		var result = []

		for (i = 0; i < array.length; i++) {

			if (array[i]) {

				result.push(array[i])

			}

		}

		return result
	},

	/**
	 * 创建一个新数组，将array与任何数组 或 值连接在一起。
	 * 参数
	 * array (Array): 被连接的数组。
	 * [values] (...*): 连接的值。
	 * 返回值
	 * (Array): 返回连接后的新数组。
	 * 例子
	 * var array = [1];
	 * var other = concat(array, 2, [3], [[4]]);
	 * console.log(other);
	 * // => [1, 2, 3, [4]]
	 * console.log(array);
	 * // => [1]
	 **/

	concat: function(array, other) {
		var newArr = []
		for (i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] == 'object') {
				for (j = 0; j < arguments[i].length; j++) {
					newArr.push(arguments[i][j])
				}
			} else {
				newArr.push(arguments[i])
			}
		}
		return newArr
	},

	/**
	 * Creates an array of unique array values not included in the other provided arrays using SameValueZero for equality comparisons.
	 * 参数
	 * array (Array): 需要过滤的数组。
	 * [values] (...Array): 数组需要排除掉的值。
	 * 返回值
	 * (Array): 返回过滤后的数组
	 * 例子
	 * difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 * difference([1, '2', 3], [4, 2]);
	 * // => [1, "2", 3]
	 **/

	difference: function(arr_1, arr_2) {
		var str_1 = arr_1.join('')
		for (i = 0; i < arr_2.length; i++) {
			while (str_1.indexOf(arr_2[i]) != -1) {
				str_1 = str_1.replace(arr_2[i], "")
			}
		}
		var result = str_1.split('')
		for (j = 0; j < result.length; j++) {
			if (result[j].search(/[0-9]/) != -1) {
				result[j] = +result[j]
			}
		}
		return result
	},

	/**
	 * 将 array 中的前 n 个元素去掉，然后返回剩余的部分。
	 * 参数
	 * array (Array): 被操作的数组。
	 * [n=1] (number): 去掉的元素个数。
	 * 返回值
	 * (Array): 返回 array 的剩余部分。
	 * 例子
	 * drop([1, 2, 3]);
	 * // => [2, 3] 默认是1开始的
	 * drop([1, 2, 3], 2);
	 * // => [3]
	 * drop([1, 2, 3], 5);
	 * // => []
	 * drop([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 **/

	drop: function(arr, n) {
		if (n == undefined) {
			n = 1
		}
		var result = []
		for (i = n; i < arr.length; i++) {
			result.push(arr[i])
		}
		return result
	},

	/**
	 * 将 array 尾部的 n 个元素去除，并返回剩余的部分。
	 * 参数
	 * array (Array): 需要被处理数组。
	 * [n=1] (number): 去掉的元素个数。
	 * 返回值
	 * (Array): 返回 array 的剩余部分。
	 * 例子
	 * dropRight([1, 2, 3]);
	 * // => [1, 2]
	 * dropRight([1, 2, 3], 2);
	 * // => [1]
	 * dropRight([1, 2, 3], 5);
	 * // => []
	 * dropRight([1, 2, 3], 0);
	 * // => [1, 2, 3]
	 **/

	dropRight: function(arr, n) {
		if (n == undefined) {
			n = 1
		}
		var result = []
		for (i = 0; i < arr.length - n; i++) {
			result.push(arr[i])
		}
		return result
	},

	/**
	 * 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。
	 * Note: 这个方法会改变 array
	 * 参数
	 * array (Array): 要填充改变的数组。
	 * value (*): 填充给 array 的值。
	 * [start=0] (number): 开始位置（默认0）。
	 * [end=array.length] (number):结束位置（默认array.length）。
	 * 返回值
	 * (Array): 返回 array。
	 * 例子
	 * var array = [1, 2, 3];
	 * fill(array, 'a');
	 * console.log(array);
	 * // => ['a', 'a', 'a']
	 * fill(Array(3), 2);
	 * // => [2, 2, 2]
	 * fill([4, 6, 8, 10], '*', 1, 3);
	 * // => [4, '*', '*', 10]
	 **/

	fill: function(arr, value, start, end) {
		if (start == undefined) {
			start = 0
		}
		if (end == undefined) {
			end = arr.length
		}
		for (i = start; i < end; i++) {
			arr[i] = value
		}
		return arr
	},

	/**
	 * 可以理解为将嵌套数组的维数减少，flattened（平坦）. 如果 isDeep 值为 true 时，嵌套数组将递归为一维数组, 否则只减少嵌套数组一个级别的维数.
	 * 参数
	 * array (Array): 需要flattened（减少维数）的嵌套数组
	 * [isDeep] (boolean): 是否深递归
	 * 返回值
	 * (Array): 返回处理后的数组
	 * 例子
	 * flatten([1, [2, 3, [4]]]);
	 * // => [1, 2, 3, [4]]
	 * // using `isDeep`
	 * flatten([1, [2, 3, [4]]], true);
	 * // => [1, 2, 3, 4]
	 **/

	flatten: function(arr, isDeep) {
		var newarr = [];
		if (isDeep === true) {
			return GuoJunChao.flattenDeep(arr);
		} else {
			for (var i = 0; i < arr.length; i++) {
				if ((arr[i].length !== undefined) && (typeof(arr[i]) === 'object')) {
					for (var j = 0; j < arr[i].length; j++) {
						newarr.push(arr[i][j]);
					}
				} else {
					newarr.push(arr[i]);
				}
			}
		}
		return newarr;
	},



	/**
	 * 递归地平坦一个嵌套的数组.相当于_.flatten(array, true)
	 * 参数
	 * array (Array): 需要
	 * 返回值
	 * (Array): 返回处理后的数组.
	 * 例子
	 * flattenDeep([1, [2, 3, [4]]]);
	 * // => [1, 2, 3, 4]
	 **/
	flattenDeep: function(arr) {
		var newarr = [];
		var juc = false;
		for (var i = 0; i < arr.length; i++) {
			if ((arr[i].length === undefined) && (typeof(arr[i]) !== 'object')) {
				newarr.push(arr[i]);
			} else {
				for (var j = 0; j < arr[i].length; j++) {
					newarr.push(arr[i][j]);
					juc = true;
				}
			}
		}
		if (juc) {
			return GuoJunChao.flattenDeep(newarr);
		}
		return newarr;
	},


	/**
	 * 这个方法返回一个由键值对pairs构成的对象。
	 * Note: 这个方法会改变 array
	 * 参数
	 * pairs (Array): 键值对pairs。
	 * 返回值
	 * (Object): 返回一个新对象。
	 * 例子
	 * fromPairs([['fred', 30], ['barney', 40]]);
	 * // => { 'fred': 30, 'barney': 40 }
	 **/
	fromPairs: function(arr) {
		var result = {}
		for (i = 0; i < arr.length; i++) {
			result[arr[i][0]] = arr[i][1]
		}
		return result
	},

	/**
	 * 去除数组最后一个元素array.
	 * 参数
	 * array (Array): 需要查询的数组.
	 * 返回值
	 * (Array): 返回截取的数组array.
	 * 例子
	 * initial([1, 2, 3]);
	 * // => [1, 2]
	 **/
	initial: function(arr) {
		arr.pop()
		return arr
	},

	/**
	 * 创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用 SameValueZero进行相等性比较。（愚人码头注：可以理解为给定数组的交集）
	 * 参数
	 * [arrays] (...Array): 待检查的数组。
	 * 返回值
	 * (Array): 返回一个包含所有传入数组交集元素的新数组。
	 * 例子
	 * intersection([2, 1], [4, 2], [1, 2]);
	 * // => [2]
	 **/
	intersection: function() {
		var result = []
		var result_r = []
		for (i = 0; i < arguments[0].length; i++) {
			for (j = 0; j < arguments[1].length; j++) {
				if (arguments[0][i] == arguments[1][j]) {
					if (result.indexOf(arguments[0][i]) == -1) {
						result.push(arguments[0][i])
					}
				}
			}
		}
		for (i = 0; i < result.length; i++) {
			for (j = 2; j < arguments.length; j++) {
				if (arguments[j].indexOf(result[i]) == -1) {
					result_r.push(result[i])
				}
			}
		}
		return GuoJunChao.difference(result, result_r)
	},

	/**
	 * 移除数组array中所有和给定值相等的元素，使用 SameValueZero 进行全等比较。
	 * 注意： 和 _.without 方法不同，这个方法会改变数组。使用 _.remove 从一个数组中移除元素。
	 * 参数
	 * array (Array): 要修改的数组。
	 * [values] (...*): 要删除的值。
	 * 返回值
	 * (Array): 返回 array.
	 * 例子
	 * var array = [1, 2, 3, 1, 2, 3];
	 * pull(array, 2, 3);
	 * console.log(array);
	 * // => [1, 1]
	 **/
	pull: function(arr, value) {
		var tem = []
		for (i = 1; i < arguments.length; i++) {
			tem.push(arguments[i])
		}
		var x = GuoJunChao.difference(arr, tem)
		return x
	},

	/**
	 * 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
	 * Note: 不同于 _.difference, 这个方法会改变数组 array。
	 * 参数
	 * array (Array): 要修改的数组。
	 * values (Array): 要移除值的数组。
	 * 返回值
	 * (Array): 返回 array。
	 * 例子
	 * var array = [1, 2, 3, 1, 2, 3];
	 * pullAll(array, [2, 3]);
	 * console.log(array);
	 * // => [1, 1]
	 **/
	pullAll: function(arr, del) {
		var lenDel = del.length
		var lenArr = arr.length
		for (var i = 0; i < lenDel; i++) {
			for (var j = 0; j < lenArr; j++) {
				if (del[i] === arr[j]) {
					arr.splice(j, 1)
				}
			}
		}
		return arr
	},

	/**
	 * 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
	 * Note: 和 _.at不同, 这个方法会改变数组 array。
	 * 参数
	 * array (Array): 要修改的数组。
	 * [indexes] (...(number|number[])): 要移除元素的索引。
	 * 返回值
	 * (Array): 返回移除元素组成的新数组。
	 * 例子
	 * var array = [5, 10, 15, 20];
	 * var evens = _.pullAt(array, 1, 3);
	 * console.log(array);
	 * // => [5, 15]
	 * console.log(evens);
	 * // => [10, 20]
	 **/
	pullAt: function(arr) {
		var result = []
		var lenArg = arguments.length
		for (var i = lenArg - 1; i >= 1; i--) {
			if (arguments[i] < arr.length) {
				result.push(arr[arguments[i]])
				arr.splice(arguments[i], 1)
			}
		}
		result = result.reverse()
		return result
	},

	/**
	 * 反转array，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。
	 * Note: 这个方法会改变原数组 array，基于 Array#reverse.
	 * 参数
	 * array (Array): 要修改的数组。
	 * 返回值
	 * (Array): 返回 array.
	 * 例子
	 * var array = [1, 2, 3];
	 * reverse(array);
	 * // => [3, 2, 1]
	 * console.log(array);
	 * // => [3, 2, 1]
	 **/
	reverse: function(arr) {
		var len = arr.length
		var result = []
		for (var i = 0; i < len; i++) {
			result.push(arr.pop())
		}
		for (var i = 0; i < len; i++) {
			arr.push(result[i])
		}
		return arr
	},

	/**
	 * 根据separator 拆分字符串string。
	 * @param  [string=''] (string): 要拆分的字符串。
	 * @param  separator (RegExp|string): 拆分的分隔符。
	 * @param  [limit] (number): 限制结果的数量。
	 * @return (Array): 返回拆分部分的字符串的数组。
	 */
	split: function(str, sep, lim) {
		while (str.indexOf(sep) != -1) {
			str = str.replace(sep, "")
		}
		var arr = str.split("")
		var result = []
		for (i = 0; i < lim; i++) {
			result.push(arr[i])
		}
		return result



	},

	/**
	 * 获取除了array数组第一个元素以外的全部元素。
	 * 参数
	 * array (Array): 要检索的数组。
	 * 返回值
	 * (Array): 返回 array 数组的切片（除了array数组第一个元素以外的全部元素）。
	 * 例子
	 * tail([1, 2, 3]);
	 * // => [2, 3]
	 **/
	tail: function(arr) {
		var result = []
		for (i = 1; i < arr.length; i++) {
			result.push(arr[i])
		}
		return result
	},

	/**
	 * 创建一个数组切片，从array数组的起始元素开始提取n个元素。
	 * 参数
	 * array (Array): 要检索的数组。
	 * [n=1] (number): 要提取的元素个数。
	 * 返回值
	 * (Array): 返回 array 数组的切片（从起始元素开始n个元素）。
	 * 例子
	 * take([1, 2, 3]);
	 * // => [1]
	 * take([1, 2, 3], 2);
	 * // => [1, 2]
	 * take([1, 2, 3], 5);
	 * // => [1, 2, 3]
	 * take([1, 2, 3], 0);
	 * // => []
	 **/
	take: function(arr, n) {
		if (n == undefined) {
			n = 1
		}
		var result = []
		for (i = 0; i < n && i < arr.length; i++) {
			result.push(arr[i])
		}
		return result
	},

	/**
	 * 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
	 * 参数
	 * array (Array): 要检索的数组。
	 * [n=1] (number): 要提取的元素个数。
	 * 返回值
	 * (Array): 返回 array 数组的切片（从结尾元素开始n个元素）。
	 * 例子
	 * take([1, 2, 3]);
	 * // => [3]
	 * take([1, 2, 3], 2);
	 * // => [2, 3]
	 * take([1, 2, 3], 5);
	 * // => [1, 2, 3]
	 * take([1, 2, 3], 0);
	 * // => []
	 **/
	takeRight: function(arr, n) {
		if (!n && n !== 0) {
			n = 1
		}
		var result = []
		var len = arr.length
		n = n > len ? len : n
		var start = len - n
		for (var i = start; i < len; i++) {
			result.push(arr[i])
		}
		return result
	},

	/**
	 * 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（愚人码头注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
	 * 参数
	 * [arrays] (...Array): 要检查的数组。
	 * 返回值
	 * (Array): 返回一个新的联合数组。
	 * 例子
	 * union([2], [1, 2]);
	 * // => [2, 1]
	 **/
	union: function() {
		var result = []
		for (i = 0; i < arguments.length; i++) {
			for (j = 0; j < arguments[i].length; j++) {
				if (result.indexOf(arguments[i][j]) == -1) {
					result.push(arguments[i][j])
				}
			}
		}
		return result
	},

	/**
	 * 创建一个去重后的array数组副本。使用了 SameValueZero 做等值比较。只有第一次出现的元素才会被保留。
	 * 参数
	 * array (Array): 要检查的数组。
	 * 返回值
	 * (Array): 返回新的去重后的数组。
	 * 例子
	 * uniq([2, 1, 2]);
	 * // => [2, 1]
	 **/
	uniq: function(arr) {
		var result = []

		for (i = 0; i < arr.length; i++) {
			if (result.indexOf(arr[i]) == -1) {
				result.push(arr[i])
			}

		}
		return result
	},

	/**
	 * 这个方法类似于_.zip，除了它接收分组元素的数组，并且创建一个数组，分组元素到打包前的结构。
	 * 参数
	 * array (Array): 要处理的分组元素数组。
	 * 返回值
	 * (Array): 返回重组元素的新数组。
	 * 例子
	 * var zipped = zip(['fred', 'barney'], [30, 40], [true, false]);
	 * // => [['fred', 30, true], ['barney', 40, false]]
	 * unzip(zipped);
	 * // => [['fred', 'barney'], [30, 40], [true, false]]
	 **/
	unzip: function(arr) {
		var result = []
		for (i = 0; i < arr[0].length; i++) {
			result[i] = []
			for (j = 0; j < arr.length; j++) {
				result[i][j] = arr[j][i]
			}
		}
		return result
	},

	/**
	 * 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
	 * 参数
	 * [arrays] (...Array): 要处理的数组。
	 * 返回值
	 * (Array): 返回分组元素的新数组。
	 * 例子
	 * zip(['fred', 'barney'], [30, 40], [true, false]);
	 * /// => [['fred', 30, true], ['barney', 40, false]]
	 **/
	zip: function() {
		var result = []
		for (i = 0, j = 0; i < arguments[0].length; i++) {
			result[i] = []
			for (j = 0; j < arguments.length; j++) {
				result[i][j] = arguments[j][i]
			}
		}
		return result
	},

	/**
	 * 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较.
	 * 注意: 不像 _.pull, 这个方法会返回一个新数组。
	 * 参数
	 * array (Array): 要检查的数组。
	 * [values] (...*): 要剔除的值。
	 * 返回值
	 * (Array): 返回过滤值后的新数组。
	 * 例子
	 * without([2, 1, 2, 3], 1, 2);
	 * // => [3]
	 **/
	without: function(arr, value) {
		var tem = []
		var tem_1 = []
		for (i = 1; i < arguments.length; i++) {
			tem.push(arguments[i])
		}
		return GuoJunChao.difference(arr, tem)
	},

	/**
	 * 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
	 * 参数
	 * [arrays] (...Array): 要检查的数组。
	 * 返回值
	 * (Array): 返回过滤值后的新数组。
	 * 例子
	 * xor([2, 1], [2, 3]);
	 * // => [1, 3]
	 **/
	xor: function() {
		var tem = []
		for (i = 0; i < arguments.length; i++) {
			for (j = 0; j < arguments[i].length; j++) {
				if (tem.indexOf(arguments[i][j]) == -1) {
					tem.push(arguments[i][j])
				} else {
					tem.splice(tem.indexOf(arguments[i][j]), 1)
				}
			}
		}
		return tem
	},

	/**
	 * 创建一个数组， value（值） 是 iteratee（迭代函数）遍历 collection（集合）中的每个元素后返回的结果。 iteratee（迭代函数）调用3个参数：(value, index|key, collection).
	 * 参数
	 * collection (Array|Object): 用来迭代的集合。
	 * [iteratee=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
	 * 返回值
	 * (Array): 返回新的映射后数组。
	 * 例子
	 **/
	map: function(coll, ite) {
		if (typeof coll.length == 'number') {
			for (i = 0; i < coll.length; i++) {
				coll[i] = ite(coll[i], i, coll)
			}
			return coll
		} else {
			for (var s in coll) {
				coll[s] = ite(coll[s], s, coll)
			}
			return coll
		}


	},

	/**
	 * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。
	 * 参数
	 * collection (Array|Object): 一个用来迭代的集合。
	 * [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
	 * 返回值
	 * (Array): 返回一个新的过滤后的数组。
	 * 例子
	 **/
	filter: function(coll, ite) {
		if (typeof coll.length == 'number') {
			var arr = []
			for (i = 0; i < coll.length; i++) {
				if (ite(coll[i], i, coll)) {
					arr.push(coll[i])
				}
			}
			return arr
		} else {
			var result = {}
			for (var s in coll) {
				if (ite(coll[s], s, coll)) {
					var name = s
					var value = coll[s]
					result[name] = coll[s]
				}
			}
			return result
		}

	},

	/**
	 * 遍历 collection（集合）元素，返回 predicate（断言函数）返回真值 的所有元素的数组。 predicate（断言函数）调用三个参数：(value, index|key, collection)。
	 * 参数
	 * collection (Array|Object): 一个用来迭代的集合。
	 * [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
	 * 返回值
	 * (Array): 返回一个新的过滤后的数组。
	 * 例子
	 **/
	partition: function(coll, ite) {
		var result = [
			[],
			[]
		]
		for (var i in coll) {
			if (ite(coll[i])) {
				result[0].push(coll[i])
			} else {
				result[1].push(coll[i])
			}
		}
		return result
	},

	/**
	 * 获取数组 array的第一个元素
	 * 参数
	 * array (Array): 需要查询的数组
	 * 返回值
	 * (*): 返回数组的第一个元素
	 * 例子
	 * first([1, 2, 3]);
	 * // => 1
	 * first([]);
	 * // => undefined
	 **/
	head: function(arr) {
		return arr[0]
	},

	/**
	 * 通过 predicate（断言函数） 检查 collection（集合）中的 所有 元素是否都返回真值。
	 * @param  collection (Array|Object): 一个用来迭代的集合。
	 * @param  [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
	 * @return (boolean): 如果所有元素经 predicate（断言函数） 检查后都都返回真值，那么就返回true，否则返回 false 。
	 */
	every: function(coll, ite) {
		for (i = 0; i < coll.length; i++) {
			if (!ite(coll[i])) {
				return false
			}
		}
		return true
	},

	/**
	 * 使用 SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
	 * 参数
	 * array (Array): 需要查找的数组。
	 * value (*): 需要查找的值。
	 * [fromIndex=0] (number): 开始查询的位置。
	 * 返回值
	 * (number): 返回 值value在数组中的索引位置, 没有找到为返回-1。
	 * 例子
	 * indexOf([1, 2, 1, 2], 2);
	 * // => 1
	 * // Search from the `fromIndex`.
	 * indexOf([1, 2, 1, 2], 2, 2);
	 * // => 3
	 **/
	indexOf: function(arr, value, fromIndex) {
		var result = []
		if (fromIndex == undefined) {
			fromIndex = 0
		}
		for (i = fromIndex; i < arr.length; i++) {
			result.push(arr[i])
		}
		return result.indexOf(value) + fromIndex
	},

	/**
	 * 获取数组的索引n处的元素。 如果n为负，则返回从末尾开始的第n个元素。
	 * 参数
	 * array (Array): The array to query.
	 * [n=0] (number): The index of the element to return.
	 * 返回值
	 * (*): Returns the nth element of array.
	 * 例子
	 * var array = ['a', 'b', 'c', 'd'];
	 * nth(array, 1);
	 * // => 'b'
	 * nth(array, -2);
	 * // => 'c';
	 **/
	nth: function(arr, n) {
		if (n == undefined) {
			n = 0
		}
		if (n >= 0) {
			return arr[n]
		} else {
			return arr.reverse()[-n - 1]
		}
	},

	/**
	 * 将 array 中的所有元素转换为由 separator 分隔的字符串。
	 * 参数
	 * array (Array): 要转换的数组。
	 * [separator=','] (string): 分隔元素。
	 * [fromIndex=0] (number): 开始查询的位置。
	 * 返回值
	 * (string): 返回连接字符串。
	 * 例子
	 * join(['a', 'b', 'c'], '~');
	 * // => 'a~b~c'
	 **/
	join: function(arr, sep) {
		return arr.join(sep)
	},

	/**
	 * 取出数组的最后一个元素 array.
	 * 参数
	 * array (Array): 查询的数组
	 * 返回值
	 * (*): 返回 array的最后一个元素.
	 * 例子
	 * last([1, 2, 3]);
	 * // => 3
	 **/
	last: function(arr) {
		return arr[arr.length - 1]
	},

	/**
	 * 这个方法类似 _.indexOf ，区别是它是从右到左遍历array的元素。
	 * 参数
	 * array (Array): 要搜索的数组。
	 * value (*): 要搜索的值。
	 * [fromIndex=array.length-1] (number): 开始搜索的索引值。
	 * 返回值
	 * (number): 返回匹配值的索引值，否则返回 -1。
	 * 例子
	 * lastIndexOf([1, 2, 1, 2], 2);
	 * // => 3
	 * // Search from the `fromIndex`.
	 * lastIndexOf([1, 2, 1, 2], 2, 2);
	 * // => 1
	 **/
	lastIndexOf: function(arr, value, fromIndex) {
		return arr.length - 1 - GuoJunChao.indexOf(arr.reverse(), value, fromIndex)
	},

	/**
	 * 使用二分检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
	 * 参数
	 * array (Array): 要检查的排序数组。
	 * value (*): 要评估的值。
	 * 返回值
	 * (number): 返回 value值 应该在数组array中插入的索引位置 index。
	 * 例子
	 * sortedIndex([30, 50], 40);
	 * // => 1
	 **/
	sortedIndex: function(arr, value) {
		if (value <= arr[0]) {
			return 0
		}
		if (value >= arr[arr.length - 1]) {
			return arr.length
		}
		for (i = 0; i < arr.length; i++) {
			if (arr[i] <= value && arr[i + 1] >= value) {
				return i + 1
			}
		}

	},

	/**
	 * 通过 predicate（断言函数） 检查collection（集合）中的元素是否存在 任意 truthy（真值）的元素，一旦 predicate（断言函数） 返回 truthy（真值），遍历就停止。 predicate 调用3个参数：(value, index|key, collection)。
	 * @param  collection (Array|Object): 用来迭代的集合。
	 * @param  [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
	 * @return (boolean): 如果任意元素经 predicate 检查都为 truthy（真值），返回 true ，否则返回 false 。
	 */
	some: function(coll, ite) {
		for (i = 0; i < coll.length; i++) {
			if (ite(coll[i])) {
				return true
			}
		}
		return false
	},

	/**
	 * 压缩 collection（集合）为一个值，通过 iteratee（迭代函数）遍历 collection（集合）中的每个元素，每次返回的值会作为下一次迭代使用(愚人码头注：作为iteratee（迭代函数）的第一个参数使用)。 如果没有提供 accumulator，则 collection（集合）中的第一个元素作为初始值。(愚人码头注：accumulator参数在第一次迭代的时候作为iteratee（迭代函数）第一个参数使用。) iteratee 调用4个参数：(accumulator, value, index|key, collection).
	 * @param  collection (Array|Object): 用来迭代的集合。
	 * @param  [iteratee=_.identity] (Function): 每次迭代调用的函数。
	 * @param  [accumulator] (*): 初始值。
	 * @return (*): 返回累加后的值。
	 */
	reduce: function(coll, ite, acc) {
		var result = acc
		var i = 0
		for (var s in coll) {
			i++
			if (i >= 2 && acc == undefined) {
				if (i == 2) {
					result = coll[0]
				}
				result = ite(result, coll[s])

			}
			if (i >= 1 && acc != undefined) {
				result = ite(result, coll[s])

			}
		}
		return result
	},

	/**
	 * 转换字符串string为 驼峰写法。
	 * 参数
	 * [string=''] (string): 要转换的字符串。
	 * 返回值
	 * (string): 返回驼峰写法的字符串。
	 * 例子
	 * camelCase('Foo Bar');
	 * // => 'fooBar'
	 * camelCase('--foo-bar--');
	 * // => 'fooBar'
	 * camelCase('__FOO_BAR__');
	 * // => 'fooBar'
	 **/
	camelCase: function(str) {
		var result = ''
		var start = 0
		var stop = 0
		var x = 0
		for (i = 0; i < str.length - 1; i++) {
			if (str[i].search(/[a-z]/) == -1 && str[i].search(/[A-Z]/) == -1 && (str[i + 1].search(/[A-Z]/) != -1 || str[i + 1].search(/[a-z]/) != -1)) {
				start = i + 1
			}
			if (str[i + 1].search(/[a-z]/) == -1 && str[i + 1].search(/[A-Z]/) == -1 && (str[i].search(/[A-Z]/) != -1 || str[i].search(/[a-z]/) != -1)) {
				stop = i + 1
				x++
			}
			if (stop > start) {
				if (x == 1) {
					result = result + str.toLowerCase().slice(start, start + 1)
				} else if (x > 1) {
					result = result + str.toUpperCase().slice(start, start + 1)
				}
				result = result + str.toLowerCase().slice(start + 1, stop)
				start = 0
				stop = 0
			}
		}
		if (start != 0) {
			stop = str.length
			x++
			if (x == 1) {
				result = result + str.toLowerCase().slice(start, start + 1)
			} else if (x > 1) {
				result = result + str.toUpperCase().slice(start, start + 1)
			}
			result = result + str.toLowerCase().slice(start + 1, stop)
		}
		if (x == 0 && start == 0 && stop == 0) {
			return str
		}
		return result
	},

	/**
	 * _.filter的反向方法;此方法 返回 predicate（断言函数） 不 返回 truthy（真值）的collection（集合）元素（愚人码头注释：非真）。
	 * @param  collection (Array|Object): 用来迭代的集合。
	 * @param  [predicate=_.identity] (Array|Function|Object|string): 每次迭代调用的函数。
	 * @return (Array): 返回过滤后的新数组
	 */
	reject: function(coll, ite) {
		if (typeof coll.length == 'number') {
			var arr = []
			for (i = 0; i < coll.length; i++) {
				if (!ite(coll[i], i, coll)) {
					arr.push(coll[i])
				}
			}
			return arr
		} else {
			var result = {}
			for (var s in coll) {
				if (!ite(coll[s], s, coll)) {
					var name = s
					var value = coll[s]
					result[name] = coll[s]
				}
			}
			return result
		}

	},

	/**
	 * 创建一个数组，值来自 object 的paths路径相应的值。
	 * @param  object (Object): 要迭代的对象。
	 * @param  [paths] (...(string|string[])): 要获取的对象的元素路径，单独指定或者指定在数组中。
	 * @return (Array): 返回选中值的数组。
	 * example var object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
	 * at(object, ['a[0].b.c', 'a[1]']);
	 * // => [3, 4]
	 */
	at: function(coll, path) {
		var result = []
		for (i = 1; i < arguments.length; i++) {
			result.push(coll[arguments[i]])
		}
		return result

	},

	/**
	 * 转换字符串string首字母为大写，剩下为小写。
	 * 参数
	 * [string=''] (string): 要大写开头的字符串。
	 * 返回值
	 * (string): 返回大写开头的字符串。
	 * 例子
	 * capitalize('FRED');
	 * // => 'Fred'
	 **/
	capitalize: function(str) {
		tmp = []
		result = str.toLowerCase()
		tmp.push(result.charAt(0).toUpperCase())
		tmp.push(result.substring(1))
		result = tmp.join("")
		return result
	},

	/**
	 * 检查字符串string是否以给定的target字符串结尾。
	 * 参数
	 * [string=''] (string): 要检索的字符串。
	 * [target] (string): 要检索字符。
	 * [position=string.length] (number): 检索的位置。
	 * 返回值
	 * (boolean): 如果字符串string以target字符串结尾，那么返回 true，否则返回 false。
	 * 例子
	 * endsWith('abc', 'c');
	 * // => true
	 * endsWith('abc', 'b');
	 * // => false
	 * endsWith('abc', 'b', 2);
	 * // => true
	 **/
	endsWith: function(str, tar, pos) {
		if (pos == undefined) {
			pos = str.length
		}
		return str[pos - 1] == tar
	},

	/**
	 * 转义string中的 "&", "<", ">", '"', "'", 和 "`" 字符为HTML实体字符。
	 * @param  [string=''] (string): 要转义的字符串。
	 * @return (string): 返回转义后的字符串。
	 */
	escape: function(str) {
		var result = ''
		for (i = 0; i < str.length; i++) {
			switch (str[i]) {
				case "&":
					result = result + '&amp;'
					break
				case "<":
					result = result + '&lt;'
					break
				case ">":
					result = result + '&gt;'
					break
				case "\"":
					result = result + '&quot;'
					break
				case "\'":
					result = result + '&apos;'
					break
				default:
					result = result + str[i]
					break
			}
		}
		return result
	},

	/**
	 * 转义 RegExp 字符串中特殊的字符 "^", "$", "", ".", "*", "+", "?", "(", ")", "[", "]", "{", "}", 和 "|" 。
	 * @param  [string=''] (string): 要转义的字符串。
	 * @return (string): 返回转义后的字符串。
	 */
	escapeRegExp: function(str) {
		var result = ''
		for (i = 0; i < str.length; i++) {
			if (str[i] == "^" || str[i] == "$" || str[i] == "" || str[i] == "." || str[i] == "*" || str[i] == "+" || str[i] == "?" || str[i] == "(" || str[i] == ")" || str[i] == "[" || str[i] == "]" || str[i] == "{" || str[i] == "}" || str[i] == "|") {
				result = result + '\\' + str[i]
			} else {
				result = result + str[i]
			}
		}
		return result
	},

	/**
	 * 转换字符串string为 kebab case.
	 * 参数
	 * [string=''] (string): 要转换的字符串。
	 * 返回值
	 * (string): 返回转换后的字符串。
	 * 例子
	 * kebabCase('Foo Bar');
	 * // => 'foo-bar'
	 * kebabCase('fooBar');
	 * // => 'foo-bar'
	 * kebabCase('__FOO_BAR__');
	 * // => 'foo-bar'
	 **/
	kebabCase: function(str) {
		var result = str
		var tmp = result.split("")
		var reArr = []
		for (var i = 0; i < tmp.length - 1; i++) {
			if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
				tmp.splice(i, 1)
				i--
			}
		}
		for (var i = 0; i < tmp.length; i++) {
			if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
				tmp.splice(i, 1)
				i--
			} else {
				break
			}
		}
		for (var i = 1; i < tmp.length; i++) {
			if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
				tmp.splice(i, 0, "-")
				i++
			}
		}
		for (var i = 0; i < tmp.length; i++) {
			if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 45))) {
				tmp.splice(i, 1)
			}
		}
		result = tmp.join("").toLowerCase()
		return result
	},

	/**
	 * 转换字符串string以空格分开单词，并转换为小写。
	 * 参数
	 * [string=''] (string): 要转换的字符串。
	 * 返回值
	 * (string): 返回转换后的字符串。
	 * 例子
	 * lowerCase('--Foo-Bar--');
	 * // => 'foo bar'
	 * lowerCase('fooBar');
	 * // => 'foo bar'
	 * kebabCase('__FOO_BAR__');
	 * // => 'foo bar'
	 **/
	lowerCase: function(str) {
		var result = str
		var tmp = result.split("")
		var reArr = []
		for (var i = 0; i < tmp.length - 1; i++) {
			if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
				tmp.splice(i, 1)
				i--
			}
		}
		for (var i = 0; i < tmp.length; i++) {
			if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
				tmp.splice(i, 1)
				i--
			} else {
				break
			}
		}
		for (var i = 1; i < tmp.length; i++) {
			if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
				tmp.splice(i, 0, " ")
				i++
			}
		}
		for (var i = 0; i < tmp.length; i++) {
			if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 32))) {
				tmp.splice(i, 1)
			}
		}
		result = tmp.join("").toLowerCase()
		return result
	},


	/**
	 * 转换字符串string的首字母为小写。
	 * 参数
	 * [string=''] (string): 要转换的字符串。
	 * 返回值
	 * (string): 返回转换后的字符串。
	 * 例子
	 * lowerFirst('Fred');
	 * // => 'fred'
	 * lowerFirst('FRED');
	 * // => 'fRED'
	 **/
	lowerFirst: function(str) {
		return str.slice(0, 1).toLowerCase() + str.slice(1, str.length)
	},

	/**
	 * 如果string字符串长度小于 length 则从左侧和右侧填充字符。 如果没法平均分配，则截断超出的长度。
	 * 参数
	 * [string=''] (string): 要填充的字符串。
	 * [length=0] (number): 填充的长度。
	 * [chars=' '] (string): 填充字符。
	 * 返回值
	 * (string): 返回填充后的字符串。
	 * 例子
	 * pad('abc', 8);
	 * // => '  abc   '
	 * pad('abc', 8, '_-');
	 * // => '_-abc_-_'
	 * pad('abc', 3);
	 * // => 'abc'
	 **/
	pad: function(str, len, char) {
		if (char == undefined) {
			char = ' '
		}
		var x = char.length
		var y = len - str.length
		for (i = 0; i < y - 2 * x; i += (2 * x)) {
			str = char + str + char
		}
		if (str.length < len) {
			str = str + char
		}

		if (str.length >= len) {
			return str.slice(0, len)
		}
	},

	/**
	 * 如果string字符串长度小于 length 则在右侧填充字符。 如果超出length长度则截断超出的部分。
	 * 参数
	 * [string=''] (string): 要填充的字符串。
	 * [length=0] (number): 填充的长度。
	 * [chars=' '] (string): 填充字符。
	 * 返回值
	 * (string): 返回填充后的字符串。
	 * 例子
	 * padEnd('abc', 6);
	 * // => 'abc   '
	 * padEnd('abc', 6, '_-');
	 * // => 'abc_-_'
	 * padEnd('abc', 3);
	 * // => 'abc'
	 **/
	padEnd: function(str, len, char) {
		if (char == undefined) {
			char = ' '
		}
		while (str.length < len) {
			str = str + char
		}
		return str.slice(0, len)

	},

	/**
	 * 如果string字符串长度小于 length 则在左侧填充字符。 如果超出length长度则截断超出的部分。
	 * 参数
	 * [string=''] (string): 要填充的字符串。
	 * [length=0] (number): 填充的长度。
	 * [chars=' '] (string): 填充字符。
	 * 返回值
	 * (string): 返回填充后的字符串。
	 * 例子
	 * padStart('abc', 6);
	 * // => '   abc'
	 * padStart('abc', 6, '_-');
	 * // => '_-_abc'
	 * padStart('abc', 3);
	 * // => 'abc'
	 **/
	padStart: function(str, len, char) {
		var x = str.length
		if (char == undefined) {
			char = ' '
		}
		while (str.length < len) {
			str = char + str
		}
		var y = str.length - x
		var z = str.length - len
		return str.slice(0, y - z) + str.slice(str.length - x, str.length)

	},

	/**
	 * 转换string字符串为指定基数的整数。
	 * @param  string (string): 要转换的字符串。
	 * @param  [radix=10] (number):转换基数。
	 * @return (number): 返回转换后的整数。
	 */
	parseInt: function(str, radix) {
		radix = radix ? radix : 10
		var temp = str.split("")
		var result = []
		if (temp[0] !== '-' && typeof(+temp[0]) !== 'number') {
			return NaN
		} else {
			result.push(temp[0])
		}
		for (var i = 1; i < temp.length; i++) {
			if (typeof(+temp[i]) === 'number') {
				result.push(temp[i])
			} else {
				break
			}
		}
		return +result.join("")
	},

	/**
	 * 重复 N 次给定字符串。
	 * 参数
	 * [string=''] (string): 要重复的字符串。
	 * [n=1] (number): 重复的次数。
	 * 返回值
	 * (string): 返回重复的字符串。
	 * 例子
	 * repeat('*', 3);
	 * // => '***'
	 * repeat('abc', 2);
	 * // => 'abcabc'
	 * repeat('abc', 0);
	 * // => ''
	 **/
	repeat: function(str, n) {
		if (n == undefined) {
			n = 0
		}
		if (typeof str == 'object') {
			var result = []
			for (i = 0; i < n; i++) {
				result = result + str
			}
			return result
		} else {
			var result = ''
			for (i = 0; i < n; i++) {
				result = result + str
			}
			return result
		}

	},

	/**
	 * 替换string字符串中匹配的pattern为给定的replacement 。
	 * @param  [string=''] (string): 待替换的字符串。
	 * @param  pattern (RegExp|string): 要匹配的内容。
	 * @param  replacement (Function|string): 替换的内容。
	 * @return (string): 返回替换后的字符串
	 */
	replace: function(str, pattern, replace) {
		var result = [],
			start = 0
		for (var i = 0; i < str.length; i++) {
			if (str[i] === pattern[0]) {
				if (str.slice(i, i + pattern.length) === pattern) {
					result.push(str.slice(start, i))
					result.push(replace)
					i = i + pattern.length - 1
					start = i + 1
				}
			}
		}
		result.push(str.slice(start, str.length))
		result = result.join("")
		return result
	},

	/**
	 * 转换字符串string为 snake case..
	 * 参数
	 * [string=''] (string): 要转换的字符串。
	 * 返回值
	 * (string): 返回转换后的字符串。
	 * 例子
	 * snakeCase('Foo Bar');
	 * // => 'foo_bar'
	 * snakeCase('fooBar');
	 * // => 'foo_bar'
	 * snakeCase('--FOO-BAR--');
	 * // => 'foo_bar'
	 **/
	snakeCase: function(str) {
		var result = str
		var tmp = result.split("")
		var reArr = []
		for (var i = 0; i < tmp.length - 1; i++) {
			if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) && !((97 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 122) || (65 <= tmp[i + 1].charCodeAt(0) && tmp[i + 1].charCodeAt(0) <= 90))) {
				tmp.splice(i, 1)
				i--
			}
		}
		for (var i = 0; i < tmp.length; i++) {
			if (!(97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) && !(65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90)) {
				tmp.splice(i, 1)
				i--
			} else {
				break
			}
		}
		for (var i = 1; i < tmp.length; i++) {
			if ((65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) && !(65 <= tmp[i - 1].charCodeAt(0) && tmp[i - 1].charCodeAt(0) <= 90)) {
				tmp.splice(i, 0, "_")
				i++
			}
		}
		for (var i = 0; i < tmp.length; i++) {
			if (!((97 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 122) || (65 <= tmp[i].charCodeAt(0) && tmp[i].charCodeAt(0) <= 90) || (tmp[i].charCodeAt(0) === 95))) {
				tmp.splice(i, 1)
			}
		}
		result = tmp.join("").toLowerCase()
		return result
	},

	/**
	 * 转换 string 字符串为 start case.
	 * @param  [string=''] (string): 要转换的字符串。
	 * @return (string): 返回转换后的字符串。
	 */
	startCase: function(str) {
		var result = ''
		var start = 0
		var stop = 0
		var x = 0
		for (i = 0; i < str.length - 1; i++) {
			if (str[i].search(/[a-z]/) == -1 && str[i].search(/[A-Z]/) == -1 && (str[i + 1].search(/[A-Z]/) != -1 || str[i + 1].search(/[a-z]/) != -1)) {
				start = i + 1
			}
			if (str[i + 1].search(/[a-z]/) == -1 && str[i + 1].search(/[A-Z]/) == -1 && (str[i].search(/[A-Z]/) != -1 || str[i].search(/[a-z]/) != -1)) {
				stop = i + 1
				x++
			}
			if (stop > start) {
				if (x > 1) {
					result = result + ' ' + str.toUpperCase().slice(start, start + 1) + str.slice(start + 1, stop)
				} else {
					result = result + str.toUpperCase().slice(start, start + 1) + str.slice(start + 1, stop)
				}
				start = 0
				stop = 0
			}
		}
		if (start != 0) {
			stop = str.length
			x++
			result = result + str.toUpperCase().slice(start, start + 1) + str.slice(start + 1, stop)
		}
		if (x == 0 && start == 0 && stop == 0) {
			result = str.slice(0, 1).toUpperCase() + str.slice(1, str.length)
		}
		var res = ''
		start = 0
		for (i = 1; i < result.length - 1; i++) {
			if ((result[i].search(/[A-Z]/) != -1 && result[i - 1].search(/[a-z]/) != -1) || (result[i].search(/[A-Z]/) != -1 && result[i + 1].search(/[a-z]/) != -1)) {
				res = res + result.slice(start, i) + ' '
				start = i
			}
		}
		return (res + result.slice(start, result.length)).replace('  ', ' ')
	},

	/**
	 * 检查 value(值) 是否在 collection(集合) 中。如果 collection(集合)是一个字符串，那么检查 value（值，子字符串） 是否在字符串中， 否则使用 SameValueZero 做等值比较。 如果指定 fromIndex 是负数，那么从 collection(集合) 的结尾开始检索。
	 * @param  collection (Array|Object|string): 要检索的集合。
	 * @param  value (*): 要检索的值。
	 * @param  [fromIndex=0] (number): 要检索的 索引位置。
	 * @return (boolean): 如果找到 value 返回 true， 否则返回 false。
	 */
	includes: function(coll, val, n) {
		if (n == undefined) {
			n = 0
		}
		if (typeof coll == 'object') {
			for (i = n; i < coll.length; i++) {
				if (coll[n] == val) {
					return true
				}
			}
			return false
		} else {
			coll = coll.slice(n, coll.length)
			return coll.indexOf(val) != -1
		}

	},

	/**
	 * 创建一个对象，key 是 iteratee 遍历 collection(集合) 中的每个元素返回的结果。
	 * @param  collection (Array|Object): 一个用来迭代的集合。
	 * @param  [iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。
	 * @return (Object): 返回一个组成聚合的对象。
	 */
	groupBy: function(coll, ite) {
		var result = {}
		for (i = 0; i < coll.length; i++) {
			if (result[ite(coll[i])] == undefined) {
				result[ite(coll[i])] = []
			}
			result[ite(coll[i])] = result[ite(coll[i])].concat(coll[i])
		}
		return result
	},

	/**
	 * 创建一个对象组成， key（键） 是 collection（集合）中的每个元素经过 iteratee（迭代函数） 处理后返回的结果。 每个 key（键）对应的值是生成key（键）的最后一个元素。iteratee（迭代函数）调用1个参数：(value)。
	 * @param  collection (Array|Object): 用来迭代的集合。
	 * @param  [iteratee=_.identity] (Array|Function|Object|string): 这个迭代函数用来转换key。
	 * @return (Object): 返回一个组成聚合的对象。
	 */
	keyBy: function(colle, iter) {
		var result = {}
		if (this.isString(iter)) {
			var fn = function(obj) {
				return obj[iter]
			}
		}
		if (this.isFunction(iter)) {
			var fn = iter
		}
		for (var key in colle) {
			result[fn(colle[key])] = colle[key]
		}
		return result
	},

	/**
	 * 检查 path 是否是object对象的直接属性。
	 * @param  object (Object): 要检索的对象。
	 * @param  path (Array|string): 要检查的路径path。
	 * @return (boolean): 如果path存在，那么返回 true ，否则返回 false。
	 */
	has: function(obj, path) {
		if (this.get(obj, path, 'undefined') === 'undefined') {
			return false
		}
		return true
	},



	/**
	 * 创建一个object键值倒置后的对象。 如果 object 有重复的值，后面的值会覆盖前面的值。
	 * 参数
	 * object (Object): 要键值倒置对象。
	 * 返回值
	 * (Object): 返回新的键值倒置后的对象。
	 * 例子
	 * var object = { 'a': 1, 'b': 2, 'c': 1 };
	 * invert(object);
	 * // => { '1': 'c', '2': 'b' }
	 */
	invert: function(coll, n) {
		var result = {}
		for (var s in coll) {

			var name = s
			var value = coll[s]
			result[coll[s]] = name

		}
		return result
	},

	/**
	 * 根据 precision（精度） 向上舍入 number。（愚人码头注： precision（精度）可以理解为保留几位小数。）
	 * @param  number (number): 要向上舍入的值。
	 * @param  [precision=0] (number): 向上舍入的的精度。
	 * @return (number): 返回向上舍入的值。
	 */
	ceil: function(num, p) {
		if (p == undefined) {
			return Math.ceil(num)
		}
		if (p > 0) {
			for (i = 0; i < p; i++) {
				num *= 10
			}
		} else {
			for (i = 0; i > p; i--) {
				num /= 10
			}
		}

		num = Math.ceil(num)

		if (p > 0) {
			for (i = 0; i < p; i++) {
				num /= 10
			}
		} else {
			for (i = 0; i > p; i--) {
				num *= 10
			}
		}
		return num
	},

	/**
	 * 这个方法类似_.difference ，除了它接受一个 iteratee
	 * @param  array (Array): 要检查的数组。
	 * @param  [values] (...Array): 排除的值。
	 * @param  [iteratee=_.identity] (Array|Function|Object|string): iteratee 调用每个元素。
	 * @return (Array): 返回一个过滤值后的新数组。
	 */

	differenceBy: function(arr_1, arr_2, ite) {
		var result = []
		if (typeof ite == 'function') {
			for (i = 0; i < arr_1.length; i++) {
				for (j = 0; j < arr_2.length; j++) {
					if (ite(arr_1[i]) == ite(arr_2[j])) {
						break
					}
				}
				if (j == arr_2.length) {
					result.push(arr_1[i])
				}
			}
			return result
		} else {
			for (i = 0; i < arr_1.length; i++) {
				for (j = 0; j < arr_2.length; j++) {
					if (arr_1[i][ite] == arr_2[j][ite]) {
						break
					}
				}
				if (j == arr_2.length) {
					result.push(arr_1[i])
				}
			}
			return result
		}

	},

	/**
	 * 这个方法类似_.difference ，除了它接受一个 comparator
	 * @param  array (Array): 要检查的数组。
	 * @param  [values] (...Array): 排除的值。
	 * @param  [comparator] (Function): comparator 调用每个元素。
	 * @return (Array): 返回一个过滤值后的新数组。
	 */
	differenceWith: function(array, values, comp) {
		for (i = 0; i < array.length; i++) {
			for (j = 0; j < values.length; j++) {
				if (array[i][ite] == values[j][ite]) {
					break
				}
			}
			if (j == values.length) {
				result.push(array[i])
			}
		}
		return result
	},

	/**
	 * 创建一个 object 的自身可枚举属性名为数组。
	 * 参数
	 * object (Object): 要检索的对象。
	 * 返回
	 * (Array): 返回包含属性名的数组。
	 * function Foo() {this.a = 1;this.b = 2;}
	 * Foo.prototype.c = 3;
	 * keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 * keys('hi');
	 * // => ['0', '1']
	 * activate-power-mode
	 */
	keys: function(obj) {
		var result = []
		for (key in obj) {
			result.push(key)
		}
		return result
	},

	/**
	 * 使用 iteratee 遍历对象的自身和继承的可枚举属性。 iteratee 会传入3个参数：(value, key, object)。 如果返回 false，iteratee 会提前退出遍历。
	 * 参数
	 * object (Object): 要遍历的对象。
	 * [iteratee=_.identity] (Function): 每次迭代时调用的函数。
	 * 返回
	 * (Object): 返回 object。
	 * function Foo() {this.a = 1;this.b = 2;}
	 * Foo.prototype.c = 3;
	 * forIn(new Foo, function(value, key) {console.log(key);});
	 * // => Logs 'a', 'b', then 'c' (无法保证遍历的顺序)。
	 */
	forIn: function(obj, fn) {
		for (keys in obj) {
			if (obj[keys]) {
				fn(obj[keys], keys, obj)
			} else {
				break
			}
		}
		return obj
	},

	/**
	 * _.before的反向函数;此方法创建一个函数，当他被调用n或更多次之后将马上触发func 。
	 * @param  n (number): func 方法应该在调用多少次后才执行。
	 * @param  func (Function): 用来限定的函数。
	 * @return (Function): 返回新的限定函数。
	 */
	after: function(n, fun) {
		var count = 0
		return function(arg) {
			count++
			if (count >= n) {
				return fun(arg)
			}

		}
	},

	/**
	 * 创建一个调用func的函数，通过this绑定和创建函数的参数调用func，调用次数不超过 n 次。 之后再调用这个函数，将返回一次最后调用func的结果。
	 * @param  n (number): 超过多少次不再调用func
	 * @param  func (Function): 限制执行的函数。
	 * @return (Function): 返回新的限定函数。
	 */
	before: function(n, func) {
		var lastTime = 0
		var lastEnter
		return function() {
			debugger
			lastTime++
			if (lastTime <= n) {
				lastEnter = func.apply(null, arguments)
				return lastEnter
			} else {
				return lastEnter
			}
		}
	},

	arrayToLinkedList: function(arr) {
		var result = {
			next: null
		}
		for (i = arr.length - 1; i >= 0; i--) {
			var temp = result
			result = {
				value: arr[i]
			}
			result.next = temp
		}
		return {
			next: result
		}
	},

	parseJson: function(str) {
		var start = 1
		var end = 1
		var value
		var i = 0
		return parse()

		function parse() {
			var result = {}
			var key = ""
			if (str[i] == '{') {
				for (i++; str[i - 1] != '}' && i < str.length; i++) {
					if (str[i] === '"') {
						start = i
						end = str.slice(start + 1).indexOf('"')
						key = str.slice(start + 1, start + end + 1)
						i = start + end + 2
					}
					if (str[i] === ':') {
						while (str[i] !== '"' && str[i] !== 't' && str[i] !== 'f' && str[i] !== 'n' && str[i] !== '[' && str[i] !== ']' && str[i] !== '{' && str[i].search(/[0-9]/) == -1) {
							i++
						}
						switch (str[i]) {
							case '"':
								start = i
								end = str.slice(start + 1).indexOf('\"')
								value = str.slice(start + 1, start + end + 1)
								result[key] = value
								i = start + end + 1
								break;

							case 't':
								result[key] = true
								i += 4
								break;

							case 'f':
								result[key] = false
								i += 5
								break;

							case 'n':
								result[key] = null
								i += 4
								break;

							case '[':
								result[key] = parseArray()
								break;

							case '{':
								value = parse()
								result[key] = value
						}
						if (str[i].search(/[0-9]/) != -1) {
							start = i
							while (str[i].search(/[0-9]/) != -1) {
								i++
							}
							end = i
							i--
							value = +str.slice(start, end)
							result[key] = value
						}

					}
					if (str[i] == '}') {
						return result;
					}
				}

			} else {
				for (; str[i] != '}' && i < str.length; i++) {
					while (str[i] !== '"' && str[i] !== 't' && str[i] !== 'f' && str[i] !== 'n' && str[i] !== '[' && str[i] !== ']' && str[i] !== '{' && str[i].search(/[0-9]/) == -1) {
						i++
					}
					switch (str[i]) {
						case '"':
							start = i
							end = str.slice(start + 1).indexOf('\"')
							value = str.slice(start + 1, start + end + 1)
							result = value
							i = start + end + 1
							break;

						case 't':
							result = true
							i += 4
							break;

						case 'f':
							result = false
							i += 5
							break;

						case 'n':
							result = null
							i += 4
							break;

						case '[':
							return parseArray()
							break;

						case '{':
							return parse()
							break;
					}
					if (i < str.length) {
						if (str[i].search(/[0-9]/) != -1) {
							start = i
							end = str.length
							i--
							value = +str.slice(start, end)
							result = value
							break
						}
					}
				}
			}


			return result
		}

		function parseArray() {
			var arr = []
			for (i++; str[i] != ']'; i++) {
				switch (str[i]) {
					case '"':
						start = i
						end = str.slice(start + 1).indexOf('\"')
						value = str.slice(start + 1, start + end + 1)
						arr.push(value)
						i = start + end + 1
						break;

					case 't':
						arr.push(true)
						i += 4
						break;

					case 'f':
						arr.push(false)
						i += 5
						break;

					case 'n':
						arr.push(null)
						i += 4
						break;

					case '[':
						arr.push(parseArray())
						break

					case '{':
						arr.push(parse())
						break;
				}
				if (str[i].search(/[0-9]/) != -1) {
					start = i
					while (str[i].search(/[0-9]/) != -1) {
						i++
					}
					end = i
					i--
					arr.push(+str.slice(start, end))
				}
			}
			return arr

		}
	},

}