import React,{Component} from "react";
//import '../assets/css/App.css'
import Header from "./Header";
import Footer from "./Footer";

import { Switch, Route, Redirect} from 'react-router-dom'
import Home from "../pages/Home";
// import Follow from "../pages/Follow";
import Dlist from "../pages/DetailList";
import User from "../pages/User";
import Login from "../pages/Login";
import Reg from "../pages/Reg";
 import Detail from "../pages/Detail";
import Loading from "./Loading";
import AuthRoute from "./AuthRoute";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/home" component={Home}/>
          {/* {<Route path="/follow" component={Follow}/>*/}
          <Route path="/list" component={Dlist}/> 
          <AuthRoute path="/user" component={User}/> }
          <Route path="/login" component={Login}/>
          <Route path="/reg" component={Reg}/>
          <Route path="/detail/:id" component={Detail}/>
         <Route path="/loading" component={Loading} />
          <Redirect exact from="/" to="/home"/>
         
        </Switch>
       <Footer />
      </div>
    );
  }
}

export default App;