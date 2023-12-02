function solution(fees, records) {
	var answer = [];
	for (var i in records) {
		records[i] = records[i].split(" ");
		records[i][0] = records[i][0].split(":");
	}
	records.sort((a, b) => {
		if (a[1] < b[1]) return -1;
		if (a[1] > b[1]) return 1;
		return 0;
	});
	for (var i = 0; i < records.length; i++) {
		var number = records[i][1];
		var sumTime = 0;
		var flag = 0;
		var j = i;
		while (j < records.length && records[j][1] === number) {
			if (j === records.length - 1 || records[j + 1][1] !== number) {
				sumTime += eval("23-" + records[j][0][0]) * 60;
				sumTime += eval("59-" + records[j][0][1]);
				if (flag) i++;
				break;
			} else {
				var h = eval(records[j + 1][0][0] + "-" + records[j][0][0]) * 60;
				var m = eval(records[j + 1][0][1] + "-" + records[j][0][1]);
				sumTime += h + m;
				j += 2;
				i = j - 1;
				flag = 1;
			}
		}
		answer.push(sumTime);
		sumTime = 0;
	}
	return answer.map(
		(e) =>
			fees[1] +
			(Math.ceil((e - fees[0]) / fees[2]) > 0
				? Math.ceil((e - fees[0]) / fees[2])
				: 0) *
				fees[3]
	);
}

console.log(
	solution(
		[180, 5000, 10, 600],
		["05:34 5961 IN", "06:00 0000 IN", "07:59 0148 IN"]
	)
);
