import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import spinner from '../../../Images/spinner.svg'
import { connect } from 'react-redux';
import { CoreSelectors } from '@ec-oem/ec.oem.oa3.mux.core';
class Spinner extends Component {

    constructor(props) {
        super(props);
    }

    render() {



        return (


            <React.Fragment>
                {this.props.show ?
                    <div className="loader-wrapper">
                        <div className="loading"><div></div><div></div><div></div><div></div></div>
                    </div> : null
                }
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    var pendingCalls = CoreSelectors.pendingAPICallsSelector(state);

    return {
        show: pendingCalls > 0,
    }
};


export default connect(mapStateToProps, null)(Spinner);