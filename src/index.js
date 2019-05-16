import ReactDOM from 'react-dom';
import React from 'react';

console.log('index.js is running...');

const userName = 'Ben';
const age = 25;
const location = 'Shillington'

const appObj = {
    title: 'Indecision App',
    subtitle: 'Having a problem deciding what to do?'
};

let template = (
    <div>
        <h1>{appObj.title}</h1>
        <p>{appObj.subtitle}</p>
        <ol>
            <li>This is item 1</li>
            <li>This is item 2</li>
        </ol>
    </div>
);

let templateTwo = (
    <div>
        <h1>{userName}</h1>
        <p>Age: {age}</p>
        <p>Location: {location}</p>
    </div>
);

let root = document.getElementById('root');

ReactDOM.render(template, root);
