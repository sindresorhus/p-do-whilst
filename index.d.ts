/**
Executes `action` repeatedly while `condition` returns `true` and then resolves to the result of the last call to `action`. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

@param action - Action to run for each iteration. You can return a promise and it will be handled.
@param condition - Expected to return a `boolean` or a `Promise<boolean>` of whether to continue.

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
	action: (value: ValueType) => ValueType | PromiseLike<ValueType>,
	condition: (value: ValueType) => boolean | PromiseLike<boolean>,
	initialValue?: ValueType,
): Promise<ValueType>;
