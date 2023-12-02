function solution(maps) {
	var answer = [];
	var queue = [];
	var dx = [-1, 1, 0, 0];
	var dy = [0, 0, -1, 1];
	maps = maps.map((element, y) =>
		element.split("").map((e, x) => {
			if (e === "X") return "X";
			else {
				return Number(e);
			}
		})
	);
	var len = maps.length;
	var sum = 0;
	for (var i = 0; i < len; i++) {
		for (var j = 0; j < maps[i].length; j++) {
			var sum = 0;
			if (maps[i][j] !== "X") {
				console.log("새로시작");
				sum += maps[i][j];
				maps[i][j] = "X";
				queue.push([i, j]);
				while (queue.length) {
					var qLen = queue.length;
					console.log(queue);
					for (var q = 0; q < qLen; q++) {
						var start = queue.shift();
						console.log(start);
						console.log(maps);
						for (var a = 0; a < 4; a++) {
							var [y, x] = start;
							if (
								y + dy[a] >= 0 &&
								x + dx[a] >= 0 &&
								y + dy[a] < maps.length &&
								x + dx[a] < maps[0].length &&
								maps[y + dy[a]][x + dx[a]] !== "X"
							) {
								y += dy[a];
								x += dx[a];
								sum += maps[y][x];
								maps[y][x] = "X";
								queue.push([y, x]);
							}
						}
					}
				}
				answer.push(sum);
			}
		}
	}
	console.log(maps);
	return answer;
}

console.log(solution(["X5911", "X1X5X", "X231X", "1XXX1"]));
