import './App.css';
import {Route,Router,Switch} from 'react-router-dom';
import history from "./history";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Articles from "./pages/articles/Articles";
import { Provider } from "react-redux";
import {configureStore} from "./store";

const store = configureStore();

function App() {
  return (
      <Provider store={store} >
        <Router history={history}>
          <Switch>
            <Route path = '/'       exact={true}  component = {Home}/>
            <Route path = '/About'  exact={true}  component={About}/>
            <Route path='/Contact'exact={true}  component={Contact}/>
            <Route path='/Articles' exact={true}  component={Articles}/>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
