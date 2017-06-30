'use strict';

const wrap = fn => new Promise(resolve => {
	resolve(fn());
});

module.exports = (action, condition) => wrap(function loop() {
	return wrap(action).then(result => {
		if (condition(result)) {
			return loop();
		}
	});
});
