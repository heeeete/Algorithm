function solution(n, t, m, timetable) {
	var answer = "";
	let curr = 540;
	let last = -1;
	timetable = timetable.map((e) => {
		const [h, m] = e.split(":");
		return h * 60 + Number(m);
	});
	timetable.sort((a, b) => b - a);

	for (let i = 0; i < n; i++) {
		let ii = 0;
		for (; ii < m; ii++) {
			if (timetable[timetable.length - 1] <= curr) last = timetable.pop() - 1;
			else break;
		}
		if (i === n - 1 && ii !== m)
			return `${String(Math.floor(curr / 60)).padStart(2, 0)}:${String(
				curr % 60
			).padStart(2, 0)}`;
		curr += t;
	}

	curr -= t;
	const hour = String(Math.floor(last / 60)).padStart(2, 0);
	const minute = String(last % 60).padStart(2, 0);
	return `${hour}:${minute}`;
}