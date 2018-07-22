import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ToJS } from "@ec-oem/ec.oem.oa3.mux.core/components";
import { setPageSize } from "../../../actions";
import { pagerSelector } from "../../../selectors";



class ControlledPageSizeSelection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { paginationInfo } = this.props;
        if (!paginationInfo) return null;
        const { title, interval, selectedValue } = paginationInfo;
        const { onPageSizeChanged } = this.props;
        return (
            <React.Fragment>
                {interval ? <select
                    className="selectpicker"
                    aria-label={title ? `${title}-filter` : "filter"}
                    value={selectedValue}
                    defaultValue={interval}
                    onChange={event => onPageSizeChanged(event.target.value)}
                >
                    <option value={interval} >{interval}</option>
                    <option value={2 * interval}>{2 * interval}</option>
                    <option value={3 * interval}>{3 * interval}</option>
                    <option value={5 * interval}>{5 * interval}</option>
                </select> : <div />}
            </React.Fragment>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        paginationInfo: pagerSelector(state)
    }
}

const mapDispatchToProps = (dispatch) => ({
    onPageSizeChanged(value) {
        dispatch(setPageSize(value))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(ToJS(ControlledPageSizeSelection));
