import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { BrowserRouter } from 'react-router-dom';
import Cms from '../index';
import { mockUser, signedInMocks } from '../../../TestUtils';

describe('<Cms/>', () => {
	it('should match snapshot', () => {
		console.log('TODO');
	});

	it('should forward to CreatePost page after login', async () => {
		const wrapper = mount(
			<BrowserRouter>
			<MockedProvider
				mocks={signedInMocks}
			>
				<Cms/>
				</MockedProvider>
			</BrowserRouter>
		);

		await wait(5000); // Logging us in
		wrapper.update();

		console.log(wrapper.html());
	});
});
