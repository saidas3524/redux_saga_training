import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { userSelector } from '../selectors';

export class Header extends Component {
  
  render() {
    return (
      <div style={{backgroundColor:'orange'}}>
        this is header
        <br/>

        username : {this.props.user && this.props.user.name}
      </div>
    )
  }
}

const mapStateToProps = (state) => {


  var user = userSelector(state);
  user = user ? user.toJS() : user;
  return{
    user:user
  }

}



    


const mapDispatchToProps = (dispatch)=>({
   
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Header)
