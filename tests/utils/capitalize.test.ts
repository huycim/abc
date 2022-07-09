import { capitalize } from '../../src/utils/capitalize';

test('Capitalizes input string', () => {
	expect(capitalize('test')).toBe('Test');
	expect(capitalize('Test')).toBe('Test');
	expect(capitalize('TEST')).toBe('TEST');
});
