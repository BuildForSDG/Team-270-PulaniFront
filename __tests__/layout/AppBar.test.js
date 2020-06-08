import React from 'react';
import { shallow } from 'enzyme';
import { PulaniAppBar } from '../../src/layout/AppBar';

describe('app module', () => {
	const appBar = shallow(<PulaniAppBar />);

	it('that it exists', () => {
		expect(appBar).toBeDefined();
	});

	it('that it renders without crashing', () => {
		expect(appBar).toMatchSnapshot();
	});
});
