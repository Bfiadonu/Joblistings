import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import Single from './components/Single';
import store from './store';



import './App.css';

function App() {
  return (
  <Provider store={store}>
    <div className="App">
    <BrowserRouter>
    <Header />
    <div>
      
 
   
    <Switch>
       <Route exact path="/" component={Jobs} />
        <Route path="/single" component={Single} />  
      </Switch>
  
    
    
    </div>
   </BrowserRouter>
  <Footer />
    </div>
  </Provider>   
  );
}

export default App;
