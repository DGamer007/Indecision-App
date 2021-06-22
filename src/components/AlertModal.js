import React from 'react'
import Modal from 'react-modal'

const AlertModal = (props) => {
    return (
        <Modal
            isOpen={!!props.selectedOption}
            contentLabel={props.selectedOption}
            onRequestClose={props.handleExitModal}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="model__title">Selected Option</h3>
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleExitModal}>Okay</button>

        </Modal>
    )
}

export default AlertModal