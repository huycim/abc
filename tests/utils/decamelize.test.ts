import { decamelize } from '../../src/utils/decamelize';

test('Converts camelcase to underscores', () => {
	expect(decamelize('camelCase')).toBe('camel_case');
});
