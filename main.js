
// function main(n) {
// 	let sum = 0;
// 	const myWorker = new Worker("worker.js");
// 	let counter = 0;

// 	for(let i = 0; i < n; i ++) {
// 		myWorker.postMessage(i);
// 	}

// 	myWorker.onmessage = function(e) {
// 		sum = sum + e.data;
// 		counter++;
// 		if (counter === n) {
// 			console.log(sum / n);
// 		}
// 	}
// }

// main(100);

// function main(n, counter = 0, sum = 0) {
// 	function testRunner() {
// 		window.requestAnimationFrame(() => {console.log('rerender')})
// 		let t0 = performance.now();
// 		setTimeout(() => {
// 			let t1 = performance.now();
// 			if (counter === n) {
// 				console.log(`${counter}: ${sum/counter}`);
// 				return;
// 			}
// 			sum += (t1-t0);
// 			counter++
// 			testRunner();
// 		}, 0)
// 	};
// 	testRunner();
// }

// main(10);
// main(1000);


function main(n, counter = 0, sum = 0) {
	let myInterval;
	function myTester(n) {
		let t0 = performance.now();
		setTimeout(() => {
			let t1 = performance.now();
			sum +=(t1-t0);
			counter++;
			if(counter === n) {
				console.log(`${n}: ${sum / n}`);
				clearInterval(myInterval);
			}
		})
	}
	myInterval = setInterval(myTester, 50, n);
}

main(10);
main(1000);


