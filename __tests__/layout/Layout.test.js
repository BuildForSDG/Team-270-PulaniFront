import React from 'react';
import { shallow } from 'enzyme';
import { PulaniLayout } from '../../src/layout/Layout';

describe('<Layout/> module', () => {
	const layout = shallow(<PulaniLayout />);

	it('that it exists', () => {
		expect(layout).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(layout).toMatchSnapshot();
	});
});
