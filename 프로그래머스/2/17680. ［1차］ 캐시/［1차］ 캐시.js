class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor(cacheSize) {
		this.head = null;
		this.tail = null;
		this.cacheSize = 0;
		this.cacheMaximumSize = cacheSize;
		this.executeTime = 0;
	}

	pushFront(val) {
		val = val.toLowerCase();
		const newNode = new Node(val);
		if (this.search(val)) {
			this.executeTime++;
		} else this.executeTime += 5;

		if (this.cacheSize >= this.cacheMaximumSize) this.deleteBack();

		if (!this.cacheSize) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			newNode.next = this.head;
			this.head.prev = newNode;
			this.head = newNode;
		}
		this.cacheSize++;
		return this;
	}

	deleteBack() {
		if (!this.cacheSize) return;
		else if (this.cacheSize === 1) {
			this.tail = null;
			this.head = null;
			this.cacheSize = 0;
		} else {
			this.tail = this.tail.prev;
			this.tail.next = null;
			this.cacheSize--;
		}
	}

	search(val) {
		let node = this.head;

		while (node) {
			if (node.data === val) {
				if (this.cacheSize !== 1 && this.head === node) {
					this.head = node.next;
					this.head.prev = null;
				} else if (this.cacheSize !== 1 && this.tail === node) {
					this.tail = node.prev;
					this.tail.next = null;
				} else if (this.cacheSize !== 1) {
					node.prev.next = node.next;
					node.next.prev = node.prev;
				}
				this.cacheSize--;
				return true;
			}
			node = node.next;
		}
		return false;
	}

	print() {
		let node = this.head;
		console.log("PRINT = \n");
		while (node) {
			console.log(node.data);
			node = node.next;
		}
	}
}

function solution(cacheSize, cities) {
	if (cacheSize === 0) return cities.length * 5;
	const linkedList = new LinkedList(cacheSize);
	for (let city of cities) {
		linkedList.pushFront(city);
	}

	return linkedList.executeTime;
}