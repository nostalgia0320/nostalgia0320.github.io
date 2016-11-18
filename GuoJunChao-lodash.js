/*
 *
 */

// debugger;

var GuoJunChao = {
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

	compact: function(array) {

		var result = []

		for (i = 0; i < array.length; i++) {

			if (array[i]) {

				result.push(array[i])

			}

		}

		return result
	},

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


	fromPairs: function(arr) {
		var result = {}
		for (i = 0; i < arr.length; i++) {
			result[arr[i][0]] = arr[i][1]
		}
		return result
	},

	initial: function(arr) {
		arr.pop()
		return arr
	},

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

	pull: function(arr, value) {
		var tem = []
		for (i = 1; i < arguments.length; i++) {
			tem.push(arguments[i])
		}
		var x = GuoJunChao.difference(arr, tem)
		return x
	},

	pullAll: function(arr, value) {
		var x = GuoJunChao.difference(arr, value)
		return x
	},

	pullAt: function(arr, index) {
		var tem = []
		for (i = 0; i < index.length; i++) {
			tem.push(arr[index[i] - 1])
		}
		return GuoJunChao.difference(arr, tem)
	},

	reverse: function(arr) {
		return arr.reverse()
	},

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

	tail: function(arr) {
		var result = []
		for (i = 1; i < arr.length; i++) {
			result.push(arr[i])
		}
		return result
	},

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

	takeRight: function(arr, n) {
		var arr_1 = arr.reverse()
		return GuoJunChao.take(arr_1, n).reverse()

	},

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

	uniq: function(arr) {
		var result = []

		for (i = 0; i < arr.length; i++) {
			if (result.indexOf(arr[i]) == -1) {
				result.push(arr[i])
			}

		}
		return result
	},

	// unzip: function() {
	// 	var result = []
	// 	for (i = 0, j = 0; i < arguments[i].length; i++) {
	// 		result[i] = []
	// 		for (j = 0; j < arguments.length; j++) {
	// 			result[i][j] = arguments[j][i]
	// 		}
	// 	}
	// 	return result
	// },

	zip: function() {
		var result = []
		for (i = 0, j = 0; i < arguments[i].length; i++) {
			result[i] = []
			for (j = 0; j < arguments.length; j++) {
				result[i][j] = arguments[j][i]
			}
		}
		return result
	},

	without: function(arr, value) {
		var tem = []
		var tem_1 = []
		for (i = 1; i < arguments.length; i++) {
			tem.push(arguments[i])
		}
		return GuoJunChao.difference(arr, tem)
	},

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

	head: function(arr) {
		return arr[0]
	},

	every: function(coll, ite) {
		for (i = 0; i < coll.length; i++) {
			if (!ite(coll[i])) {
				return false
			}
		}
		return true
	},

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

	join: function(arr, sep) {
		return arr.join(sep)
	},

	last: function(arr) {
		return arr[arr.length - 1]
	},

	lastIndexOf: function(arr, value, fromIndex) {
		return arr.length - 1 - GuoJunChao.indexOf(arr.reverse(), value, fromIndex)
	},

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
		if (value < arr[0]) {
			return 0
		}
		if (value > arr[arr.length - 1]) {
			return arr.length
		}
	}

}