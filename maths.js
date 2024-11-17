function mean(arr) {
	if (arr.length === 0) return 0;
	return arr.reduce((accum, nextItem) => accum + nextItem) / arr.length;
}

function median(arr) {
	const sorted = [...arr].sort((a, b) => a - b);
	const midIdx = Math.floor(sorted.length / 2);
	if (sorted.length % 2 === 0) {
		return (sorted[midIdx - 1] + sorted[midIdx]) / 2;
	}
	return sorted[midIdx];
}

function mode(arr) {
	const frequency = {};
	let maxFreq = 0;
	let modes = [];

	// Count the occurrences of each number
	for (let num of arr) {
		frequency[num] = (frequency[num] || 0) + 1;
		maxFreq = Math.max(maxFreq, frequency[num]);
	}

	// Find the number(s) with the maximum frequency
	for (let num in frequency) {
		if (frequency[num] === maxFreq) {
			modes.push(Number(num));
		}
	}

	return modes.length === 1 ? modes[0] : modes; // Return a single mode or all modes
}

module.exports = { mean, median, mode };
