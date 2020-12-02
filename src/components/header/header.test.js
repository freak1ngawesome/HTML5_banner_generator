import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Testing <Header/>', () => {
  it('Component has rendered correctly',() => {
    const header = renderer.create(<Header/>).toJSON();
    expect(header).toMatchSnapshot();
  });
  it('header text testing',() => {
    const wrapper = shallow(<Header/>);
    const text = wrapper.find('h1').text();
    expect(text).toBe('Create your awesome banner');
  });
});
