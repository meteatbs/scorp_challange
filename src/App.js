
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store"
import Provider from "react-redux/es/components/Provider"
import AppContext from "./AppContext"
import Login from './components/Login/Login'
import Header from './components/Header/Header';
import { withNamespaces  } from 'react-i18next';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';

function App() {
  return (
    <AppContext.Provider >
      <Provider store={store}>
    <Router>
    <Header/>
      <Switch>
      <Route path="/contactpage" component={Contact}>
       {/* <Contact/> */}
       </Route>
       <Route path="/"  >
       <Home/>
       </Route>
       
      </Switch>
      
      <Footer/>
    </Router>
    <Login/>
    </Provider>
    </AppContext.Provider>
  );
}

export default withNamespaces()(App);
