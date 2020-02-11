import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {
  setup,
  findByTestAttr
} from './utilities/test-utilities/test-utilities';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('renders display of counter', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('count');
  expect(initialCounterState).toBe(0);
});

test('button click increments counter', () => {
  const count = 7;
  const wrapper = setup(null, { count: count });

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(count + 1);
});

test('decrement button click decrements counter', () => {
  const count = 7;
  const wrapper = setup(null, { count: count });

  // find button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(count - 1);
});

test('counter cannot go below 0', () => {
  const count = 0;
  const wrapper = setup(null, { count: count });

  // find button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  // find display and test value
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(0);
});

test('if decrement is clicked when count is 0, error is shown', () => {
  const count = 0;
  const wrapper = setup(null, { count: count });

  // find button and click
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');

  // find display and test value
  const errorDisplay = findByTestAttr(wrapper, 'error-display');
  expect(errorDisplay.length).toBe(1);
});

test('error cleared on increment', () => {
  const count = 0;
  const wrapper = setup(null, { count: count, error: true });

  // find button and click
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');

  // find display and test value
  const errorDisplay = findByTestAttr(wrapper, 'error-display');
  expect(errorDisplay.length).toBe(0);
});
