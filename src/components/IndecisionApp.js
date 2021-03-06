import React from 'react'
import Action from './Action'
import AddOption from './AddOption'
import Header from './Header'
import Options from './Options'
import AlertModal from './AlertModal'

class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount() {

        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)

            if (options) {
                this.setState(() => ({ options }))
            }
        } catch (error) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('Component Unmounted.')
    }

    handleExitModal = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }))
    }

    handleAddOption = (option) => {

        if (!option) {
            return 'Enter valid Option.'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Option already exists.'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    }

    handlePick = () => {
        const option = Math.floor(Math.random() * this.state.options.length)

        this.setState(() => ({
            selectedOption: this.state.options[option]
        }))
    }

    render() {
        const subtitle = 'Put your life in the hands of a Computer...!'

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                </div>
                <AlertModal selectedOption={this.state.selectedOption} handleExitModal={this.handleExitModal} />
            </div>
        )
    }
}

export default IndecisionApp