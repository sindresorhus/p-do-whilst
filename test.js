import test from 'ava';
import pDoWhilst from './index.js';

test('main', async t => {
	const result = [];
	let counter = 0;

	await pDoWhilst(() => {
		result.push(counter++);
	}, () => result.length < 7);

	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});

test('calling sequence is correct', async t => {
	const sequence = [];
	let counter = 0;

	await pDoWhilst(
		() => {
			sequence.push(`action${counter}`);
			counter++;
		},
		() => {
			sequence.push(`predicate${counter}`);
			return counter < 2;
		}
	);

	t.is(counter, 2);
	t.deepEqual(sequence, [
		'action0',
		'predicate1',
		'action1',
		'predicate2'
	]);
});

test('works with action returning a promise', async t => {
	const result = [];
	let counter = 0;

	await pDoWhilst(
		() => new Promise(resolve => {
			result.push(counter++);
			resolve();
		}),
		() => result.length < 7
	);

	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});

test('stops on error', async t => {
	const result = [];
	let counter = 0;

	const prom = pDoWhilst(
		() => new Promise(resolve => {
			if (counter === 7) {
				throw new Error('BAAD');
			}

			result.push(counter++);
			resolve();
		}),
		() => result.length < 10
	);

	await t.throwsAsync(prom, {message: 'BAAD'});
	t.is(counter, 7);
	t.deepEqual(result, [0, 1, 2, 3, 4, 5, 6]);
});
