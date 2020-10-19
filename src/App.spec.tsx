import { shallow } from 'enzyme';
import React from 'react';
import Routes from 'routes';
import GlobalStyles from 'styles/GlobalStyles';
import App from './App';

const wrapper = shallow(<App />);

describe('App component', () => {
  test('should render GlobalStyles and Routes', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('should match component GlobalStyles', () => {
    expect(wrapper.find(<GlobalStyles />)).toMatchSnapshot();
  });
  test('should match component Routes', () => {
    expect(wrapper.find(<Routes />)).toMatchSnapshot();
  });
});
