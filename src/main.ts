import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Kai Wolfram',
		website: 'https://www.kaiwolfram.com/',
		github: 'https://github.com/KaiWitt/uke-shift',
	}
});

export default app;