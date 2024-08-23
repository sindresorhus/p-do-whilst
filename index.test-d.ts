import {expectType} from 'tsd';
import pDoWhilst from './index.js';

let count = 0;

expectType<Promise<number>>(
	pDoWhilst(
		() => count++,
		currentCount => {
			expectType<number>(currentCount);
			return (currentCount) < 5;
		}
	)
);
