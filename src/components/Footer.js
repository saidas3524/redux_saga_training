import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { setUser } from '../actions';
export class Footer extends Component {
  
    

  render() {
    return (
      <div style={{backgroundColor:'gray'}}>

         
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch)=>({
}) 

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
