import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../src/dashboard';

describe('<Dashboard/> module', () => {
	const dashboard = shallow(<Dashboard />);

	it('that it exists', () => {
		expect(dashboard).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(dashboard).toMatchSnapshot();
	});
});
