import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
require('jest-extended')

Enzyme.configure({ adapter: new Adapter() });

const config = {
  'jest': {
    'setupTestFrameworkScriptFile': 'jest-extended'
  }
};

export default config;