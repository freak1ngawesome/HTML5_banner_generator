import React from 'react';
import Preview from './preview';
import renderer from 'react-test-renderer';
import store from '../../store'

describe('Testing <Preview/>', () => {
  const preview = renderer.create(<Preview store={store}/>).toJSON();

  it('Component has rendered correctly',() => {
    expect(preview).toMatchSnapshot();
  });
});
