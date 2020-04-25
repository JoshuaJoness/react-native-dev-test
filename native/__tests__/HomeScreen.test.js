import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  jest.useFakeTimers();
  const tree = renderer.create(<HomeScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
