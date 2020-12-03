import React from 'react';
import Customization,{ Customization as Cust} from './customization';
import renderer from 'react-test-renderer';
import store from '../../store';
import {shallow} from 'enzyme';

describe('Testing <Customization/>', () => {
  const initialState = {
    background: '#000000',
    fontColor: '#ffffff',
    fontSize: '44',
    bannerSizeX: '282',
    bannerSizeY: '376',
    imgURL: '',
    link: ''
  };
  const custom = renderer.create(<Customization store={store}/>).toJSON();

  it('Component has rendered correctly',() => {
    expect(custom).toMatchSnapshot();
  });

  const wrapper = shallow(<Cust settings={initialState}/>)

  it('checking default props of sizeX', () => {
    expect(wrapper.find('input[data-test="SizeX"]').prop('value')).toEqual('282');
  });
  it('checking default props of sizeY', () => {
    expect(wrapper.find('input[data-test="SizeY"]').prop('value')).toEqual('376');
  });
  it('checking default props of BGColor', () => {
    expect(wrapper.find('input[data-test="BGColor"]').prop('value')).toEqual('#000000');
  });
  it('checking default props of FontColor', () => {
    expect(wrapper.find('input[data-test="FontColor"]').prop('value')).toEqual('#ffffff');
  });
  it('checking default props of FontSize', () => {
    expect(wrapper.find('input[data-test="FontSize"]').prop('value')).toEqual('44');
  });
  it('checking default props of ImgLink', () => {
    expect(wrapper.find('input[data-test="ImgLink"]').prop('value')).toEqual('');
  });
  it('checking default props of SiteLink', () => {
    expect(wrapper.find('input[data-test="SiteLink"]').prop('value')).toEqual('');
  });
});
