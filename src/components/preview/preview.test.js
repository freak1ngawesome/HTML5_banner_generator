import React from 'react';
import Preview from './preview';
import renderer from 'react-test-renderer';
import store from '../../store'

describe('Testing <Preview/>', () => {
  const preview = renderer.create(<Preview store={store}/>);

  it('Component has rendered correctly',() => {
    expect(preview.toJSON()).toMatchSnapshot();
  });

  it('Component has only one image',() => {
    expect(preview.root.findAllByProps({id: 'banner_img'}).length).toBe(1);
  });

  it('Component has only one text',() => {
    expect(preview.root.findAllByProps({id: 'banner_text'}).length).toBe(1);
  });

});
