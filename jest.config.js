/** @type {import('ts-jest').JestConfigWithTsJest} */
module.export = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
        'default', 'github-actions', "jest-junit"
    ]
};