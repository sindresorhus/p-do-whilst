import {expectType} from 'tsd-check';
import pDoWhilst from '.';

let count = 0;

expectType<Promise<void>>(
	pDoWhilst(
		() => count++,
		currentCount => {
			expectType<number>(currentCount);
			return currentCount < 5;
		}
	)
);
