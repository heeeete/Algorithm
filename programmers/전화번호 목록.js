function solution(phone_book) {
	let phoneMap = new Map();
	for (let phone of phone_book) {
		phoneMap.set(phone, true);
	}

	for (let phone of phone_book) {
		let temp = "";
		for (let i = 0; i < phone.length - 1; i++) {
			temp += phone[i];
			console.log(temp);
			if (phoneMap.has(temp)) {
				return false;
			}
		}
	}
	return true;
}

console.log(solution(["119", "97674223", "1195524421"]));
console.log(solution(["123", "456", "789"]));
console.log(solution(["12", "123", "1235", "567", "88"]));
console.log(solution(["11234542", "123", "123"]));
console.log(solution(["119", "1191"]));
