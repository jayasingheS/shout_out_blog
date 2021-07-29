import './App.css';
import {Route,Router,Switch} from 'react-router-dom';
import history from "./history";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Articles from "./pages/articles/Articles";
import { Provider } from "react-redux";
import {configureStore} from "./store";
import Post from "./pages/post/Post";
import Submit from "./pages/submit/Submit";
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
            <Route path='/Post/:id' exact={true}  component={Post}/>
            <Route path='/Submit' exact={true}  component={Submit}/>
          </Switch>
        </Router>
      </Provider>
  );
}

export default App;
