import React from 'react';

//import components
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {options: this.props.options};
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState({options});
            }
        }catch(e){
            console.log(e);
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
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