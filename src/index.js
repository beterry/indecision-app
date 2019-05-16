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

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length !== 0 ? 'Here are your options' : 'No options'}</p>
            <p>The options length is: {app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
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