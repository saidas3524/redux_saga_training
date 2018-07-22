import React from 'react';
import PropTypes from 'prop-types';
import { UncontrolledTooltip } from "reactstrap";
const IconButtonWithToolTip = ({ title, id, onClick, iconClass, disabled, msg }) => {
    const toolTipMsg = `Cannot perform ${title.toLowerCase()} because of either of below rule(s) violation: `;
    return (
        <React.Fragment>
            <span className="action-btn-wraper" id={id} >
                <button className={"d-inline-flex align-items-center flex-row-reverse btn btn-icon ms-glyph " + (iconClass ? iconClass : "")} disabled={disabled} onClick={onClick} type="button">
                    <span className="d-none d-lg-block">{title}</span>
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

IconButtonWithToolTip.propTypes = {
    title: PropTypes.string.isRequired,
    iconClass: PropTypes.string
};

export default IconButtonWithToolTip;