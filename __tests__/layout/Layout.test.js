import React from 'react';
import { shallow } from 'enzyme';
import { PulaniLayout } from '../../src/layout/Layout';

describe('app module', () => {
	const wrapper = shallow(<PulaniLayout />);

	it('that it exists', () => {
		expect(wrapper).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
