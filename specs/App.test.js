import { configure, mount } from 'enzyme';
import React from 'react';
import axios from 'axios';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/components/App.jsx';

configure({ adapter: new Adapter() });

it('Header should exists', () => {
  const wrapper = mount(<App />);
  expect(wrapper.find('h1').text()).toEqual('More places to stay');
});