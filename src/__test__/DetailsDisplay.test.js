import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../Redux/configureStore';
import DetailsDisplay from '../components/DetailsDisplay';

describe('Render components', () => {
  test('render Details page', () => {
    const tree = renderer
      .create(<Router><Provider store={store}><DetailsDisplay /></Provider></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
