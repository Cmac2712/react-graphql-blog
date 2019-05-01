import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import { MemoryRouter } from 'react-router-dom';
import Cms from '../index';
import { mockUser, signedInMocks, signedOutMocks } from '../../../TestUtils';
import { ThemeProvider } from 'styled-components';
import theme from '../../App/Theme';

describe('<Cms/>', () => {
	xit('should match snapshot', () => {
		const wrapper = mount(
			<MemoryRouter
				initialEntries={[{ pathname: "/cms", key: "testKey" }]}
				initialIndex={1}
			>
				<MockedProvider
					mocks={signedInMocks}
				>
					<ThemeProvider theme={theme}>
						<Cms/>
					</ThemeProvider>
				</MockedProvider>
			</MemoryRouter>
		);

		expect(toJSON(wrapper)).toMatchSnapshot();
	});

	it('should render CreatePost component when signed in', async () => {
		const wrapper = mount(
			<MemoryRouter
				initialEntries={[{ pathname: "/cms", key: "testKey" }]}
				initialIndex={1}
			>
				<MockedProvider
					mocks={signedInMocks}
				>
					<ThemeProvider theme={theme}>
						<Cms/>
					</ThemeProvider>
				</MockedProvider>
			</MemoryRouter>
		);

		await wait(); 
		wrapper.update();

		const createPostForm = wrapper.find('#create-post-form').first();

		expect(createPostForm).toHaveLength(1)
	});
});
