import React from 'react';
import App from '../../App';
import Enzyme, { shallow } from 'enzyme';

/**
 * Factory function to create a ShallowWrapper for the App compoenent
 * @function setup
 * @param {object} props
 * @param {object} state - initial state
 * @returns {ShallowWrapper}
 */
export const setup = (props = {}, state = null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Return ShallowWrapper containing nodes with the given data-test value
 * @param {ShallowWrapper} wrapper
 * @param {string} val
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
