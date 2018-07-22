import React,{Fragment} from 'react';

// const ModalActions = () => {
//     return (
//         <React.Fragment>
//             <button className={"d-inline-flex align-items-center flex-row-reverse btn btn-primary ms-glyph ms-close" +
//                 (canBtnClassName ? canBtnClassName : "")}
//                 onClick={(props) => cancelAction(props)} type="button">
//                 <span>{localStrings.PR_SUMMARY_MODAL_CANCEL_ACTION}</span>
//             </button>

//             <button className={"d-inline-flex align-items-center flex-row-reverse btn btn-primary ms-glyph ms-accept" +
//                 (proBtnClassName ? proBtnClassName : "")}
//                 color="primary" onClick={(props) => successAction(props)} type="button">
//                 <span>{localStrings.PR_SUMMARY_MODAL_PROCEED_ACTION}</span>
//             </button>
//         </React.Fragment>
//     );
// };

// export default ModalActions;

const ModalActionButton = ({title, onClick, iconClass, classNames}) => {
    return (
        <React.Fragment>
            <button className={"d-inline-flex align-items-center flex-row-reverse btn btn-primary ms-glyph " +
                (classNames ? classNames+" " : " ") + (iconClass? iconClass :"")}
                color="primary" onClick={onClick} type="button">
                <span>{title}</span>
            </button>
        </React.Fragment>
    );
};

export default ModalActionButton;