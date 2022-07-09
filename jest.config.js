module.exports = {
	preset: 'ts-jest',
	verbose: true,
	collectCoverageFrom: ['src/**/*.ts'],
	testPathIgnorePatterns: ['dist'],
	testMatch: ['<rootDir>/tests/**/*.test.ts'],
};
