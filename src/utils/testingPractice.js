import axios from 'axios';

export const functions = {
	add: (a, b) => a + b,
	isNull: () => null,
	checkValue: x => x,
	createUser: () => {
		const user = { firstName: 'Brad' };
		user['lastName'] = 'Traversy';
		return user;
	},
	fetchUser: () =>
		axios
			.get('https://jsonplaceholder.typicode.com/users')
			.then(res => res.data)
			.catch(err => console.log('error')),
  fetchUserAsync: async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const data = response.data;
      return data;
    } catch (e) {
      console.log('Error:', e)
    }
  }
};
