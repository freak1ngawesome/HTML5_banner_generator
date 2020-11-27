// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import {configure} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
require('jest-extended')

configure({ adapter: new Adapter() });

const config = {
  'jest': {
    'setupTestFrameworkScriptFile': 'jest-extended'
  }
};

export default config;