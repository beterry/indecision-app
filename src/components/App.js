import React from 'react';

//import components
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class App extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };
    handleDeleteOptions = () => {
        this.setState({options: []});
    }
    handleCloseModal = () => {
        this.setState({selectedOption: undefined});
    }
    handlePick = () => {
        const ranNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[ranNumber];
        this.setState({selectedOption: option});
    }
    handleAddOption = (option) => {
        if (!option){
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This value already exists';
        }
        this.setState((state) => ({options: state.options.concat([option])}));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((state) => ({
            options: this.state.options.filter((option) => optionToRemove !== option)
        }));
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
    render() {
        return (
            <main>
                <Header />
                <body className='container'>
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
                </body>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </main>
        );
    }
}

App.defaultProps = {
    options: []
}