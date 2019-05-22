import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {options: this.props.options};
    }
    handleDeleteOptions(){
        this.setState({options: []});
    }
    handlePick(){
        const ranNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[ranNumber];
        alert(option);
    }
    handleAddOption(option){
        if (!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This value already exists';
        }
        this.setState((state) => ({options: state.options.concat([option])}));
    }
    handleDeleteOption(optionToRemove){
        this.setState((state) => ({
            options: this.state.options.filter((option) => optionToRemove !== option)
        }));
    }
    render() {
        return (
            <main>
                <Header />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </main>
        );
    }
}

App.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>Indecision App</h1>
            <h2>Put your life in the hands of a computer.</h2>
        </div>
    );
}

const Action = (props) => {
    return (
        <div>
            <button
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            <ol>
                {props.options.map((option) => (
                    <Option
                        key={option}
                        optionText={option}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))}
            </ol>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={(e) => props.handleDeleteOption(props.optionText)}>Remove</button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {error: undefined};
    }
    onFormSubmit(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState({error});
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))