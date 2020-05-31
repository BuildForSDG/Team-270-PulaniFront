import React from 'react';
import { shallow } from 'enzyme';
import PulaniLoginPage from '../../src/login';

describe('app module', () => {
	const wrapper = shallow(<PulaniLoginPage />);

	it('that it exists', () => {
		expect(wrapper).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
