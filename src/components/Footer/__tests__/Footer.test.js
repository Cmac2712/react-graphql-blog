import React from 'react';
import { mount } from 'enzyme';
import wait from 'waait';
import toJSON from 'enzyme-to-json';
import Footer from '../index';

describe('<Footer/>', () => {

	it('should match snapshot', () => {
		const wrapper = mount(<Footer/>);

		expect(toJSON(wrapper)).toMatchSnapshot();
	});
	
	it('should say my name', () => {
		const wrapper = mount(<Footer/>);
		const myName = wrapper.find('.myname').text(); 

		expect(myName).toBe('Craig MacIntyre');
	});
	
	it('should say the correct year', () => {
		const wrapper = mount(<Footer/>);
		const yearInFooter = wrapper.find('.year').text(); 
		const currentYear = new Date().getFullYear().toString();

		expect(yearInFooter).toBe(currentYear);
	});

	it('should link to project on GitHub', () => {
		const wrapper = mount(<Footer/>);
		const projectGitHubUrl = 'https://github.com/Cmac2712/react-graphql-blog';
		const urlInFooter = wrapper.find('.github').prop('href');

		expect(urlInFooter).toBe(urlInFooter);
	});	
	
});
