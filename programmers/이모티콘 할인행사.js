function solution(users, emoticons) {
	var answer = [];
	let emoticonPlusUsers = 0;
	let totalMoney = 0;
	let arr = [];

	function dfs(discountRate) {
		if (discountRate.length === emoticons.length) {
			let totalM = 0;
			let emoticonPlus = 0;
			for (let i = 0; i < users.length; i++) {
				let temp = 0;
				for (let j = 0; j < emoticons.length; j++) {
					if (users[i][0] <= discountRate[j]) {
						temp += emoticons[j] * (1 - discountRate[j] / 100);
						if (temp >= users[i][1]) {
							emoticonPlus++;
							temp = 0;
							break;
						}
					}
				}
				totalM += temp;
			}

			if (emoticonPlusUsers < emoticonPlus) {
				emoticonPlusUsers = emoticonPlus;
				totalMoney = totalM;
			} else if (emoticonPlusUsers === emoticonPlus && totalMoney < totalM)
				totalMoney = totalM;
			return;
		}

		for (let i = 0; i < 4; i++) {
			dfs([...discountRate, (i + 1) * 10]);
		}
	}

	dfs(arr);
	return [emoticonPlusUsers, totalMoney];
}

solution(
	[
		[40, 10000],
		[25, 10000],
	],
	[7000, 9000]
);
