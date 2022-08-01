import React, { Component } from 'react'
import {Provider} from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer';
import Landing from './components/Home/Landing';
import Job from './components/Home/Job'
import store from './store';



import './App.css';

export class App extends Component {
  render(){
  return (
  <Provider store={store}>
    <div className="App">
    <BrowserRouter>
    <Header />
    <div>
      
 
   
    <Switch>
       <Route exact path="/" component={Landing} />
        <Route path="/job" component={Job} />  
      </Switch>
  
    
    
    </div>
   </BrowserRouter>
  <Footer />
    </div>
  </Provider>   
  );
  }
}

export default App;
