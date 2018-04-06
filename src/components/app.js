import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from "../actions";
import Footer  from './Footer';
import  Header  from './Header';
import User  from './User';


class App extends Component {

  runButton = (event)=>{
    this.props.GetUser();
  }
  render() {
    return (
      <div className="App">
          <button onClick = {this.runButton}>Get User Details</button>

          <Header/>
          <User/>
          <Footer/>
      </div>
    );
  }
}
const mapStateToProps = state=>({
  ...state
})
const mapDispatchToProps = dispatch =>({
  GetUser:() => dispatch(setUser({name:"testuser"}))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
