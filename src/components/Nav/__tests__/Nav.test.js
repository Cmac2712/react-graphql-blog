import React from 'react';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { MockedProvider } from 'react-apollo/test-utils';
import wait from 'waait';
import { BrowserRouter } from 'react-router-dom';
import { CURRENT_USER_QUERY } from '../../User';
import Nav  from '../index';
import { mockUser, signedInMocks, signedOutMocks } from '../../../TestUtils';
import { ThemeProvider } from 'styled-components';
import theme from '../../App/Theme';

describe('<Nav/>', () => {
	it('matches snapshot (logged out)', async () => {
		const wrapper = mount(
			<BrowserRouter>
				<MockedProvider mocks={signedOutMocks}>
					<ThemeProvider theme={theme}>
						<Nav/>
					</ThemeProvider>
				</MockedProvider>
			</BrowserRouter>
		);
		 await wait();
		 wrapper.update();
		
		expect(toJSON(wrapper.find('[data-test]'))).toMatchSnapshot();
	});

	it('matches snapshot (logged in)', async () => {
		const wrapper = mount(
			<BrowserRouter>
				<MockedProvider mocks={signedOutMocks}>
					<ThemeProvider theme={theme}>
						<Nav/>
					</ThemeProvider>
				</MockedProvider>
			</BrowserRouter>
		);
		 await wait();
		 wrapper.update();
		
		expect(toJSON(wrapper.find('[data-test]'))).toMatchSnapshot();
	});

	it('should say "Log In / Create an Account" when logged out', async () => {
		const wrapper = mount(
			<BrowserRouter>
				<MockedProvider mocks={signedOutMocks}>
					<ThemeProvider theme={theme}>
						<Nav/>
					</ThemeProvider>
				</MockedProvider>
			</BrowserRouter>
		);

		await wait();
		wrapper.update();
		const SignUpLink = wrapper.find('[href="/cms/create-post"]'); 

		expect(SignUpLink.text()).toBe("Log In / Create an Account");	
	});

	it('should say "Dashboard" when logged in', async () => {
		const wrapper = mount(
			<BrowserRouter>
				<MockedProvider mocks={signedInMocks}>
					<ThemeProvider theme={theme}>
						<Nav/>
					</ThemeProvider>
				</MockedProvider>
			</BrowserRouter>
		);

		await wait();
		wrapper.update();
		const SignUpLink = wrapper.find('[href="/cms/create-post"]'); 

		expect(SignUpLink.text()).toBe("Dashboard");	
	});
});
