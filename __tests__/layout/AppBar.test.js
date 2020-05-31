import React from 'react';
import { shallow } from 'enzyme';
import { PulaniAppBar } from '../../src/layout/AppBar';

describe('app module', () => {
	const wrapper = shallow(<PulaniAppBar />);

	it('that it exists', () => {
		expect(wrapper).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
