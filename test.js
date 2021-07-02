import test from 'ava';
import arvishTest from 'arvish-test';

test(async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js r');

	t.deepEqual(result, [
		{
			title: 82,
			subtitle: 'r'
		}
	]);
});