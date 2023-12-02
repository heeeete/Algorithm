function solution(book_time) {
	var rooms = [];
	book_time.forEach((e, idx) => {
		e[1] = e[1].split(":");
		e[1][1] = Number(e[1][1]) + 10;
		if (e[1][1] >= 60) {
			++e[1][0];
			// if (e[1][0] >= "24") e[1][0] = "00";
			e[1][1] -= 60;
			e[1][0] = e[1][0].toString().padStart(2, "0");
			e[1][1] = e[1][1].toString().padStart(2, "0");
		}
		e[1] = e[1].join(":");
	});
	book_time.sort();
	// console.log(book_time);

	rooms.push(book_time[0][1]);
	for (var i = 1; i < book_time.length; i++) {
		var flag = 0;
		for (var j = 0; j < rooms.length; j++) {
			if (book_time[i][0] >= rooms[j]) {
				flag = 1;
				rooms[j] = book_time[i][1];
				break;
			}
		}
		if (flag === 0) rooms.push(book_time[i][1]);
	}
	// console.log(rooms);
	return rooms.length;
}

console.log(
	solution([
		["15:00", "17:00"],
		["16:40", "18:20"],
		["14:20", "15:20"],
		["14:10", "19:59"],
		["18:20", "21:20"],
		["00:00", "02:55"],
		["03:00", "04:10"],
		["23:00", "23:59"],
	])
);
console.log(
	solution([
		["09:10", "10:10"],
		["09:10", "10:10"],
		["10:20", "12:20"],
		["10:20", "12:20"],
	])
);
