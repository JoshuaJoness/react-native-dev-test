import React from 'react';
import PostScreen from '../src/screens/PostScreen';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  jest.useFakeTimers();
  const tree = renderer.create(<PostScreen navigation={{ getParam: jest.fn() }} />).toJSON();
  expect(tree).toMatchSnapshot();
});
