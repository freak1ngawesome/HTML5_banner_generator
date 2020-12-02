import React from 'react';
import Export from './export';
import renderer from 'react-test-renderer';
import store from '../../store';
import { shallow } from 'enzyme';

describe('Testing <Export/>', () => {
  const exp = renderer.create(<Export store={store}/>);

  it('Component has rendered correctly',() => {
    expect(exp.toJSON()).toMatchSnapshot();
  });


});
