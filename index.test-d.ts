import {expectType} from 'tsd';
import pDoWhilst from './index.js';

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
