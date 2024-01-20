class maxHeap {
	constructor() {
		this.heap = [];
	}
	push(n) {
		this.heap.push(n);
		let currIdx = this.heap.length - 1;
		while (
			currIdx > 0 &&
			this.heap[currIdx] > this.heap[~~((currIdx + 1) / 2 - 1)]
		) {
			[this.heap[currIdx], this.heap[~~((currIdx + 1) / 2 - 1)]] = [
				this.heap[~~((currIdx + 1) / 2 - 1)],
				this.heap[currIdx],
			];
			currIdx = ~~((currIdx + 1) / 2 - 1);
		}
	}
	pop() {
		if (this.heap.length === 0) return;
		else if (this.heap.length === 1) return this.heap.pop();
		let returnV = this.heap[0];
		this.heap[0] = this.heap.pop();
		let currIdx = 0;
		while (
			currIdx * 2 < this.heap.length - 1 &&
			(this.heap[currIdx] < this.heap[currIdx * 2 + 1] ||
				this.heap[currIdx] < this.heap[currIdx * 2 + 2])
		) {
			if ((currIdx + 1) * 2 < this.heap.length) {
				if (this.heap[currIdx * 2 + 2] < this.heap[currIdx * 2 + 1]) {
					[this.heap[currIdx], this.heap[currIdx * 2 + 1]] = [
						this.heap[currIdx * 2 + 1],
						this.heap[currIdx],
					];
					currIdx = currIdx * 2 + 1;
				} else {
					[this.heap[currIdx], this.heap[currIdx * 2 + 2]] = [
						this.heap[currIdx * 2 + 2],
						this.heap[currIdx],
					];
					currIdx = currIdx * 2 + 2;
				}
			} else {
				[this.heap[currIdx], this.heap[currIdx * 2 + 1]] = [
					this.heap[currIdx * 2 + 1],
					this.heap[currIdx],
				];
				currIdx = currIdx * 2 + 1;
			}
		}
		return returnV;
	}
	size() {
		return this.heap.length;
	}
	print() {
		console.log(this.heap);
	}
}

function solution(n, k, enemy) {
	var answer = 0;
	let heap = new maxHeap();

	for (let e of enemy) {
		n -= e;
		if (n < 0 && k) {
			n += e;
			if (heap.size()) {
				let tempN = heap.pop();
				k--;
				if (tempN < e) {
					heap.push(tempN);
				} else {
					n = n + tempN - e;
					heap.push(e);
				}
			} else {
				k--;
			}
		} else if (n < 0 && !k) return answer;
		else {
			heap.push(e);
		}
		answer++;
	}

	return answer;
}

console.log(solution(7, 3, [4, 2, 4, 5, 3, 3, 1]));
console.log(solution(2, 4, [3, 3, 3, 3]));
console.log(solution(1, 2, [3, 3, 3, 3]));
