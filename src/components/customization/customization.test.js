import React from 'react';
import Customization from './customization';
import {shallow} from 'enzyme';
import '../../setupTests';
import store from '../../store'

describe('Testing <Customization/>', () => {
  const custom = shallow(<Customization store={store}/>);

  it('Component has rendered correctly',() => {
    expect(custom).toMatchSnapshot();
  });

});
