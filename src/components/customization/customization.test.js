import React from 'react';
import Customization from './customization';
import renderer from 'react-test-renderer';
import store from '../../store';

describe('Testing <Customization/>', () => {
  const custom = renderer.create(<Customization store={store}/>).toJSON();

  it('Component has rendered correctly',() => {
    expect(custom).toMatchSnapshot();
  });
});
