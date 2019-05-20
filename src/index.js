import ReactDOM from 'react-dom';
import React from 'react';

console.log('index.js is running...');

const root = document.getElementById('root');
const app = {
    title: 'Indecision App',
    subtitle: 'Having a hard time deciding what to do?',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const removeAll = () => {
    app.options = [];
    renderApp();
};

const makeDecision = () => {
    const ranNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[ranNumber];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length !== 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={removeAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
            <ol>
                {app.options.map((option) => <li key={option}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, root);
};

renderApp();