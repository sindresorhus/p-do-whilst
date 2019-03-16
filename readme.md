# p-do-whilst [![Build Status](https://travis-ci.org/sindresorhus/p-do-whilst.svg?branch=master)](https://travis-ci.org/sindresorhus/p-do-whilst)

> Calls a function repeatedly while a condition returns true and then resolves the promise

Think async version of the [`do…while` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while).


## Install

```
$ npm install p-do-whilst
```


## Usage

```js
const pDoWhilst = require('p-do-whilst');

let count = 0;

(async () => {
	await pDoWhilst(
		() => count++,
		() => count < 5
	);

	console.log(count);
	//=> 5
})();
```


## API

### pDoWhilst(action, condition)

Executes `action` repeatedly while `condition` returns `true` and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

#### action

Type: `Function`

Action to run for each iteration.

You can return a promise and it will be handled.

#### condition

Type: `Function`

Expected to return a boolean of whether to continue.


## Related

- [p-whilst](https://github.com/sindresorhus/p-whilst) - While a condition returns true, calls a function repeatedly, and then resolves the promise
- [p-forever](https://github.com/sindresorhus/p-forever) - Run promise-returning & async functions repeatedly until you end it
- [p-wait-for](https://github.com/sindresorhus/p-wait-for) - Wait for a condition to be true
- [More…](https://github.com/sindresorhus/promise-fun)


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
