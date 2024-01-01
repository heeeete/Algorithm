class MinHeap {
	constructor() {
		this.heap = [];
	}

	print() {
		console.log(this.heap);
	}

	pop() {
		if (this.heap.length === 0) return;
		if (this.heap.length === 1) return this.heap.pop();
		const minValue = this.heap[0];
		this.heap[0] = this.heap.pop();
		let currIdx = 0;

		while (currIdx * 2 + 1 < this.heap.length) {
			let leftIdx = currIdx * 2 + 1;
			let rightIdx = currIdx * 2 + 2;
			let smallerIdx = leftIdx;

			if (this.heap[rightIdx] < this.heap[leftIdx]) {
				smallerIdx = rightIdx;
			}

			if (this.heap[currIdx] <= this.heap[smallerIdx]) {
				break;
			}

			[this.heap[currIdx], this.heap[smallerIdx]] = [
				this.heap[smallerIdx],
				this.heap[currIdx],
			];
			currIdx = smallerIdx;
		}

		return minValue;
	}

	push(v) {
		this.heap.push(v);
		let currIdx = this.heap.length - 1;

		while (
			currIdx > 0 &&
			// 자기 자신의 부모 노드를 찾아서 비교 해서 부모가 더 크면 자식이랑 스왑
			// 자기 부모 찾기는 (자신IDX / 2) 하지만 우리는 0부터 시작함으로 ((자신 - 1) / 2)
			this.heap[currIdx] < this.heap[Math.floor((currIdx - 1) / 2)]
		) {
			[this.heap[currIdx], this.heap[Math.floor((currIdx - 1) / 2)]] = [
				this.heap[Math.floor((currIdx - 1) / 2)],
				this.heap[currIdx],
			];
			currIdx = Math.floor((currIdx - 1) / 2);
		}
	}

	check(K) {
		if (this.heap[0] >= K) return true;
		else return false;
	}

	size() {
		return this.heap.length;
	}
}

function solution(scoville, K) {
	var answer = 0;
	let heap = new MinHeap();
	for (let sco of scoville) {
		heap.push(sco);
	}
	if (heap.check(K)) return 0;
	while (heap.size() !== 1) {
		let f = heap.pop();
		let s = heap.pop();
		heap.push(s * 2 + f);
		answer++;
		if (heap.check(K)) return answer;
	}
	return -1;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7));
console.log(solution([10, 3, 3, 3, 25, 31, 592, 302, 301, 29, 2, 19], 2));
