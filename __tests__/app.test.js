import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/app';

describe('app module', () => {
	test('it exists', () => {
		expect(App).toBeDefined();
	});

	test('it renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<App />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
});
