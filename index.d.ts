/**
Executes `action` repeatedly while `condition` returns `true` and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

@param action - Action to run for each iteration. You can return a promise and it will be handled.
@param condition - Expected to return a boolean of whether to continue.

@example
```
import pDoWhilst from 'p-do-whilst';

let count = 0;

await pDoWhilst(
	() => count++,
	() => count < 5
);

console.log(count);
//=> 5
```
*/
export default function pDoWhilst<ValueType>(
	action: () => ValueType | PromiseLike<ValueType>,
	condition: (value: ValueType) => boolean
): Promise<void>;
