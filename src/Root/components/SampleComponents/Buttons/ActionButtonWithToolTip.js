import React from "react";
import PropTypes from "prop-types";
import { UncontrolledTooltip } from "reactstrap";
const ActionButtonWithToolTip = ({ title, onClick, className, disabled, id, msg }) => {
    const toolTipMsg = `Cannot perform ${title.toLowerCase()} because of either of below rule(s) violation: `;
    return (
        <React.Fragment>
            <span className="action-btn-wraper" id={id} >
                <button className={"btn btn-primary justify-content-center align-items-center " + (className ? className : "")} disabled={disabled}
                    onClick={onClick} type="button">
                    <span>
                        {title}
                    </span>
                </button>
            </span>
            {msg && <UncontrolledTooltip className="disabled-tooltip" target={id}>
                <React.Fragment>
                    {toolTipMsg} <br />
                    {msg.map((ele, id) => { return (<React.Fragment key={id}><React.Fragment>{(id + 1) + ") " + ele} </React.Fragment>{(id + 1) < msg.length && <br />}</React.Fragment>) })}
                </React.Fragment>
            </UncontrolledTooltip>}
        </React.Fragment>
    );
};

ActionButtonWithToolTip.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
};

export default ActionButtonWithToolTip;
