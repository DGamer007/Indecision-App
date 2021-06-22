import React from 'react'

const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{props.count}. {props.text}</p>
            <button
                className="button--link"
                onClick={(e) => {
                    props.handleDeleteOption(props.text)
                }}>
                Remove
            </button>
        </div>
    )
}

export default Option