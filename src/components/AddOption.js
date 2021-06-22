import React from 'react'

class AddOption extends React.Component {

    state = {
        error: undefined
    }

    handleAddOption = (e) => {
        e.preventDefault()
        const optionInput = e.target.elements.option
        const error = this.props.handleAddOption(optionInput.value.trim())

        this.setState(() => ({ error }))

        optionInput.value = ''
        optionInput.focus()

    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" placeholder="Add Option" name="option" />
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        )
    }
}

export default AddOption