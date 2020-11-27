import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';

describe('Testing <Header/>', () => {
  it('Component has rendered correctly',() => {
    const header = renderer.create(<Header/>).toJSON();
    expect(header).toMatchSnapshot();
  });
});
