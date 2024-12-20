const { mean, median, mode } = require("./maths");

describe("#findMedian", function () {
	it("finds the median of an even set", function () {
		expect(median([1, -1, 4, 2])).toEqual(1.5);
	});
	it("finds the median of an odd set", function () {
		expect(median([1, -1, 4])).toEqual(1);
	});
});

describe("#findMean", function () {
	it("finds the mean of an empty array", function () {
		expect(mean([])).toEqual(0);
	});
	it("finds the mean of an array of numbers", function () {
		expect(mean([1, -1, 4, 2])).toEqual(1.5);
	});
});

describe("#findMode", function () {
	it("finds the mode", function () {
		expect(mode([1, 1, 1, 2, 2, 3])).toEqual(1);
	});
});
