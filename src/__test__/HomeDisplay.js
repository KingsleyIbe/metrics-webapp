import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import HomeDisplay from '../Components/HomeDisplay';

describe('Render components', () => {
  test('render Home page', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><HomeDisplay /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
