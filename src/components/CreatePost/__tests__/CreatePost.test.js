import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { BrowserRouter } from 'react-router-dom';
import { CURRENT_USER_QUERY } from '../../User';
import CreatePost from '../index';
import { mockUser, signedInMocks, signedOutMocks } from '../../../TestUtils';

describe('<CreatePost/>', () => {
	it('should render an editor', async () => {
		const wrapper = mount(
			<BrowserRouter>
				<MockedProvider mocks={signedInMocks}>
					<CreatePost/>
				</MockedProvider>
			</BrowserRouter>
		);

		 await wait();
		 wrapper.update();

		const createPostForm = wrapper.find('#create-post-form'); 

		expect(createPostForm.exists()).toBe(true);
	});
});
