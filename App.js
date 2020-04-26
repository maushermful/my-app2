import React, {Component} from 'react';
import Navbar from './components/navbar';
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import Signup from './components/Signup';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import {Provider} from 'react-redux';
import store from './store'






export class App extends Component {

  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">

        {/* <ClassCounter /> */}
        <Navbar />
        <Switch>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact}/>
            <Route path="/signup" component={Signup}/>

        </Switch>



        </div>
<center><HookCounter /></center>
      </BrowserRouter>
 </Provider>


    )
  }
}


export default App;
