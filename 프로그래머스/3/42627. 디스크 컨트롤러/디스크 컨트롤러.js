class MinHeap {
	constructor() {
		this.heap = [null];
	}

	push(job) {
		this.heap.push(job);
		let currIdx = this.heap.length - 1;
		let parentIdx = ~~(currIdx / 2);

		if (this.heap.length === 2) return;
		while (currIdx > 1 && this.heap[parentIdx][1] > this.heap[currIdx][1]) {
			[this.heap[parentIdx], this.heap[currIdx]] = [
				this.heap[currIdx],
				this.heap[parentIdx],
			];
			currIdx = parentIdx;
			parentIdx = ~~(currIdx / 2);
		}
	}

	pop() {
		if (this.size() === 1) return this.heap.pop();
		else if (this.size() === 0) return;
		const target = this.heap[1];
		this.heap[1] = this.heap.pop();
		let currIdx = 1;
		while (currIdx * 2 <= this.heap.length - 1) {
			let left = currIdx * 2;
			let right = currIdx * 2 + 1;
			let smaller = left;

			if (this.heap[right] && this.heap[left][1] > this.heap[right][1])
				smaller = right;

			if (this.heap[currIdx][1] > this.heap[smaller][1]) {
				[this.heap[currIdx], this.heap[smaller]] = [
					this.heap[smaller],
					this.heap[currIdx],
				];
				currIdx = smaller;
			} else break;
		}
		return target;
	}

	size() {
		return this.heap.length - 1;
	}
}

function solution(jobs) {
	let answer = 0;
	const len = jobs.length;
	const heap = new MinHeap();
	jobs.sort((a, b) => a[0] - b[0]);

	let time = 0;
	let i = 0;

	while (i < len || heap.size()) {
		while (i < len && jobs[i][0] <= time) {
			heap.push(jobs[i]);
			i++;
		}

		if (heap.size()) {
			let [start, duration] = heap.pop();
			time += duration;
			answer += time - start;
		} else time = jobs[i][0];
	}

	return ~~(answer / len);
}
