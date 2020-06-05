import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/app';

describe('app module', () => {
	const app = shallow(<App />);

	it('that it exists', () => {
		expect(app).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(app).toMatchSnapshot();
	});
});
