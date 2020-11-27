import React from 'react';
import Export from './export';
import {shallow} from 'enzyme';
import '../../setupTests';
import store from '../../store'

describe('Testing <Export/>', () => {
  it('Component has rendered correctly',() => {
    const export_comp = shallow(<Export store={store}/>);
    expect(export_comp).toMatchSnapshot();
  });
});
