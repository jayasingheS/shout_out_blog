import { render, screen } from '@testing-library/react';
import App from './App';
import {Route,Router,Switch} from 'react-router-dom';
import history from "./history";
test('landing on a bad page', () => {
  history.push('/some/bad/route')
  render(
      <Router history={history}>
        <App />
      </Router>,
  )
})
