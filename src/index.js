import ReactDOM from 'react-dom';
import React from 'react';

class App extends React.Component {
    render() {
        const options = ['thingOne', 'thingTwo', 'thingThree'];

        return (
            <main>
                <Header />
                <Action />
                <Options options={options}/>
                <AddOption />
            </main>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision App</h1>
                <h2>Put your life in the hands of a computer.</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                {this.props.options.map((option) => <Option key={option} optionText={option}/>)}
            </ol>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>AddOption component here</div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'))