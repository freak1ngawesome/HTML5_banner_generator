import React from 'react';
import Export from './export';
import renderer from 'react-test-renderer';
import store from '../../store';

describe('Testing <Export/>', () => {
  const exp = renderer.create(<Export store={store}/>).toJSON();

  it('Component has rendered correctly',() => {
    expect(exp).toMatchSnapshot();
  });
});
