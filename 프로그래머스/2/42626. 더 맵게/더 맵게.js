class MinHeap {
	constructor() {
		this.heap = [null];
	}

	push(n) {
		this.heap.push(n);

		let currIdx = this.len();
		if (currIdx === 1) return;
		let parentIdx = ~~(currIdx / 2);

		while (parentIdx > 0 && this.heap[currIdx] < this.heap[parentIdx]) {
			this.swap(currIdx, parentIdx);
			currIdx = parentIdx;
			parentIdx = ~~(currIdx / 2);
		}
	}

	pop() {
		if (this.len() === 0) return;
		else if (this.len() === 1) return this.heap.pop();

		let target = this.heap[1];
		this.heap[1] = this.heap.pop();
		let currIdx = 1;

		while (this.heap[currIdx * 2]) {
			let left = currIdx * 2;
			let right = left + 1;
			let minIdx = this.heap[right]
				? this.heap[left] > this.heap[right]
					? right
					: left
				: left;
			if (this.heap[currIdx] > this.heap[minIdx]) {
				this.swap(currIdx, minIdx);
				currIdx = minIdx;
			} else break;
		}

		return target;
	}

	swap(a, b) {
		[this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
	}

	len() {
		return this.heap.length - 1;
	}
}

function solution(scoville, K) {
	var answer = 0;
	const heap = new MinHeap();
	for (let s of scoville) heap.push(s);
	while (heap.len() !== 1) {
		const f = heap.pop();
		const s = heap.pop();
		if (f >= K) return answer;
		const newScovile = f + s * 2;
		heap.push(newScovile);
		answer++;
	}
	return heap.pop() >= K ? answer : -1;
}