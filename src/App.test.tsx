import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../src/store';
import App from '../src/App';

describe('Initial app testing', () => {
  
  test('renders movies tmdb page and have scroll button', () => {
    const { getByText, getAllByText, getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(getByText(/(TMDB)/i)).toBeInTheDocument();
    expect(getByRole('scroll')).toBeInTheDocument();
  });

  test('routes belong to my app', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    const routesComponent = getByRole('routes');
    //console.log(routesComponent);
    expect(routesComponent).toBeInTheDocument();
  });

})
