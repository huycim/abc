import { combine } from '../../src/utils/combine';

test('Combines two strings with a space', () => {
	expect(combine('Hello', 'World')).toBe('Hello World');
});
