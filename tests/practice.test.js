import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { functions } from '../src/utils/testingPractice.js';

// Some practice
test('Adds 2 + 2 to equal 4', () => {
	expect(functions.add(2, 2)).toBe(4);
});
test('Adds 2 + 2 to NOT equal 4', () => {
	expect(functions.add(2, 2)).not.toBe(5);
});
test('Should be null', () => {
	expect(functions.isNull()).toBeNull();
});
test('Should be the same number', () => {
	expect(functions.checkValue(1)).toBe(1);
});

// toBe for numbers, toEqual for objects and arrays ==> Object and arrays are reference type, you can have two same looking objects but they are stored in different memory areas in the system and be considered different by the test if you use toBe, you need to use toEqual instead
test('User should be Brad Traversy object', () => {
	expect(functions.createUser()).toEqual({
		firstName: 'Brad',
		lastName: 'Traversy',
	});
});

// Additional
test('Should be under 1600', () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});
test('Admin should be in usernames', () => {
	const usernames = ['john', 'karen', 'admin'];
	expect(usernames).toContain('admin');
});

// Working with async data:
// Promise
test('Is Leanne Graham present is this api response', () => {
	expect.assertions(1);
	return functions.fetchUser().then(data => {
		expect(data[0].name).toEqual('Leanne Graham');
	});
});
// Async Await
test('Is Leanne Graham present is this api response', async () => {
	expect.assertions(1);
	const data = await functions.fetchUserAsync();
	expect(data[0].name).toEqual('Leanne Graham');
});
