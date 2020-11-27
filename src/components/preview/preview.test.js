import React from 'react';
import Preview from './preview';
import {shallow} from 'enzyme';
import '../../setupTests';
import store from '../../store'

describe('Testing <Preview/>', () => {
  const preview = shallow(<Preview store={store}/>);

  it('Component has rendered correctly',() => {
    expect(preview).toMatchSnapshot();
  });
});
