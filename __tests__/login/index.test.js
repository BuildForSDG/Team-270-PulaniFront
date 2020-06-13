import React from 'react';
import { shallow } from 'enzyme';
import { PulaniLoginPage } from '../../src/login';

describe('<Login/> module', () => {
	const login = shallow(<PulaniLoginPage />);

	it('that it exists', () => {
		expect(login).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(login).toMatchSnapshot();
	});
});
