function solution(clothes) {
	var answer = 1;
	var map = new Map();
	for (var clothe of clothes) {
		if (!map.has(clothe[1])) map.set(clothe[1], []);
		var temp = map.get(clothe[1]);
		map.set(clothe[1], [...temp, clothe[0]]);
	}

	var curr = 0;
	var arr = [2, 1, 1];

	for (var i = 0; i < arr.length; i++) {
		answer = answer * (arr[i] + 1);
	}
	return answer - 1;
}

console.log(
	solution([
		["a", "A"],
		["asd", "A"],
		["b", "B"],
		["c", "C"],
	])
);
// 1 1
// 1
// 1
2;
1;
1;
