

onmessage = function(e) {
	const t0 = performance.now();
	setTimeout(() => {
		const t1 = performance.now();
		postMessage(t1-t0);
	},0)
}