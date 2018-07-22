// import React, { Component } from 'react';

// import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// export const NonAuthenticatedRoute = ({ component: Component, ...rest })=>{
//     return(
//         <Route {...rest} render={(props) => (
//             isAuthenticated() ?  <Redirect to='/' /> : <Component {...props} />
//         )} />
//     )
// }


// export default NonAuthenticatedRoute;


import React, { PureComponent } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ToJS } from '@ec-oem/ec.oem.oa3.mux.core/components';
import { connect } from 'react-redux';
import { authorizedRoutesSelector, authorizedRouteStatusSelector } from '../../selectors';
import { AuthorizedRoutesStatus } from '../../actions';
class AuthorizedRoute extends PureComponent {
    constructor(props) {
        super(props);
    }
    isAuthorizedRoute(route,routesToCheck){
        if(!routesToCheck)
            return (this.props.authorizedRoutes && this.props.authorizedRoutes.indexOf(`${route}/`))!== -1;
        else
            return (this.props.authorizedRoutes && this.props.routesToCheck.some((route)=> this.props.authorizedRoutes.indexOf(`${route}/`))!== -1);
    }
    render() {
        const { component: Component, status,routesToCheck, ...rest } = this.props;
        if (status !== AuthorizedRoutesStatus.SUCCESS) return null;
        return <Route {...rest} render={(props) => (
            this.isAuthorizedRoute(this.props.path,routesToCheck)? <Component {...props} />: <Redirect to='/NotAuthorized' />
        )} />

    }
}
const mapStateToProps = (state) => {
    return {
        status: authorizedRouteStatusSelector(state),
        authorizedRoutes:authorizedRoutesSelector(state)
    }
}
export default connect(mapStateToProps, null)(ToJS(AuthorizedRoute))