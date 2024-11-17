const { mean, median, mode } = require("./maths");
const express = require("express");
const ExpressError = require("./expressError");

const app = express();

app.use(["/mean", "/median", "/mode"], (req, res, next) => {
	const { nums } = req.query;
	if (!nums) throw new ExpressError("nums are required", 400);
	try {
		const arr = nums.split(",");
		const nonNum = arr.find((n) => {
			n = Number(n);
			return Number.isNaN(n);
		});
		console.log(nonNum);
		if (nonNum) throw new ExpressError(`${nonNum} is not a number`, 400);
	} catch (err) {
		return next(err);
	}
	next();
});

app.get("/mean", (req, res) => {
	const { nums } = req.query;
	let arr = nums.split(",").map(Number);
	const result = mean(arr);
	return res.json({ response: { operation: "mean", value: result } });
});

app.get("/median", (req, res) => {
	const { nums } = req.query;
	let arr = nums.split(",").map(Number);
	const result = median(arr);
	return res.json({ response: { operation: "median", value: result } });
});

app.get("/mode", (req, res) => {
	const { nums } = req.query;
	let arr = nums.split(",").map(Number);
	const result = mode(arr);
	return res.json({ response: { operation: "mode", value: result } });
});

app.use((req, res, next) => {
	const notFoundError = new ExpressError("Not Found", 404);
	return next(notFoundError);
});

app.use((error, req, res, next) => {
	let status = error.status || 500;
	let message = error.message;

	return res.status(status).json({ error: { message, status } });
});

app.listen(3000, function () {
	console.log("App on port 3000");
});
